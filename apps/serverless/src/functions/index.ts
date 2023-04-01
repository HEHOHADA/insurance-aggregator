import type { AWS } from "@serverless/typescript";

import { schema } from "./get-travel-data/schema";

export const functions: AWS["functions"] = {
  ['get-travel-data']: {
    handler: "src/functions/get-travel-data/handler.main",
    description: "Lambda function to say hello",
    memorySize: 256,
    events: [
      {
        http: {
          method: "post",
          path: "hello",
          cors: true,
          request: {
            schemas: {
              ["application/json"]: schema,
            },
          },
        },
      },
    ],
  },
};
