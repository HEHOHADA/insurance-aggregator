import type { JSX } from "solid-js";
import { children, createEffect, createSignal, For } from "solid-js";

import clsx from "clsx";

import type { AccordionItemProps } from "./accordion-item";

export { AccordionItem } from "./accordion-item";
export type { AccordionItemProps };

const makeOpenItemId = (index: number) => `${index}`;

export type AccordionProps = {
  onlyOneOpen?: boolean;
  itemsHeader?: AccordionItemProps["header"];
  children?: JSX.Element[];
  className?: string;
  onOpenChange?: (openItems: string[]) => void;
  initialOpenItems?: string[];
};

/**
 * Accordion component
 *
 * @param {AccordionProps} props
 * @param {ReactElement<AccordionItemProps> | ReactElement<AccordionItemProps>[]} [props.children]
 * @param {boolean} [props.nested=false]
 * @param {boolean} [props.onlyOneOpen=false]
 * @param {AccordionItemProps["header"]} [props.itemsHeader]
 * @param {string} [props.className]
 * @param {CSSProperties} [props.style]
 *
 * @example
 * import { Accordion } from '@acquirecloud/ui-kit';
 *
 * <Accordion>
 *   <AccordionItem title="First">
 *      <p>Content</p>
 *   </AccordionItem>
 *   <AccordionItem title="Second">
 *      <p>Content</p>
 *   </AccordionItem>
 * </Accordion>
 */
export const Accordion = (props: AccordionProps) => {
  if (!props.children) {
    return null;
  }

  return (
    <div class={clsx("flex flex-col", props.className)}>
      <For each={props.children}>
        {(child, index) => {
          return child;
        }}
      </For>
    </div>
  );
};
