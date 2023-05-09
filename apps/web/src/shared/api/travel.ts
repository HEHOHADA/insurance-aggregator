import { createEffect } from "effector";

import { createOid } from "../lib/oid";
import { wait } from "../lib/wait";
import { mockTravels, companies } from "./fake";
import { requestInternalFx } from "./request";

export type Travel = (typeof mockTravels)[number] & {
  id: string;
  company: (typeof companies)[number];
};

export const travelLoadFx = createEffect<{ params: any }, Travel[], void>(async ({ params }) => {
  // const response = await requestInternalFx({
  //   path: "/travel",
  //   method: "GET",
  //   query: params,
  // });

  await wait(700);

  return mockTravels.map((data) => {
    const company = companies.find((company) => company.id === data.companyId);

    return {
      ...data,
      company,
      id: createOid(),
    };
  });
});

export const banTravelFx = createEffect<{ id: string }, void, void>(async ({ id }) => {
  await requestInternalFx({
    path: `/travel/${id}/ban`,
    method: "POST",
  });
});
