const isVercel = !!process.env.VERCEL;

if (!isVercel) {
  console.log("Running react-snap...");
  const { execSync } = require("child_process");
  execSync("npx react-snap", { stdio: "inherit" });
} else {
  console.log("Skipping react-snap on Vercel");
}
