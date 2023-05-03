import type { Component, JSX } from "solid-js";
import { splitProps } from "solid-js";

import clsx from "clsx";

export type InputProps = JSX.HTMLAttributes<HTMLInputElement> & {
  label?: string;
  placeholder?: string;
  name?: string;
  containerClass?: string;
  labelClass?: string;
};

export const Input: Component<InputProps> = (props) => {
  const [used, other] = splitProps(props, [
    "label",
    "class",
    "name",
    "containerClass",
    "labelClass",
    "placeholder",
  ]);

  return (
    <div class={clsx(used.containerClass, "form-control w-full max-w-xs")}>
      {used.label && (
        <label class={clsx(used.labelClass, "label")} for={used.name}>
          <span class="label">{used.label}</span>
        </label>
      )}
      <input
        type="text"
        placeholder={used.placeholder || "Enter text..."}
        class={clsx("input input-bordered input-primary w-full max-w-xs", used.class)}
        {...other}
      />
    </div>
  );
};
