// Export-build patcher for `export const dynamic` route configs.
//
// Next.js requires `export const dynamic` to be a static string literal, so
// the export-vs-dynamic choice cannot live in an expression. The export
// build script flips every "force-dynamic" literal to "force-static" before
// `next build` and restores the originals after — keeping the source tree
// byte-identical to the dynamic upstream behavior outside export builds.
//
// Usage: node patch-dynamic.cjs --apply | --restore
const fs = require("fs");
const path = require("path");

const APP = path.resolve(__dirname, "../shell-docs/src/app");
const FILES = [
  "[[...slug]]/page.tsx",
  "[framework]/[[...slug]]/page.tsx",
  "cookbook/page.tsx",
  "cookbook/[...slug]/page.tsx",
  "frontends/[frontend]/page.tsx",
  "frontends/[frontend]/[...slug]/page.tsx",
  "frontends/[frontend]/using-these-docs/page.tsx",
  "sitemap.ts",
  "robots.ts",
];

const APPLY = process.argv.includes("--apply");
const FROM = APPLY ? "force-dynamic" : "force-static";
const TO = APPLY ? "force-static" : "force-dynamic";
const NEEDLE = `export const dynamic = "${FROM}";`;
const REPLACEMENT = `export const dynamic = "${TO}";`;

let changed = 0;
for (const rel of FILES) {
  const f = path.join(APP, rel);
  if (!fs.existsSync(f)) continue;
  const src = fs.readFileSync(f, "utf8");
  if (!src.includes(NEEDLE)) continue;
  fs.writeFileSync(f, src.split(NEEDLE).join(REPLACEMENT));
  changed++;
}
console.log(`patch-dynamic ${APPLY ? "apply" : "restore"}: ${changed} file(s) updated`);
