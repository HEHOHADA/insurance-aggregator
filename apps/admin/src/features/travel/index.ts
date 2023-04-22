import { travelApi } from "shared/api";
import type { Travel } from "shared/api";
import { createEvent, createStore, sample } from "effector";
import { travelLoadFx } from "../../shared/api/travel";

export const $travels = createStore<Travel[]>([])
  .on(travelLoadFx.doneData, (_, data) => data)
  .on(travelApi.banTravelFx.done, (state, { params }) => {
    return state.map((travel) => {
      if (travel.id === params.id) {
        return {
          ...travel,
          approved: false,
        };
      }

      return travel;
    });
  });

export const loadTravel = createEvent<{ params: any }>();

sample({
  clock: loadTravel,
  target: travelApi.travelLoadFx,
});

export const banTravel = createEvent<{ id: string }>();

sample({
  clock: banTravel,
  target: travelApi.banTravelFx,
});
