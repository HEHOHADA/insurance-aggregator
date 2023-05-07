import type { AWS } from "@serverless/typescript";
import * as dotenv from "dotenv";
import * as process from "process";
import type { EsbuildOptions } from "serverless-esbuild/dist/types";

import { functions } from "./src/functions";

dotenv.config();

const serverlessConfiguration: AWS = {
  service: "api1",
  frameworkVersion: "3.29.0",
  plugins: ["serverless-esbuild", "serverless-offline", "serverless-chrome"],
  provider: {
    name: "aws",
    runtime: "nodejs16.x",
    stage: "dev",
    region: "eu-north-1",
    environment: {
      ["AWS_NODEJS_CONNECTION_REUSE_ENABLED"]: "1",
      ["NODE_OPTIONS"]: "--enable-source-maps --stack-trace-limit=1000",
      ["DATABASE_URL"]: process.env.DATABASE_URL || "",
    },
    deploymentMethod: "direct",
  },
  functions: { ...functions },
  package: {
    individually: true,
    patterns: [
      "**/*.prisma",
      process.env.NODE_ENV === "production"
        ? "**/libquery_engine-rhel-openssl-1.0.x.so.node"
        : "**/libquery_engine-darwin-arm64.dylib.node",
    ],
  },
  custom: {
    ["serverless-offline"]: {
      httpPort: 5000,
    },
    esbuild: {
      bundle: true,
      minify: true,
      sourcemap: false,
      exclude: ["aws-sdk"],
      target: "node18",
      define: { ["require.resolve"]: undefined as any },
      platform: "node",
      concurrency: 10,
    } as EsbuildOptions,
  },
};

module.exports = serverlessConfiguration;
