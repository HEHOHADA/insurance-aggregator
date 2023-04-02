import { createEvent, sample } from "effector";
import { $isLogged, $session, login, logout } from "../../entities/session";

export const $loggedIn = $isLogged;
export const $userName = $session.map((session) => session?.name ?? "");

export const loginClicked = createEvent();
export const logoutClicked = createEvent();

sample({
  clock: loginClicked,
  target: login,
});

sample({
  clock: logoutClicked,
  target: logout,
});
