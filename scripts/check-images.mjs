import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';

// Check literal public-image references before exporting the static site.
// This includes frontmatter, cards, author photos, CSS, and social metadata.
const extensions = new Set(['.mdx', '.tsx', '.ts', '.json', '.css']);
const images = new Set();
const failures = [];
function scan(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) { scan(file); continue; }
    if (!extensions.has(path.extname(file))) continue;
    for (const [image] of readFileSync(file, 'utf8').matchAll(/\/images\/[\w/.-]+/g)) {
      images.add(image);
      const asset = path.join('public', image);
      if (!existsSync(asset) || !statSync(asset).isFile() || statSync(asset).size === 0) {
        failures.push(`${file}: missing or empty image ${image}`);
      }
    }
  }
}
scan('content');
scan('src');
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Image checks passed: ${images.size} referenced assets exist and are nonempty.`);
