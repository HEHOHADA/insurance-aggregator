import type { PrismaClient } from "@prisma/client";
import fp from "fastify-plugin";
import { initDatabaseConnection } from "server-libs";

// Use TypeScript module augmentation to declare the type of server.prisma to be PrismaClient
declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

const prismaPlugin = fp(async (server) => {
  const prisma = await initDatabaseConnection();

  // Make Prisma Client available through the fastify server instance: server.prisma
  server.decorate("prisma", prisma);
  server.addHook("onClose", async () => {
    await server.prisma.$disconnect();
  });
});

export { prismaPlugin };
