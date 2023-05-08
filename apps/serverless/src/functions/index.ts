import type { AWS } from "@serverless/typescript";

export const functions: AWS["functions"] = {
  ["get-travel-data"]: {
    handler: "src/functions/get-travel-data/handler.main",
    memorySize: 256,
    timeout: 60,
    events: [
      {
        schedule: {
          rate: ["rate(5 minutes)"],
        },
        http: {
          method: "GET",
          path: "get-travel-data",
          cors: true,
        },
      },
    ],
  },
};
