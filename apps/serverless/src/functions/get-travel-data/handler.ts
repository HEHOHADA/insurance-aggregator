import type { Handler } from "aws-lambda";
import ServerlessClient from "serverless-postgres";
import { v4 as uuidv4 } from "uuid";

import type { CherepahaResponse } from "../../lib";
import { handlerConfig } from "../../lib";
import { countries, countriesGroup } from "../../lib/countries";

const client = new ServerlessClient({
  connectionString: process.env.DATABASE_URL || "",
  ssl: true,
});

export const makeRandomIntInRange = (minValue: number, maxValue: number) => {
  const min = Math.ceil(minValue);
  const max = Math.floor(maxValue);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const handler: Handler = async (event, context, callback) => {
  try {
    console.log("start");

    if (event.body) {
      const body = JSON.parse(event.body);

      console.log(body);
    }
    await client.connect();

    const now = new Date();
    const dateStart = now.toISOString().split("T")[0];

    const country = countries[Math.floor(Math.random() * countries.length)];
    const countryGroup = countriesGroup[Math.floor(Math.random() * countriesGroup.length)];
    const config = handlerConfig();

    const currentParams = event.body
      ? JSON.parse(event.body)
      : {
          ...config.cherepaha.params,
          dateStart,
          countryGroups: [countryGroup],
          countries: [
            Math.random() > 0.5 && countryGroup !== "shengen" ? country : undefined,
          ].filter(Boolean),
        };

    const response = await fetch(config.cherepaha.url, {
      method: config.cherepaha.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentParams),
    });

    const data = (await response.json()) as CherepahaResponse;

    console.log(data);

    await Promise.all(
      data.calculations.map(async (calculation) => {
        console.log("data.calculations.forEach", calculation);
        const { ...serv } = calculation.serviceProduct;
        const id = uuidv4();
        const serviceProduct = { ...serv, id };

        const serviceProductCreate = `INSERT INTO "ServiceProduct" (${Object.keys(serviceProduct)
          .map((key) => `"${key}"`)
          .join(", ")})
                                      VALUES (${Object.keys(serviceProduct).map(
                                        (_, i) => `$${i + 1}`,
                                      )})`;

        await client.query(serviceProductCreate, Object.values(serviceProduct));

        await client.query(
          `INSERT INTO "Travel" ("price", "currency", "companyId", "startDate", "endDate",
                                 "createdAt", "approved", "destination", "url", "serviceProductId",
                                 "id")
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
          [
            calculation.priceRub,
            "RUB",
            calculation.companyId,
            new Date(currentParams.dateStart),
            new Date(now.getTime() + currentParams.insuredDays * 24 * 60 * 60 * 1000),
            now,
            false,
            currentParams.countries[9],
            calculation.companyId in config.cherepaha.companies
              ? config.cherepaha.companies[calculation.companyId].url
              : "unknown",
            id,
            uuidv4(),
          ],
        );
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
