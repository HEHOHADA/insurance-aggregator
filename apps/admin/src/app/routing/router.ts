import { createHistoryRouter, createRoute, createRouterControls } from "atomic-router";
import { sample } from "effector";
import { createBrowserHistory } from "history";

import { appStarted } from "../../shared/config/init";

export const routes = {
  home: createRoute(),
  auth: {
    register: createRoute(),
    login: createRoute(),
  },
};

export const controls = createRouterControls();

export const router = createHistoryRouter({
  routes: [
    {
      path: "/",
      route: routes.home,
    },
    {
      path: "/login",
      route: routes.auth.login,
    },
  ],
  controls,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});
