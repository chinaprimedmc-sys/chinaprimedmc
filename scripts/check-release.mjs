import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";

// One release gate for local work and CI. Never reuses an older preview server.
process.chdir(fileURLToPath(new URL("../", import.meta.url)));

async function run(script, env = process.env) {
  console.log(`\nRelease check: ${script}`);
  const child = spawn("pnpm", [script], { stdio: "inherit", env });
  const [code, signal] = await once(child, "exit");
  if (code !== 0) throw new Error(`${script} failed (${signal || code}).`);
}

for (const script of ["lint", "typecheck", "test:unit", "build", "audit:media"]) {
  await run(script);
}

const socket = createServer();
socket.listen(0, "127.0.0.1");
await once(socket, "listening");
const port = socket.address().port;
await new Promise((resolve, reject) =>
  socket.close((error) => (error ? reject(error) : resolve())),
);
const origin = `http://127.0.0.1:${port}`;
const preview = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port)],
  { stdio: "inherit" },
);
let previewError;
preview.on("error", (error) => {
  previewError = error;
});
const shutdown = () => preview.kill("SIGTERM");
process.once("SIGINT", shutdown);
process.once("SIGTERM", shutdown);

try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (previewError) throw previewError;
    if (preview.exitCode !== null) throw new Error("Release preview exited before becoming ready.");
    try {
      const response = await fetch(origin, { signal: AbortSignal.timeout(2000) });
      await response.arrayBuffer();
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {
      /* Wait for Next.js readiness. */
    }
    await delay(500);
  }
  if (!ready) throw new Error("Release preview did not become ready.");
  const env = { ...process.env, PREVIEW_URL: origin, SEO_BASE_URL: origin, AUDIT_BASE_URL: origin };
  for (const script of [
    "audit:seo",
    "audit:home-search",
    "audit:structured-data",
    "audit:journal-rendered",
    "test:browser",
    "audit:links",
  ]) {
    await run(script, env);
  }
  console.log("\nRelease checks passed.");
} finally {
  if (preview.exitCode === null && !previewError) {
    const exited = once(preview, "exit");
    shutdown();
    await exited;
  }
  process.removeListener("SIGINT", shutdown);
  process.removeListener("SIGTERM", shutdown);
}
