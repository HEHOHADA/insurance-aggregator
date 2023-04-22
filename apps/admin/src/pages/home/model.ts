import { createEffect, createEvent, createStore, sample } from "effector";
import { loadTravel } from "../../features/travel";

export const sendClicked = createEvent();
export const clearClicked = createEvent();
const submitted = createEvent();
const setField = createEvent<{ key: string; value: string }>();

const sendFormFx = createEffect((params) => {
  console.log(params);
});

export const resetForm = createEvent();
export const sendForm = createEvent();

const $form = createStore({})
  .on(setField, (s, { key, value }) => ({
    ...s,
    [key]: value,
  }))
  .reset(resetForm);

sample({
  clock: submitted,
  source: $form,
  target: sendFormFx,
});

export const handleChange = setField.prepend(
  (
    event: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement }
  ) => ({
    key: event.target.name,
    value: event.target.value,
  })
);

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
