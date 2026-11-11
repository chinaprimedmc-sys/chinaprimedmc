/**
 * 本脚本职责：以生产模式启动稳定的本地预览，并自动避开已占用端口。
 * 输入：可选环境变量 HOST（默认 127.0.0.1）与 PORT（默认 3148）。
 * 输出：一个明确可访问的本地 URL，并把退出信号转交给 Next.js 子进程。
 * 不负责：执行生产构建；需要最新构建时使用 pnpm preview:fresh。
 * 关键规则：本地交付预览统一使用 next start，不使用 file:// 或默认 Turbopack。
 */

import { cp, mkdir, readFile, rm } from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { fileURLToPath } from "node:url";

const host = process.env.HOST || "127.0.0.1";
const requestedPort = Number.parseInt(process.env.PORT || "3148", 10);
const port = await findAvailablePort(requestedPort, host);
const nextBin = fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url));

// A running preview must never read a directory that `next build` replaces.
const buildId = (await readFile(new URL("../.next/BUILD_ID", import.meta.url), "utf8")).trim();
const snapshotRoot = path.resolve(
  fileURLToPath(new URL("../.codex-deploy/previews/", import.meta.url)),
);
await mkdir(snapshotRoot, { recursive: true });
const snapshot = path.join(snapshotRoot, `${buildId}-${process.pid}`);
await cp(fileURLToPath(new URL("../.next", import.meta.url)), snapshot, {
  recursive: true,
  filter: (source) => !source.split(path.sep).includes("cache"),
});
const currentBuildId = (
  await readFile(new URL("../.next/BUILD_ID", import.meta.url), "utf8")
).trim();
if (currentBuildId !== buildId) {
  await rm(snapshot, { recursive: true, force: true });
  throw new Error("Build changed while creating preview. Wait for the build to finish and retry.");
}

console.log(`\nAVIORA local preview: http://${host}:${port}/tours\n`);

const child = spawn(
  process.execPath,
  [nextBin, "start", "--hostname", host, "--port", String(port)],
  {
    env: { ...process.env, AVIORA_PREVIEW_DIST_DIR: path.relative(process.cwd(), snapshot) },
    stdio: "inherit",
  },
);

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}

child.on("exit", async (code, signal) => {
  await rm(snapshot, { recursive: true, force: true });
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 0);
});

async function findAvailablePort(startPort, hostname) {
  for (let portCandidate = startPort; portCandidate < startPort + 50; portCandidate += 1) {
    if (await isPortAvailable(portCandidate, hostname)) return portCandidate;
  }
  throw new Error(`No available local preview port between ${startPort} and ${startPort + 49}.`);
}

function isPortAvailable(portCandidate, hostname) {
  return new Promise((resolve) => {
    const server = createServer();
    server.unref();
    server.once("error", () => resolve(false));
    server.listen({ host: hostname, port: portCandidate }, () => {
      server.close(() => resolve(true));
    });
  });
}
