import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceRoots = ["app", "components", "content", "features", "lib"];
const sourceFiles = sourceRoots.flatMap((sourceRoot) => collectSourceFiles(sourceRoot));

const imageReference =
  /["'`](\/(?!\/|public\/)[^"'`\s?#]+\.(?:avif|gif|jpe?g|png|svg|webp))["'`]/gi;
const markdownImage = /!\[[^\]]*]\((\/[^)\s?#]+\.(?:avif|gif|jpe?g|png|svg|webp))\)/gi;
const references = new Map();

for (const file of sourceFiles) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  for (const pattern of [imageReference, markdownImage]) {
    pattern.lastIndex = 0;
    for (const match of source.matchAll(pattern)) {
      const imagePath = match[1];
      const owners = references.get(imagePath) ?? new Set();
      owners.add(file);
      references.set(imagePath, owners);
    }
  }
}

const missing = [];
for (const [imagePath, owners] of references) {
  const publicFile = path.join(root, "public", imagePath);
  const appMetadataFile = path.join(root, "app", imagePath);
  if (!fs.existsSync(publicFile) && !fs.existsSync(appMetadataFile)) {
    missing.push({ imagePath, owners: [...owners] });
  }
}

if (missing.length) {
  console.error(`Missing ${missing.length} referenced image${missing.length === 1 ? "" : "s"}:`);
  for (const item of missing) {
    console.error(`- ${item.imagePath}\n  ${item.owners.join(", ")}`);
  }
  process.exitCode = 1;
} else {
  console.log(`Image audit passed: ${references.size} local references resolve to public files.`);
}

function collectSourceFiles(relativeDirectory) {
  const absoluteDirectory = path.join(root, relativeDirectory);
  if (!fs.existsSync(absoluteDirectory)) return [];

  return fs.readdirSync(absoluteDirectory, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = path.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) return collectSourceFiles(relativePath);
    return /\.(?:css|js|jsx|md|ts|tsx)$/.test(entry.name) ? [relativePath] : [];
  });
}
