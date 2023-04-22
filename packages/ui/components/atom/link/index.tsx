import type { Component, JSX } from "solid-js";
import { Link as RouterLink } from "atomic-router-solid";
import clsx from "clsx";

export type LinkProps = {
  href: string;
  children: JSX.Element | string;
  activeClassName?: string;
  class?: string;
};

export const Link: Component<LinkProps> = (props) => {
  const { href, activeClassName, class: className, children } = props;

  return (
    <RouterLink
      to={href}
      activeClass={clsx(activeClassName, "bg-blue-500")}
      class={clsx(
        className,
        "px-2 py-1 rounded-md transition-colors duration-300",
        "hover:bg-blue-400"
      )}
    >
      {children}
    </RouterLink>
  );
};
