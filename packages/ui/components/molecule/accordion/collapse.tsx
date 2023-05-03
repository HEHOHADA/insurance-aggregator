import type { Component, JSX } from "solid-js";
import { createSignal, mergeProps, Show } from "solid-js";

import clsx from "clsx";

export type CollapseProps = {
  isOpen?: boolean;
  initiallyOpen?: boolean;
  title: Element | string;
  onClick?: (event: MouseEvent & { currentTarget: HTMLSpanElement; target: Element }) => void;
  header?: Component;
  headerClass?: string;
  headerTextWraps?: boolean;
  className?: string;
  dataTest?: string;
  reverse?: boolean;
  children: JSX.Element | JSX.Element[];
};

/**
 * Collapse is a component that can be used to display a collapsible content.
 *
 * @param {CollapseProps} props
 * @param {boolean} [props.isOpen] - whether the collapsible is open or not
 * @param {boolean} [props.initiallyOpen] - whether the collapsible is open initially or not
 * @param {string | JSX.Element} [props.title] - title of the collapsible
 * @param {boolean} [props.headerTextWraps] - whether the header text wraps or not
 * @param {string} [props.className] - class name of the collapsible
 * @param {Function} [props.onClick] - callback when the collapsible is clicked
 *
 */
export const Collapse: Component<CollapseProps> = (props) => {
  const merged = mergeProps(
    {
      initiallyOpen: false,
      reverse: false,
      headerTextWraps: false,
    },
    props,
  );
  const [isOpen, setIsOpen] = createSignal(merged.initiallyOpen);
  const [controlled] = createSignal(merged.isOpen !== undefined);

  const onClickHandler = (
    event: MouseEvent & { currentTarget: HTMLSpanElement; target: Element },
  ) => {
    event.stopPropagation();

    if (!controlled) {
      setIsOpen((prevState) => !prevState);
    }
    merged.onClick?.(event);
  };

  return (
    <div class={clsx(merged.className, "relative")} data-testid={merged.dataTest}>
      <div
        class={clsx(
          "flex gap-2 justify-between items-center w-full",
          (controlled() ? !!props.isOpen : isOpen()) && "open",
          merged.headerTextWraps && "items-start",
          merged.reverse && "gap-0",
          merged.headerClass,
        )}
      >
        <Show
          when={merged.reverse}
          fallback={
            <span class={"cursor-pointer text-sm flex-1"} onClick={onClickHandler}>
              {merged.title}
            </span>
          }
        >
          <span class={"cursor-pointer text-sm flex-1"} onClick={onClickHandler}>
            {merged.title}
          </span>
        </Show>
      </div>
      <div
        class={clsx(
          "relative transition-all",
          !(controlled() ? !!props.isOpen : isOpen()) ? "h-0 opacity-0" : " h-auto opacity-1 ",
        )}
      >
        {merged.children}
      </div>
    </div>
  );
};
