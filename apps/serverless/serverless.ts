import type { AWS } from "@serverless/typescript";

import { functions } from "./src/functions";

const serverlessConfiguration: AWS = {
  service: "api1",
  frameworkVersion: "3.29.0",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs16.x",
    stage: "dev",
    region: "eu-north-1",
    environment: {
      ["AWS_NODEJS_CONNECTION_REUSE_ENABLED"]: "1",
      ["NODE_OPTIONS"]: "--enable-source-maps --stack-trace-limit=1000",
    },
    deploymentMethod: "direct"
  },
  functions: {...functions},
  package: {individually: true},
  custom: {
    esbuild: {
      bundle: true,
      minify: true,
      sourcemap: false,
      exclude: ["aws-sdk"],
      target: "node16",
      define: {["require.resolve"]: undefined},
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
