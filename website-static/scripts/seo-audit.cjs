// Cross-page SEO audit: uniqueness, heading order, schema ids, sitemap/dist parity, orphan pages.
const fs = require("fs");
const path = require("path");
const dist = path.join(__dirname, "..", "dist");

function walk(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(d, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}
const pages = walk(dist).filter((f) => f.endsWith("index.html"));
const urlOf = (f) => "/" + path.relative(dist, f).replace(/\\/g, "/").replace(/index\.html$/, "");

const titles = new Map();
const descs = new Map();
const h1s = new Map();
const inbound = new Map();
const issues = [];
const note = (u, m) => issues.push(`${u}  ${m}`);

for (const f of pages) {
  const u = urlOf(f);
  const html = fs.readFileSync(f, "utf8");
  const t = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  const d = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  const h = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1];
  for (const [map, val] of [[titles, t], [descs, d], [h1s, h && h.replace(/<[^>]+>/g, "").trim()]]) {
    if (!val) continue;
    if (map.has(val)) note(u, `duplicate with ${map.get(val)}: "${val.slice(0, 60)}"`);
    else map.set(val, u);
  }
  if (d && d.length < 70) note(u, `description short (${d.length})`);

  // heading order: no level skips going down
  let prev = 1;
  for (const m of html.matchAll(/<h([1-6])[\s>]/g)) {
    const lvl = Number(m[1]);
    if (lvl > prev + 1) note(u, `heading jump h${prev} -> h${lvl}`);
    prev = lvl;
  }
  // schema: @id referenced must exist somewhere
  for (const m of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    const to = m[1];
    if (to !== u) inbound.set(to, (inbound.get(to) || 0) + 1);
  }
}

// orphan pages
for (const f of pages) {
  const u = urlOf(f);
  if (u !== "/" && !inbound.get(u)) note(u, "orphan: no internal links point here");
}

// sitemap parity
const sm = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
const smUrls = [...sm.matchAll(/<loc>https:\/\/heliolattice\.com([^<]*)<\/loc>/g)].map((m) => m[1]);
for (const f of pages) {
  const u = urlOf(f);
  if (!smUrls.includes(u)) note(u, "missing from sitemap");
}
for (const u of smUrls) if (!pages.some((f) => urlOf(f) === u)) note(u, "in sitemap but no page");

// home schema ids
const home = fs.readFileSync(path.join(dist, "index.html"), "utf8");
if (!home.includes('"@id": "https://heliolattice.com/#website"') && !home.includes('/#website"'))
  note("/", "no WebSite @id (#website) defined; other pages reference it");
if (!/"@type":\s*"Organization"/.test(home)) note("/", "no Organization schema");

console.log(`${pages.length} pages, ${smUrls.length} sitemap urls`);
if (issues.length) {
  console.log("ISSUES:\n" + issues.join("\n"));
  process.exitCode = 1;
} else console.log("SEO audit clean");
