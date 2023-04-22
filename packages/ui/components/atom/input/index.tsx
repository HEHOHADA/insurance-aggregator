import type { Component, JSX } from "solid-js";
import clsx from "clsx";

export type InputProps = JSX.HTMLAttributes<HTMLInputElement> & {
  label?: string;
  placeholder?: string;
  name?: string;
  containerClass?: string;
  labelClass?: string;
};

export const Input: Component<InputProps> = (props) => {
  const {
    class: className,
    name,
    label,
    containerClass,
    labelClass,
    placeholder,
    ...otherProps
  } = props;

  return (
    <div class={clsx(containerClass, "form-control w-full max-w-xs")}>
      {label && (
        <label class={clsx(labelClass, "label")} for={name}>
          <span class="label">{label}</span>
        </label>
      )}
      <input
        type="text"
        placeholder={placeholder || "Enter text..."}
        class={clsx(
          "input input-bordered input-primary w-full max-w-xs",
          className
        )}
        {...otherProps}
      />
    </div>
  );
};
