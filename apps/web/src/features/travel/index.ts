import { attach, createEvent, createStore, sample } from "effector";
import { debounce } from "patronum";
import { travelApi } from "shared/api";
import type { Travel } from "shared/api";

import { countriesBackend } from "../../shared/countries";

const travelLoadFx = attach({ effect: travelApi.travelLoadFx });

export const $travels = createStore<Travel[]>([]).on(travelLoadFx.doneData, (_, data) => data);

export const $isLoading = travelLoadFx.pending;

export const loadTravel = createEvent<{
  params: {
    country?: string;
    from?: number | string;
    to?: number | string;
    approved?: boolean;
  };
}>();

export const removeEmptyValues = <T extends Record<string, any>>(obj: T): T => {
  Object.keys(obj).forEach((k) => !obj[k] && delete obj[k]);

  return obj;
};

sample({
  clock: loadTravel,
  fn: ({ params }) => {
    removeEmptyValues(params);
    const { country, from = new Date().toISOString().split("T")[0] } = params;

    const newCountry = country
      ? countriesBackend.find((backend) => backend === country.toLowerCase())
      : undefined;

    return {
      params: {
        ...params,
        ...(newCountry ? { country: newCountry } : {}),
        from,
      },
    };
  },
  target: travelLoadFx,
});

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

debounce({
  source: $form,
  timeout: 400,
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
