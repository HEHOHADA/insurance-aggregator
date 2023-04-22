import type { Component } from "solid-js";
import { Select as BaseSelect } from "@thisbeyond/solid-select";
import clsx from "clsx";

export type SelectProps = Parameters<typeof BaseSelect>[0] & {};

export const Select: Component<SelectProps> = (props) => {
  const { class: className } = props;

  return <BaseSelect class={clsx(className)} {...props} />;
};
