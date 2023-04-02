import { RouterProvider } from "atomic-router-solid";

import { router } from "./routing";
import { Routing } from "../pages";

import type { Component } from "solid-js";

export const App: Component = () => {
  return (
    <RouterProvider router={router}>
      <Routing />
    </RouterProvider>
  );
};
