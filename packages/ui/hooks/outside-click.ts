import { onCleanup } from "solid-js";

type Callback = () => () => void;

export function outsideClick(ref: HTMLElement, accessor: Callback): void {
  const onClick = (e) => !ref.contains(e.target) && accessor()?.();

  document.body.addEventListener("click", onClick);

  onCleanup(() => document.body.removeEventListener("click", onClick));
}
