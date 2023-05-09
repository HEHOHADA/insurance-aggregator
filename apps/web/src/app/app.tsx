import { RouterProvider } from "atomic-router-solid";
import type { Component } from "solid-js";

import { Pages } from "../pages";
import { router } from "./routing";

export const App: Component = () => {
  return (
    <RouterProvider router={router}>
      <Pages />
    </RouterProvider>
  );
};
