import { createRouteView } from "atomic-router-solid";

import { Loader } from "../../shared/ui";
import { currentRoute } from "./model";
import { HomePage } from "./page";

export const HomeRoute = {
  view: createRouteView({ route: currentRoute, view: HomePage, otherwise: Loader }),
  route: currentRoute,
};
