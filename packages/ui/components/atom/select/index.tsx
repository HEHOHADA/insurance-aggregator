import { createSignal, For, Show } from "solid-js";
import clsx from "clsx";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { outsideClick } from "../../../hooks";

const a = outsideClick;

export type SelectProps<
  T extends { value: string; label: string },
  M extends boolean = false
> = {
  options: T[];
  name?: string;
  isMulti?: M;
  value?: M extends true ? T[] : T;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  onChange?: (value: M extends true ? T[] : T) => void;
};

type Option = {
  value: string;
  label: string;
};

export function Select<T extends Option, M extends boolean = false>(
  props: SelectProps<T, M>
) {
  const {
    options = [],
    value,
    name,
    isMulti,
    onChange,
    placeholder = "",
    label = "",
    disabled = false,
  } = props;

  const [isOpen, setIsOpen] = createSignal(false);
  const [selected, setSelected] = createSignal<
    (M extends true ? T[] : T) | undefined
  >(value);

  const handleOptionClick = (option) => {
    if (props.isMulti) {
      const newSelected = [...(selected() as T[])];
      const selectedIndex = newSelected.findIndex(
        (s) => s.value === option.value
      );

      if (selectedIndex > -1) {
        newSelected.splice(selectedIndex, 1);
      } else {
        newSelected.push(option);
      }

      setSelected(newSelected as any);
      onChange?.(newSelected as any);
    } else {
      setSelected(option);
      onChange?.(option);
      setIsOpen(false);
    }
  };

  const handleRemoveOption = (option) => {
    if (props.isMulti) {
      const newSelected = (selected() as T[]).filter(
        (s) => s.value !== option.value
      );

      setSelected(newSelected as any);
      onChange(newSelected as any);
    }
  };

  const selectedOption = () => {
    if (props.isMulti) {
      return selected() as T[];
    } else {
      return (selected() ? [selected()] : []) as T[];
    }
  };

  return (
    <div class={`w-full`}>
      {label && (
        <label class={`block text-gray-700 text-sm font-bold mb-2`} for={label}>
          {label}
        </label>
      )}

      <div class={`relative w-full`}>
        <div
          class={clsx(
            "flex justify-between items-center bg-white rounded-md border border-gray-300 px-3 py-2",
            disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          )}
          onClick={() => setIsOpen(!isOpen())}
        >
          <Show
            when={selectedOption()?.length > 0}
            fallback={
              <div class={"text-gray-400"}>{placeholder || "Select..."}</div>
            }
          >
            <div class={`flex flex-wrap gap-2 max-w-full`}>
              <For each={selectedOption()}>
                {(option) => (
                  <div
                    class={`inline-flex items-center px-2 py-1 rounded-full bg-blue-600 text-white max-h-10 overflow-hidden`}
                  >
                    <span class="whitespace-nowrap overflow-ellipsis overflow-x-hidden">
                      {option.label}
                    </span>
                    <button
                      class={`ml-1 rounded-full`}
                      onClick={() => handleRemoveOption(option)}
                    >
                      x
                    </button>
                  </div>
                )}
              </For>
            </div>
          </Show>
        </div>

        <Show when={isOpen()}>
          <div
            use:outsideClick={() => setIsOpen(false)}
            class={`absolute z-10 bg-white rounded-md border border-gray-300 w-full mt-2 overflow-auto max-h-[500px]`}
          >
            <ul class={`py-1`}>
              <For each={options}>
                {(option) => (
                  <li
                    class={`px-3 py-2 hover:bg-gray-100 cursor-pointer`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option.label}
                  </li>
                )}
              </For>
            </ul>
          </div>
        </Show>
      </div>
    </div>
  );
}
