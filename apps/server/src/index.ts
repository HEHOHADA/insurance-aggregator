import cookie from "@fastify/cookie";
import cors from "@fastify/cors";
import Fastify from "fastify";
import * as dotenv from "dotenv";

dotenv.config();

const port = (process.env.SERVER_PORT as unknown as number) || 3009;
const host = process.env.SERVER_HOST || "localhost";

const fastify = Fastify({
  logger: true,
});

//#region fastify plugins

fastify.register(cors, {
  origin: [
    "http://localhost:3000",
    "http://localhost:4000",
    "https://local.dev.acquirecloud.io:3000",
    /\.acquirecloud\.io$/,
  ],
  credentials: true,
});

fastify.register(cookie, {
  secret: "my-secret",
  parseOptions: {},
});

fastify.get("/status", async (req, res) => {
  res.code(200).send({message: "Ok"});
});

const start = async () => {
  try {
    await fastify.listen({
      port,
      host,
    });
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
