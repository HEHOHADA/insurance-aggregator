import type { AWS } from "@serverless/typescript";

export const functions: AWS["functions"] = {
  ["get-travel-data"]: {
    handler: "src/functions/get-travel-data/handler.main",
    events: [
      {
        schedule: {
          rate: ["rate(5 minutes)"],
          input: {
            d: 1,
          },
        },
      },
    ],
  },
};
