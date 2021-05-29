var ghpages = require("gh-pages");
var { exec } = require("child_process");
var ora = require("ora");

async function publish() {
  ghpages.publish(
    "./dist/static",
    {
      branch: "master",
      repo: "https://e.coding.net/deskbtm/deskbtm/deskbtm-homepage.git",
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

async function buildDemo() {
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

(async function name() {
  const spinner = ora("building docs...").start();
  await buildDemo();
  spinner.stop();
  spinner.clear();
  console.log("build Success");
  spinner.start("deploying docs...");
  await publish();
  spinner.stop();
  spinner.clear();
  console.log("deploy Success");
})();
