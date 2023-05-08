import type { Handler } from "aws-lambda";
import ServerlessClient from "serverless-postgres";
import { v4 as uuidv4 } from "uuid";

import type { CherepahaResponse } from "../../lib";
import { handlerConfig } from "../../lib";
import { countries } from "../../lib/countries";

const client = new ServerlessClient({
  connectionString: process.env.DATABASE_URL || "",
  ssl: true,
});

const handler: Handler = async (event, context, callback) => {
  try {
    console.log("start");
    await client.connect();

    const now = new Date();
    const dateStart = now.toISOString().split("T")[0];

    const country = countries[Math.floor(Math.random() * countries.length)];

    const currentParams = {
      ...handlerConfig.cherepaha.params,
      dateStart,
      countryGroups: [country],
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
        const id = uuidv4();
        // await prisma.travel.create({
        //   data: {
        //     price: calculation.priceRub,
        //     currency: "RUB",
        //     company: {
        //       connect: {
        //         id: calculation.companyId,
        //       },
        //     },
        //     startDate: new Date(dateStart),
        //     endDate: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
        //     createdAt: now,
        //     approved: false,
        //     destination: country,
        //     url:
        //       calculation.companyId in handlerConfig.cherepaha.companies
        //         ? handlerConfig.cherepaha.companies[calculation.companyId].url
        //         : "unknown",
        //     serviceProduct: {
        //       connectOrCreate: {
        //         where: {
        //           id: "",
        //         },
        //         create: {
        //           ...calculation.serviceProduct,
        //         },
        //       },
        //     },
        //   },
        // });

        await client.query(
          `INSERT INTO "Travel" ("price", "currency", "companyId", "startDate", "endDate",
                                 "createdAt", "approved", "destination", "url", "serviceProductId",
                                 "id")
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
          [
            calculation.priceRub,
            "RUB",
            calculation.companyId,
            new Date(dateStart),
            new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
            now,
            false,
            country,
            calculation.companyId in handlerConfig.cherepaha.companies
              ? handlerConfig.cherepaha.companies[calculation.companyId].url
              : "unknown",
            id,
            uuidv4(),
          ],
        );
        const serviceProduct = { ...calculation.serviceProduct, id: uuidv4() };
        const serviceProductCreate = `INSERT INTO "ServiceProduct" (${Object.keys(serviceProduct)
          .map((key) => `"${key}"`)
          .join(", ")})
                                      VALUES (${Object.keys(serviceProduct).map(
                                        (_, i) => `$${i + 1}`,
                                      )})`;

        await client.query(serviceProductCreate, Object.values(calculation.serviceProduct));
      }),
    );
    void client.end().catch(console.log);

    callback(null, {
      statusCode: 200,
      body: "Success!",
    });
  } catch (error) {
    console.error(error);
    callback(null, error);
  } finally {
    console.log("end of get-travel-data handler");
  }
};

export const main = handler;
