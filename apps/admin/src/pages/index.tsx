import { Route } from "atomic-router-solid";
import * as routes from "../shared/routes";
import type { Component } from "solid-js";
import { lazy, Suspense } from "solid-js";

const HomePage = lazy(() =>
  import("./home").then((page) => ({ default: page.HomePage }))
);

const createLazyRoute =
  <T extends Record<string, any>>(component: Component<T>) =>
  (props: T) => {
    const Component = component;

    return (
      <Suspense
        fallback={<div>Loading...</div>}
        children={<Component {...props} />}
      />
    );
  };

export const Routing = () => {
  return (
    <>
      <Route view={createLazyRoute(HomePage)} route={routes.homeRoute} />
    </>
  );
};
