import * as dotenv from "dotenv";

import { buildApp } from "./app";

dotenv.config();

const port = (process.env.SERVER_PORT as unknown as number) || 3009;
const host = process.env.SERVER_HOST || "localhost";

const start = async () => {
  const app = await buildApp();

  try {
    await app.listen({
      port,
      host,
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
