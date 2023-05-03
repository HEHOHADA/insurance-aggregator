import type { Component, JSX } from "solid-js";

import clsx from "clsx";

export type CollapseProps = {
  title: JSX.Element;
  children: JSX.Element;
  className?: string;
};

export const Collapse: Component<CollapseProps> = (props) => {
  return (
    <div class={clsx(props.className, "collapse-arrow collapse")}>
      <input type="checkbox" />
      <div class="collapse-title  font-medium">{props.title}</div>
      <div class="collapse-content">
        <p>{props.children}</p>
      </div>
    </div>
  );
};
