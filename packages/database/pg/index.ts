import type { ClientConfig } from "pg";
import { Client } from "pg";

export const connectDb = async (options: string | ClientConfig) => {
  const client = new Client(options);

  await client.connect();

  return client;
};
