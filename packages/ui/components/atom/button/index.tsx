import type { JSX } from "solid-js";
import clsx from "clsx";

export type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { class: className, ...otherProps } = props;

  return (
    <button class={clsx("btn ", className)} {...otherProps}>
      {props.children}
    </button>
  );
};
