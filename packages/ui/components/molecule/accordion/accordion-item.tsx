import type { JSX } from "solid-js";
import { splitProps } from "solid-js";

import type { CollapseProps } from "./collapse";
import { Collapse } from "./collapse";

export type AccordionItemProps = CollapseProps & {
  contentPadding?: string;
  children?: JSX.Element | ((isOpen?: boolean) => JSX.Element);
  dataTest?: string;
};

/**
 * AccordionItem is a component that can be used to display a collapsible content.
 * It can be used as a standalone component or as a child of Accordion.
 *
 * @param {AccordionItemProps} props
 * @param {boolean} [props.isOpen] - whether the accordion item is open or not
 * @param {boolean} [props.initiallyOpen] - whether the accordion item is open initially or not
 * @param {string | JSX.Element} [props.title] - title of the accordion item
 * @param {boolean} [props.noBorders] - whether the accordion item has borders or not
 * @param {boolean} [props.headerTextWraps] - whether the header text wraps or not
 * @param {string} [props.className] - class name of the accordion item
 * @param {Function} [props.onClick] - callback when the accordion item is clicked
 * @param {string} [props.contentPadding] - padding of the content
 *
 * @example
 * import { AccordionItem } from '@acquirecloud/ui-kit';
 *
 * <AccordionItem title="Title">CONTENT</AccordionItem>
 *
 */
export const AccordionItem = (props: AccordionItemProps) => {
  const [used, other] = splitProps(props, ["isOpen", "header", "children", "contentPadding"]);

  return (
    <Collapse isOpen={used.isOpen} headerClass="p1 w-full" {...other}>
      <div>{typeof used.children === "function" ? used.children(used.isOpen) : used.children}</div>
    </Collapse>
  );
};
