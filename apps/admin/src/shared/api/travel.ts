import { createEffect } from "effector";
import { requestInternalFx } from "./request";

export type Travel = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  approved: boolean;
};

export const travelLoadFx = createEffect<{ params: any }, Travel[], void>(
  async ({ params }) => {
    const response = await requestInternalFx({
      path: "/travel",
      method: "GET",
      query: params,
    });

    return response.body as Travel[];
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
