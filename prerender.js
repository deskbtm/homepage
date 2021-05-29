const fs = require("fs");
const path = require("path");

const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute("dist/static/index.html"), "utf-8");
const { render } = require("./dist/server/main-server.js");

(async () => {
  const appHtml = await render();

  const html = template.replace(`<!--app-html-->`, appHtml);

  const filePath = `dist/static/index.html`;
  fs.writeFileSync(toAbsolute(filePath), html);
  console.log("pre-rendered:", filePath);
})();
