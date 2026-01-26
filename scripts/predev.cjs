const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const projectRoot = process.cwd();
const lockPath = path.join(projectRoot, ".next", "dev", "lock");

function killPort(port) {
  try {
    execSync(`npx kill-port ${port}`, { stdio: "ignore" });
  } catch (error) {
    // ignore
  }
}

function cleanLock() {
  try {
    if (fs.existsSync(lockPath)) {
      fs.rmSync(lockPath, { force: true });
    }
  } catch (error) {
    console.warn("Warning: unable to remove stale dev lock", error);
  }
}

killPort(3000);
cleanLock();
