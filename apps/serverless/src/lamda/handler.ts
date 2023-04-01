import { initDatabaseConnection } from "server-libs";
import { handlerConfig } from "../lib";

const handler = async (): Promise<void> => {
  try {
    const prisma = await initDatabaseConnection();
    const now = new Date();
    const dateStart = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1
    );
    const currentParams = {
      ...handlerConfig.cherepaha.params,
      dateStart,
    };
    const response = await fetch(handlerConfig.cherepaha.url, {
      method: handlerConfig.cherepaha.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentParams),
    });
    const data = await response.json();

    await prisma.travel.create({
      data: {
        price: data.price,
        currency: data.currency,
        companyId: data.companyId,
        startDate: dateStart,
        endDate: new Date(dateStart.getTime() + 7 * 24 * 60 * 60 * 1000),
        createdAt: now,
        approved: false,
        destination: data.destination,
        url: data.url,
      },
    });
  } catch (e) {
    console.error(e);
  }
};

export default handler;
