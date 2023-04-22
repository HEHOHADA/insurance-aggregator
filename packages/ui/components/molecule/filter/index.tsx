import type { Component, JSX } from "solid-js";
import { AccordionItem } from "../accordion";

export type FilterProps = {
  text: string;
  children: JSX.Element;
  class?: string;
};

export const Filter: Component<FilterProps> = (props) => {
  const { text } = props;

  return (
    <div class={props.class}>
      <AccordionItem
        initiallyOpen
        headerClass="text-md font-medium text-gray-700 mb-2"
        title={text}
      >
        {props.children}
      </AccordionItem>
    </div>
  );
};
