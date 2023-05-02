import type { Component, JSX } from "solid-js";
import clsx from "clsx";

export type CollapseProps = {
  title: JSX.Element;
  children: JSX.Element;
  className?: string;
};

export const Collapse: Component<CollapseProps> = (props) => {
  const { title, children, className } = props;

  return (
    <div class={clsx(className, "collapse-arrow collapse")}>
      <input type="checkbox" />
      <div class="collapse-title  font-medium">{title}</div>
      <div class="collapse-content">
        <p>{children}</p>
      </div>
    </div>
  );
};
