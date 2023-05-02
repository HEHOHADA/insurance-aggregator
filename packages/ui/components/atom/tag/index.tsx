import type { Component } from "solid-js";

export type TagProps = {
  name: string;
  value?: string | number;
  checked?: boolean;
};

export const Tag: Component<TagProps> = (props) => {
  const { name, value, checked } = props;

  return (
    <span
      class="inline-flex gap-1 items-center bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold mb-2">
      {checked && (
        <svg
          class="inline-block fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      )}
      <span class="text-black">{name}</span>
      {value && <span class="text-gray-600">{value}</span>}
    </span>
  );
};
