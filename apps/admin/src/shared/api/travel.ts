import { createEffect } from "effector";
import { requestInternalFx } from "./request";
import { wait } from "../lib/wait";
import { createOid } from "../lib/oid";
import { mockTravels, companies } from "./fake";

export type Travel = (typeof mockTravels)[number] & {
  id: string;
  company: (typeof companies)[number];
};

export const travelLoadFx = createEffect<{ params: any }, Travel[], void>(
  async ({ params }) => {
    // const response = await requestInternalFx({
    //   path: "/travel",
    //   method: "GET",
    //   query: params,
    // });

    await wait(700);

    return mockTravels.map((data) => {
      const company = companies.find(
        (company) => company.id === data.companyId
      );

      return {
        ...data,
        company,
        id: createOid(),
      };
    });
  }
);

export const banTravelFx = createEffect<{ id: string }, void, void>(
  async ({ id }) => {
    await requestInternalFx({
      path: `/travel/${id}/ban`,
      method: "POST",
    });
  }
);