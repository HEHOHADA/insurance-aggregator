import { initDatabaseConnection } from "server-libs";
import type { CherepahaResponse } from "../../lib";
import { handlerConfig, middyfy } from "../../lib";
import type { SQSHandler } from "aws-lambda";

const prisma = initDatabaseConnection();

const handler: SQSHandler = async () => {
  console.log("get-travel-data handler started");

  try {
    const now = new Date();
    const dateStart = now.toISOString().split("T")[0];
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
    const data = (await response.json()) as CherepahaResponse;

    await Promise.all(
      data.calculations.map(async (calculation) => {
        console.log("data.calculations.forEach", calculation.serviceProduct);
        await prisma.travel.create({
          data: {
            price: calculation.priceRub,
            currency: "RUB",
            company: {
              connect: {
                id: calculation.companyId,
              },
            },
            startDate: new Date(dateStart),
            endDate: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
            createdAt: now,
            approved: false,
            destination: "World",
            url:
              calculation.companyId in handlerConfig.cherepaha.companies
                ? handlerConfig.cherepaha.companies[calculation.companyId].url
                : "unknown",
            serviceProduct: {
              connectOrCreate: {
                where: {
                  id: "",
                },
                create: {
                  ...calculation.serviceProduct,
                },
              },
            },
          },
        });
      })
    );
  } catch (e) {
    console.error(e);
  }

  console.log("end of get-travel-data handler");
  prisma.$disconnect();
};

export const main = middyfy(handler);
