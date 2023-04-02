import { createEffect, createEvent, createStore, sample } from "effector";
import { $isLogged, $session, login, logout } from "entities/session";

export const $loggedIn = $isLogged;
export const $userName = $session.map((session) => session?.name ?? "");

export const loginClicked = createEvent();
export const logoutClicked = createEvent();
const submitted = createEvent();
const setField = createEvent<{ key: string; value: string }>();

const sendFormFx = createEffect((params) => {
  console.log(params);
});

const $form = createStore({}).on(setField, (s, { key, value }) => ({
  ...s,
  [key]: value,
}));

sample({
  clock: submitted,
  source: $form,
  target: sendFormFx,
});

const handleChange = setField.prepend(
  (
    e: Event & { currentTarget: HTMLInputElement; target: HTMLInputElement }
  ) => ({
    key: e.target.name,
    value: e.target.value,
  })
);

sample({
  clock: loginClicked,
  target: login,
});

sample({
  clock: logoutClicked,
  target: logout,
});
