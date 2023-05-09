import { createRouteView } from "atomic-router-solid";

import { Loader } from "../../shared/ui";
import { currentRoute } from "./model";
import { HomePage } from "./page";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const HomeRoute = {
  view: createRouteView({ route: currentRoute, view: HomePage, otherwise: Loader }),
  route: currentRoute,
};
