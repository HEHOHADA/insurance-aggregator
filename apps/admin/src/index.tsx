/* @refresh reload */
import { render } from "solid-js/web";

import { attachReduxDevTools } from "@effector/redux-devtools-adapter";

import { App } from "./app/app";
import "./index.css";
import { appStarted } from "./shared/config/init";

attachReduxDevTools();
const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?",
  );
}

appStarted();

render(() => <App />, root);
