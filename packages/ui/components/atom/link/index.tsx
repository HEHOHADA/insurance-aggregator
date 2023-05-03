import { Link as RouterLink } from "atomic-router-solid";
import type { Component, JSX } from "solid-js";

import clsx from "clsx";

export type LinkProps = {
  href: string;
  children: JSX.Element | string;
  activeClassName?: string;
  class?: string;
};

export const Link: Component<LinkProps> = (props) => {
  return (
    <RouterLink
      to={props.href}
      activeClass={clsx(props.activeClassName, "bg-blue-500")}
      class={clsx(
        props.class,
        "px-2 py-1 rounded-md transition-colors duration-300",
        "hover:bg-blue-400",
      )}
    >
      {props.children}
    </RouterLink>
  );
};
