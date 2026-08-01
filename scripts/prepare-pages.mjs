import fs from "node:fs";
import path from "node:path";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
if (!basePath) process.exit(0);

const outputDir = path.resolve("dist/client");
const files = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (/\.(html|css|js)$/.test(entry.name)) files.push(fullPath);
  }
}
walk(outputDir);

for (const file of files) {
  const original = fs.readFileSync(file, "utf8");
  const updated = original.replace(/(["'(])\/assets\//g, `$1${basePath}/assets/`);
  if (updated !== original) fs.writeFileSync(file, updated);
}
