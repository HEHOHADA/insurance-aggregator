import middy from "@middy/core";
import middyJsonBodyParser from "@middy/http-json-body-parser";
import type { Handler } from "aws-lambda/handler";

export const middyfy = <T extends Handler>(handler: T) => {
  return middy(handler, { timeoutEarlyInMillis: 0 }).use(middyJsonBodyParser());
};
