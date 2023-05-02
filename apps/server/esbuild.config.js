const config = require("dotenv").config;
const esbuild = require("esbuild");

config();

esbuild
  .build({
    entryPoints: ["./src/index.ts"],
    outdir: "dist",
    bundle: true,
    minify: true,
    format: "cjs",
    platform: "node",
  })
  .catch(() => {
    console.log("\x1b[31m build failed");

    return process.exit(1);
  })
  .then((t) => {
    console.log("\x1b[32m build succeeded:", new Date().toLocaleTimeString());

    return t;
  });
