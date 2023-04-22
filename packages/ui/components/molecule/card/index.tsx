import type { Component } from "solid-js";
import { Button } from "../../atom";

export { SkeletonCard } from "./skeleton-card";

export type CardProps = {
  id?: string;
  imageSrc?: string;
  name: string;
  price: string;
  onClick: (id: string) => void;
  link: string;
};

export const Card: Component<CardProps> = (props) => {
  const { id, imageSrc, name } = props;

  return (
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      {imageSrc && (
        <div class="relative">
          <a href={props.link} target="_blank">
            <img src={imageSrc} alt={name} class="w-full h-48 object-cover" />
          </a>
        </div>
      )}
      <div class="p-4">
        <h3 class="text-lg font-medium text-gray-900">{name}</h3>
        <p class="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nisl
          nulla. Nulla facilisi. In nec efficitur nulla. Etiam viverra tortor
          sed lectus feugiat, eget commodo lorem tristique. Fusce nec nibh elit.
          Curabitur at laoreet velit. Donec vulputate ante in tellus iaculis
        </p>
        <div class="mt-4 flex justify-between items-center">
          <div class="text-lg font-medium text-indigo-600">{props.price}</div>
          <Button
            class="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full p-2 focus:outline-none"
            onClick={() => {
              props.onClick(id);
            }}
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
