// var ghpages = require("gh-pages");
var { exec } = require("child_process");
var ora = require("ora");
const { Client } = require("node-scp");
const fs = require("fs");
const path = require("path");
const os = require("os");
const { copyFile, readdir } = fs.promises;

async function publish() {
  const client = await Client({
    host: "47.116.67.236",
    port: 22,
    username: "root",
    privateKey: fs.readFileSync(path.resolve(os.homedir(), ".ssh/id_rsa")),
  });

  return client
    .uploadDir("./dist/static", "/root/deskbtm-homepage")
    .then(() => {
      client.close();
    });

  // return new Promise((resolve, reject) => {
  //   ghpages.publish(
  //     "./dist/static",
  //     {
  //       branch: "master",
  //       repo: "https://github.com/sewerganger/deskbtm-homepage.git",
  //       message: "Auto-generated commit",
  //       user: {
  //         name: "sewerganger",
  //         email: "wanghan9423@outlook.com",
  //       },
  //     },
  //     (err) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         resolve();
  //       }
  //     }
  //   );
  // });
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
  await publish().catch((err) => console.error("Error:", err));
  spinner.stop();
  spinner.clear();
  console.log("deploy Success");
})();
