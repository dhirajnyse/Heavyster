import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const failures = [];

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

["index.html", "styles.css", "app.js", "site.webmanifest", "assets/heavyster-yard.svg", "assets/favicon.svg"].forEach((path) => {
  assert(existsSync(join(root, path)), `${path} is missing.`);
});

const index = read("index.html");
const css = read("styles.css");
const app = read("app.js");
const manifest = read("site.webmanifest");

assert(index.includes("Content-Security-Policy"), "index.html is missing the CSP meta tag.");
assert(index.includes("Heavyster | Heavy Equipment Command Desk"), "index.html has the wrong title.");
assert(index.includes('id="jobTable"'), "index.html is missing the dispatch table.");
assert(index.includes('id="routeFacts"'), "index.html is missing route facts.");
assert(index.includes('id="handoffSummary"'), "index.html is missing handoff summary.");
assert(index.includes("assets/heavyster-yard.svg"), "index.html is missing the yard visual asset.");
assert(!/\son[a-z]+\s*=/i.test(index), "index.html contains an inline event handler.");
assert(!/https?:\/\//i.test(index + css + app), "Project files should not require remote assets.");
assert(app.includes('const DATA_VERSION = "20260516-heavyster-v1";'), "app.js DATA_VERSION is missing or changed.");
assert(app.includes("localStorage"), "app.js should persist desk state locally.");
assert(app.includes("renderJobs") && app.includes("renderRoute") && app.includes("renderHandoff"), "app.js is missing core renderers.");
assert(app.includes("navigator.clipboard.writeText"), "app.js is missing handoff copy support.");
assert(css.includes("letter-spacing: 0"), "styles.css should keep letter spacing neutral.");
assert(!/letter-spacing:\s*-/i.test(css), "styles.css contains negative letter spacing.");
assert(manifest.includes('"name": "Heavyster"'), "site.webmanifest has the wrong app name.");

if (failures.length) {
  console.error("Static check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Heavyster static check passed.");
