var ghpages = require("gh-pages");
var { exec } = require("child_process");
var ora = require("ora");
const fs = require("fs");

async function publish() {
  return new Promise((resolve, reject) => {
    ghpages.publish(
      "./out",
      {
        branch: "master",
        repo: "https://github.com/Nawbc/deskbtm-homepage.git",
        message: "Auto-generated commit",
        user: {
          name: "Nawbc",
          email: "wanghan9423@outlook.com",
        },
      },
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}

async function buildHomepage() {
  await new Promise((resolve, reject) => {
    exec("npm run static", (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

(async function name() {
  const spinner = ora("building homepage...").start();
  await buildHomepage();
  spinner.stop();
  spinner.clear();
  console.log("Building successfully");
  spinner.start("deploying homepage...");
  await publish().catch((err) => console.error("Error:", err));
  spinner.stop();
  spinner.clear();
  console.log("Deploying successfully");
})();
