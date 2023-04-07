import type { FastifyPluginCallback } from "fastify";

export const travelRoutes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get("/travel", async () => {
    const res = await fastify.prisma.travel.findMany();
  });

  done();
};
