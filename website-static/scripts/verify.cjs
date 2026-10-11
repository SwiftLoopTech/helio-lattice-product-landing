// Per-page verification: node scripts/verify.cjs [path-to-html ...]
// Checks structure, SEO fields, JSON-LD validity and content-rule violations.
const fs = require("fs");
const path = require("path");

const dist = path.join(__dirname, "..", "dist");
const files = process.argv.length > 2
  ? process.argv.slice(2)
  : (function walk(d) {
      return fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
        e.isDirectory() ? walk(path.join(d, e.name)) : e.name.endsWith(".html") ? [path.join(d, e.name)] : []
      );
    })(dist);

const banned = [
  /\bFGE\b/i, /fgesolar/i, /coming soon/i, /\bbeta\b/i, /roadmap/i,
  /firebase/i, /cloud run/i, /prisma/i, /postgres/i, /next\.?js/i, /\breact\b/i,
  /we (do not|don't|dont)\b/i, /\bnot a\b/i, /does not do/i, /lorem ipsum/i,
  /suryahub/i, /\bTODO\b(?![^<]*GA4)/,
];

let failed = 0;
for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const rel = path.relative(dist, file);
  const problems = [];

  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) problems.push(`expected 1 <h1>, found ${h1s}`);

  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  if (!title) problems.push("missing <title>");
  if (title.length > 65) problems.push(`title too long (${title.length})`);

  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  if (!desc) problems.push("missing meta description");
  if (desc.length > 160) problems.push(`description too long (${desc.length})`);

  if (!/<link rel="canonical" href="https:\/\/heliolattice\.com\//.test(html)) problems.push("missing/invalid canonical");
  if (!/property="og:title"/.test(html)) problems.push("missing og:title");

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { problems.push("invalid JSON-LD: " + e.message); }
  }

  const visible = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<!--[\s\S]*?-->/g, "");
  for (const re of banned) {
    const hit = visible.match(re);
    if (hit) problems.push(`banned/risky text: "${hit[0]}"`);
  }

  // images need dimensions and alt
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\bwidth=/.test(m[0]) || !/\bheight=/.test(m[0])) problems.push("img without width/height");
    if (!/\balt=/.test(m[0])) problems.push("img without alt");
  }

  // internal links must either exist in dist or be listed as planned
  const planned = JSON.parse(fs.readFileSync(path.join(__dirname, "planned-urls.json"), "utf8"));
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const href = m[1];
    if (/\.(css|js|png|svg|woff2|xml|txt)$/.test(href)) continue;
    const target = path.join(dist, href, href.endsWith("/") ? "index.html" : "");
    if (!fs.existsSync(target) && !planned.includes(href)) problems.push(`broken internal link: ${href}`);
  }

  // anchors (#id) must exist on the target page
  for (const m of html.matchAll(/href="(\/[^"#?]*)?#([^"]+)"/g)) {
    const targetPath = m[1] || "/" + rel.replace(/\\/g, "/").replace(/index\.html$/, "");
    const file = path.join(dist, targetPath, targetPath.endsWith("/") ? "index.html" : "");
    if (!fs.existsSync(file)) continue;
    const targetHtml = fs.readFileSync(file, "utf8");
    if (!targetHtml.includes(`id="${m[2]}"`)) problems.push(`missing anchor target: ${targetPath}#${m[2]}`);
  }

  const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
  if (problems.length) {
    failed++;
    console.log(`FAIL ${rel} (${kb} KB)`);
    problems.forEach((p) => console.log("   - " + p));
  } else {
    console.log(`PASS ${rel} (${kb} KB)`);
  }
}
process.exit(failed ? 1 : 0);
