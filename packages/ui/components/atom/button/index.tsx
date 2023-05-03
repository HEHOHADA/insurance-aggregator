import type { Component, JSX } from "solid-js";

import clsx from "clsx";

export type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement>;

export const Button: Component<ButtonProps> = (props) => {
  return (
    <button {...props} class={clsx("btn ", props.class)}>
      {props.children}
    </button>
  );
};
