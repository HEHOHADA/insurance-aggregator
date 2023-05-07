import type { FastifyPluginCallback } from "fastify";

export const travelRoutes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get<{
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Querystring: { country?: string };
  }>("/travel", async (request, reply) => {
    const { country } = request.query;
    const res = await fastify.prisma.travel.findMany({
      where: { destination: country },
      include: { company: true },
    });

    return reply.code(200).send(res);
  });

  // eslint-disable-next-line @typescript-eslint/naming-convention
  fastify.post<{ Params: { id: string } }>("/travel/:id/ban", async (request, reply) => {
    const { id } = request.params;
    const res = await fastify.prisma.travel.update({
      where: { id },
      data: { approved: false },
    });

    return reply.code(200).send(res);
  });
  done();
};
