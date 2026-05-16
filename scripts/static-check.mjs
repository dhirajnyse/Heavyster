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

[
  "index.html",
  "styles.css",
  "app.js",
  "site.webmanifest",
  "assets/favicon.svg",
  "assets/heavyster-logo-3d.svg",
  "assets/heavyster-social-card.svg",
  "assets/heavyster-yard.svg",
  "docs/MONETIZATION.md",
  "docs/PRODUCT_SPEC.md",
  "docs/DATA_MODEL.md",
  "docs/BUILD_BACKLOG.md"
].forEach((path) => {
  assert(existsSync(join(root, path)), `${path} is missing.`);
});

const index = read("index.html");
const css = read("styles.css");
const app = read("app.js");
const manifest = read("site.webmanifest");

assert(index.includes("Content-Security-Policy"), "index.html is missing the CSP meta tag.");
assert(index.includes("Heavyster | Heavy Equipment Rental Listings"), "index.html has the wrong title.");
assert(index.includes("USD 9") && index.includes("USD 99"), "index.html is missing the listing pricing model.");
assert(index.includes("1% confirmed-booking success fee"), "index.html is missing the phase-two success fee model.");
assert(index.includes('id="listingGrid"'), "index.html is missing the marketplace listing grid.");
assert(index.includes('id="supplierTable"'), "index.html is missing the supplier workspace.");
assert(index.includes('id="trustChecklist"'), "index.html is missing the verification checklist.");
assert(index.includes('id="bookingFeeOutput"'), "index.html is missing the commission calculator.");
assert(index.includes("assets/heavyster-logo-3d.svg"), "index.html is missing the 3D logo asset.");
assert(!/\son[a-z]+\s*=/i.test(index), "index.html contains an inline event handler.");
assert(!/https?:\/\//i.test(index + css + app), "Project files should not require remote assets.");
assert(app.includes('const DATA_VERSION = "20260516-heavyster-marketplace-v1";'), "app.js DATA_VERSION is missing or changed.");
assert(app.includes("localStorage"), "app.js should persist prototype state locally.");
assert(app.includes("renderListings") && app.includes("renderSupplierTable") && app.includes("renderPricingCalculator"), "app.js is missing core renderers.");
assert(app.includes("renderCommissionCalculator"), "app.js is missing the phase-two commission calculator.");
assert(app.includes("navigator.clipboard.writeText"), "app.js is missing direct enquiry copy support.");
assert(css.includes("letter-spacing: 0"), "styles.css should keep letter spacing neutral.");
assert(!/letter-spacing:\s*-/i.test(css), "styles.css contains negative letter spacing.");
assert(manifest.includes('"name": "Heavyster"'), "site.webmanifest has the wrong app name.");

if (failures.length) {
  console.error("Static check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Heavyster static check passed.");
