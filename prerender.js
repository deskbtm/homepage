const fs = require("fs");
const path = require("path");

const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/static/index.html"), "utf-8");
const { render } = require("./dist/server/main-server.js");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url>
  <loc>https://deskbtm.com/</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
</url>
</urlset>
`;

(async () => {
  const appHtml = await render();

  const html = template.replace(`<!--app-html-->`, appHtml);

  const filePath = `dist/static/index.html`;
  const sitemapPath = `dist/static/sitemap.xml`;
  fs.writeFileSync(toAbsolute(filePath), html);
  fs.writeFileSync(toAbsolute(sitemapPath), sitemap);
  console.log("pre-rendered:", filePath);
})();
