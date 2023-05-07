import { createRoutesView } from "atomic-router-solid";

import { HomeRoute } from "./home";

// const HomePage = lazy(() => import("./home").then((page) => ({ default: page.HomePage })));
//
// const createLazyRoute =
//   <T extends Record<string, any>>(component: Component<T>) =>
//   (props: T) => {
//     const Component = component;
//
//     return <Suspense fallback={<div>Loading...</div>} children={<Component {...props} />} />;
//   };
//
// export const Routing = () => {
//   return (
//     <>
//       <Route view={createLazyRoute(HomePage)} route={routes.home} />
//     </>
//   );
// };

export const Pages = createRoutesView({
  routes: [HomeRoute],
});
