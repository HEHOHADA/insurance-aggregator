import { createEffect } from "effector";

import type { mockTravels, companies } from "./fake";
import { requestInternalFx } from "./request";

export type Travel = (typeof mockTravels)[number] & {
  id: string;
  company: (typeof companies)[number];
};
export const travelLoadFx = createEffect<
  {
    params: {
      country?: string;
      from?: number | string;
      to?: number | string;
    };
  },
  Travel[],
  void
>(async ({ params }) => {
  const response = await requestInternalFx({
    path: "/travel",
    method: "GET",
    query: params,
  });

  return response.body as Travel[];
});
