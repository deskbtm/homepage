var ghpages = require("gh-pages");
var { exec } = require("child_process");
var ora = require("ora");
var fs = require("fs");

const { copyFile, readdir } = fs.promises;

async function publish() {
  ghpages.publish(
    "./dist/static",
    {
      branch: "master",
      repo: "https://e.coding.net/deskbtm/deskbtm/deskbtm-homepage-static.git",
      message: "Auto-generated commit",
      user: {
        name: "sewerganger",
        email: "wanghan9423@outlook.com",
      },
    },
    (err) => {
      if (err) {
        throw err;
      }
    }
  );
}

async function buildHomepage() {
  await new Promise((resolve, reject) => {
    exec("npm run generate", (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

async function copySite() {
  const dir = await readdir("./site");
  dir.forEach(async (file) => {
    await copyFile(`./site/${file}`, `./dist/static/${file}`);
  });
}

(async function name() {
  const spinner = ora("building homepage...").start();
  await buildHomepage();
  await copySite();
  spinner.stop();
  spinner.clear();
  console.log("build Success");
  spinner.start("deploying homepage...");
  await publish();
  spinner.stop();
  spinner.clear();
  console.log("deploy Success");
})();
