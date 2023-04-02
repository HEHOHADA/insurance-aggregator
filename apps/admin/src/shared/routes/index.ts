import { createRoute } from "atomic-router";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const homeRoute = createRoute();

export const routes = [
  {
    path: "/",
    route: homeRoute,
  },
];
