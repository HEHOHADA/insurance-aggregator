import type { Component, JSX } from "solid-js";
import { createSignal, Show } from "solid-js";
import clsx from "clsx";

export type CollapseProps = {
  isOpen?: boolean;
  initiallyOpen?: boolean;
  title: Element | string;
  onClick?: (
    event: MouseEvent & { currentTarget: HTMLSpanElement; target: Element }
  ) => void;
  header?: Component;
  headerClass?: string;
  headerTextWraps?: boolean;
  className?: string;
  dataTest?: string;
  reverse?: boolean;
  children: JSX.Element | JSX.Element[];
};
// TODO move to separate file

/**
 * Collapse is a component that can be used to display a collapsible content.
 *
 * @param {CollapseProps} props
 * @param {ReactNode} props.children - content of the collapsible
 * @param {boolean} [props.isOpen] - whether the collapsible is open or not
 * @param {boolean} [props.initiallyOpen] - whether the collapsible is open initially or not
 * @param {string | JSX.Element} [props.title] - title of the collapsible
 * @param {IconType} [props.icon] - icon of the collapsible
 * @param {ComponentType<ComponentPropsWithRef<typeof Header>>} [props.header] - header of the collapsible
 * @param {boolean} [props.headerTextWraps] - whether the header text wraps or not
 * @param {string} [props.className] - class name of the collapsible
 * @param {Function} [props.onClick] - callback when the collapsible is clicked
 *
 */
export const Collapse: Component<CollapseProps> = (props) => {
  const {
    initiallyOpen = false,
    title,
    reverse = false,
    headerTextWraps = false,
    onClick,
    className,
    children,
    dataTest,
    headerClass,
  } = props;
  const [isOpen, setIsOpen] = createSignal(initiallyOpen);
  const controlled = props.isOpen !== undefined;

  const onClickHandler = (
    event: MouseEvent & { currentTarget: HTMLSpanElement; target: Element }
  ) => {
    event.stopPropagation();
    console.log("dasdas");

    if (!controlled) {
      setIsOpen((prevState) => !prevState);
    }
    onClick?.(event);
  };

  return (
    <div class={clsx(className, "relative")} data-testid={dataTest}>
      <div
        class={clsx(
          "flex gap-2 justify-between items-center w-full",
          (controlled ? !!props.isOpen : isOpen()) && "open",
          headerTextWraps && "items-start",
          reverse && "gap-0",
          headerClass
        )}
      >
        <Show
          when={reverse}
          fallback={
            <span
              class={"cursor-pointer text-sm flex-1"}
              onClick={onClickHandler}
            >
              {title}
            </span>
          }
        >
          <span
            class={"cursor-pointer text-sm flex-1"}
            onClick={onClickHandler}
          >
            {title}
          </span>
        </Show>
      </div>
      <div
        class={clsx(
          "relative transition-all",
          !(controlled ? !!props.isOpen : isOpen())
            ? "h-0 opacity-0"
            : " h-auto opacity-1 "
        )}
      >
        {children}
      </div>
    </div>
  );
};
