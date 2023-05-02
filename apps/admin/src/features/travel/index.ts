import { attach, createEvent, createStore, sample } from "effector";
import { travelApi } from "shared/api";
import type { Travel } from "shared/api";

const travelLoadFx = attach({ effect: travelApi.travelLoadFx });
const banTravelFx = attach({ effect: travelApi.banTravelFx });

export const $travels = createStore<Travel[]>([])
  .on(travelLoadFx.doneData, (_, data) => data)
  .on(banTravelFx.done, (state, { params }) => {
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

export const $isLoading = travelLoadFx.pending;

export const loadTravel = createEvent<{ params: any }>();

sample({
  clock: loadTravel,
  target: travelLoadFx,
});

export const banTravel = createEvent<{ id: string }>();

sample({
  clock: banTravel,
  target: banTravelFx,
});

export const sendClicked = createEvent();
export const clearClicked = createEvent();

export const setField = createEvent<{
  key: string;
  value: string | string[];
}>();

export const resetForm = createEvent();
export const sendForm = createEvent();

export const $form = createStore({})
  .on(setField, (s, { key, value }) => ({
    ...s,
    [key]: value,
  }))
  .reset(resetForm);

sample({
  clock: sendClicked,
  target: sendForm,
});

sample({
  source: $form,
  clock: sendForm,
  fn: (form) => ({
    params: form,
  }),
  target: loadTravel,
});

sample({
  clock: clearClicked,
  target: resetForm,
});
