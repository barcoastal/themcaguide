import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["content/articles", "content/guides"];
const failures = [];

function wordCount(s) {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function checkFile(path) {
  const raw = readFileSync(path, "utf8");
  const body = raw.replace(/^---[\s\S]*?---/, "");

  if (/\u2014/.test(body)) {
    failures.push(`${path}: contains em dash (U+2014). Use hyphens or rewording.`);
  }

  const words = wordCount(body.replace(/<[^>]+>/g, " "));
  const min = path.includes("content/guides/") ? 2500 : 1500;
  if (words < min) {
    failures.push(`${path}: word count ${words} < required ${min}.`);
  }

  const authorityRegex = /https?:\/\/[^\s")]*\.(gov|edu)/i;
  if (!authorityRegex.test(body)) {
    failures.push(`${path}: no .gov or .edu external authority link found.`);
  }

  if (!/Key Takeaways|<KeyTakeaways/.test(body)) {
    failures.push(`${path}: missing Key Takeaways block.`);
  }

  const markdownInternal = body.match(/\]\(\/(articles|guides|tools|templates|glossary)\//g) || [];
  const hrefInternal = body.match(/href="\/(articles|guides|tools|templates|glossary)\//g) || [];
  if (markdownInternal.length + hrefInternal.length < 3) {
    failures.push(`${path}: fewer than 3 internal links.`);
  }
}

for (const root of ROOTS) {
  for (const name of readdirSync(root)) {
    if (!name.endsWith(".mdx")) continue;
    checkFile(join(root, name));
  }
}

if (failures.length) {
  console.error(`Content check failed:\n${failures.map(f => "  - " + f).join("\n")}`);
  process.exit(1);
}
console.log("Content check passed.");
