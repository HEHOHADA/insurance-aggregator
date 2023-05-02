import cookie from "@fastify/cookie";
import cors from "@fastify/cors";
import type { FastifyServerOptions } from "fastify";
import Fastify from "fastify";

import { prismaPlugin } from "./db";
import { travelRoutes } from "./services";

export type AppOptions = Partial<FastifyServerOptions>;

async function buildApp(_options: AppOptions = {}) {
  const fastify = Fastify({
    logger: true,
  });

  fastify.register(prismaPlugin);

  fastify.register(cors, {
    origin: ["http://localhost:3000", "http://localhost:3004"],
    credentials: true,
  });

  fastify.register(cookie, {
    secret: "my-secret",
  });

  fastify.get("/status", async (req, res) => {
    res.code(200).send({ message: "Ok" });
  });

  fastify.register(travelRoutes);

  return fastify;
}

export { buildApp };
