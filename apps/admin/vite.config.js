import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    solidPlugin({
      babel: {
        plugins: ["effector/babel-plugin"],
      },
    }),
    tsconfigPaths({
      projects: [
        resolve("tsconfig.json"),
        resolve("../../packages/tsconfig/solid.json"),
      ],
    }),
  ],
  server: {
    port: 3004,
  },
  build: {
    target: "esnext",
  },
});
