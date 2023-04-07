import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    solidPlugin(),
    tsconfigPaths({
      projects: [
        resolve("tsconfig.json"),
        resolve("../../packages/tsconfig/solid.json"),
      ],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
