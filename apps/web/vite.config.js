import solidPlugin from "vite-plugin-solid";

import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    solidPlugin(),
    tsconfigPaths({
      projects: [resolve("tsconfig.json"), resolve("../../packages/tsconfig/solid.json")],
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      "/api/": {
        target: "http://localhost:3009",
      },
    },
  },

  build: {
    target: "esnext",
  },
});
