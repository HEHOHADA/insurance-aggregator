import dayjs from "dayjs";
import type { FastifyPluginCallback } from "fastify";

export const travelRoutes: FastifyPluginCallback = (fastify, _, done) => {
  fastify.get<{
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Querystring: { country?: string; admin?: boolean; from?: number; to?: number };
  }>("/api/travel", async (request, reply) => {
    const { country, admin, to, from } = request.query;

    console.log({
      destination: country ? { contains: country } : undefined,
      startDate: from ? { gte: dayjs(from).subtract(1, "s").toDate() } : undefined,
      endDate: to ? { lte: new Date(to) } : undefined,
    });

    const res = await fastify.prisma.travel.findMany({
      where: {
        destination: country ? { contains: country } : undefined,
        startDate: from ? { gte: dayjs(from).subtract(1, "s").toDate() } : undefined,
        endDate: to ? { lte: new Date(to) } : undefined,
      },
      take: 30,
      include: {
        company: true,
        serviceProduct: true,
      },
    });
    const arrayUniqueByKey = [...new Map(res.map((item) => [item.companyId, item])).values()];

    if (admin) {
      return reply.code(200).send(arrayUniqueByKey);
    }

    return reply.code(200).send(arrayUniqueByKey.filter((travel) => !travel.approved));
  });

  // eslint-disable-next-line @typescript-eslint/naming-convention
  fastify.post<{ Params: { id: string } }>("/api/travel/:id/ban", async (request, reply) => {
    const { id } = request.params;
    const res = await fastify.prisma.travel.update({
      where: { id },
      data: { approved: true },
    });

    return reply.code(200).send(res);
  });
  done();
};
