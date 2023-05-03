import type { Component, JSX } from "solid-js";

import clsx from "clsx";

import { Button } from "../../atom";

export { SkeletonCard } from "./skeleton-card";

export type CardProps = {
  id?: string;
  imageSrc?: string;
  name: string;
  price: string;
  onClick: (id: string) => void;
  link: string;
  color: string;
  children: JSX.Element;
};

export const Card: Component<CardProps> = (props) => {
  const onClick = () => {
    props.onClick(props.id);
  };

  return (
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <div class="flex flex-col gap-2 p-4">
        <a
          href={props.link}
          target="_blank"
          class={clsx("block text-lg font-medium", !props.color && "text-gray-900")}
          style={{
            color: props.color,
          }}
        >
          {props.name}
        </a>

        {props.children}
        <div class="mt-4 flex justify-between items-center">
          <div class="text-lg font-medium text-indigo-600">{props.price}</div>
          <Button
            class="flex items-center bg-rose-600 hover:bg-rose-300 text-white rounded-full p-2 focus:outline-none"
            onClick={onClick}
          >
            <svg class="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span class="text-xs font-medium ml-1">Block</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
