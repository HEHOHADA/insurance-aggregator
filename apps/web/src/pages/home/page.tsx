import { useUnit } from "effector-solid";
import { For, Show } from "solid-js";

import { SkeletonCard } from "ui";

import { $isLoading, $travels, banTravel } from "../../features";
import { TravelCard, Filters } from "../../features/travel/ui";

const SKELETON_FILLED = new Array(5).fill(null);

export function HomePage() {
  const [isLoading, items] = useUnit([$isLoading, $travels]);

  return (
    <div class="h-screen overflow-y-hidden">
      <aside class="shadow">
        <Filters />
      </aside>
      <div class="mx-auto flex h-full">
        <main class="max-h-[800px] overflow-auto px-4 py-6 w-full">
          <div>
            <h2 class="text-2xl font-medium">Search Result</h2>
            <div class="mt-6 grid grid-cols-1 gap-4">
              <Show when={!isLoading()} fallback={<For each={SKELETON_FILLED}>{SkeletonCard}</For>}>
                <For each={items()}>
                  {(item) => <TravelCard travel={item} onBlock={(id) => banTravel({ id })} />}
                </For>
              </Show>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
