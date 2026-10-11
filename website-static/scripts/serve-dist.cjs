// Tiny static server for dist/ (preview and screenshots). Usage: node scripts/serve-dist.cjs [port]
const http = require("http");
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..", "dist");
const port = Number(process.argv[2] || 8091);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".svg": "image/svg+xml", ".woff2": "font/woff2", ".xml": "application/xml", ".txt": "text/plain; charset=utf-8" };
http
  .createServer((req, res) => {
    let p = path.join(root, decodeURIComponent(req.url.split("?")[0]));
    if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, "index.html");
    if (!p.startsWith(root) || !fs.existsSync(p)) {
      res.writeHead(404);
      return res.end("Not found");
    }
    res.writeHead(200, { "content-type": types[path.extname(p)] || "application/octet-stream" });
    fs.createReadStream(p).pipe(res);
  })
  .listen(port, () => console.log("serving dist on " + port));
