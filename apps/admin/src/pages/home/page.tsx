import { useUnit } from "effector-solid";
import { For, Show } from "solid-js";

import { SkeletonCard } from "ui";

import { $isLoading, $travels, banTravel } from "../../features/travel";
import { TravelCard, Filters } from "../../features/travel/ui";
import { Header } from "../../widgets";

const SKELETON_FILLED = new Array(5).fill(null);

export function HomePage() {
  const [isLoading, items] = useUnit([$isLoading, $travels]);

  return (
    <div class="h-screen overflow-y-hidden">
      <Header />
      <div class="mx-auto flex h-full max-w-7xl">
        <aside class="w-1/4 bg-white shadow">
          <Filters />
        </aside>
        <main class="max-h-[800px] w-3/4 overflow-auto px-4 py-6">
          <div>
            <h2 class="text-2xl font-medium text-gray-900">Search Result</h2>
            <div class="mt-6 grid grid-cols-1 gap-4">
              <Show when={!isLoading()} fallback={<For each={SKELETON_FILLED}>{SkeletonCard}</For>}>
                <For each={items()}>
                  {(item) => {
                    return <TravelCard travel={item} onBlock={(id) => banTravel({ id })} />;
                  }}
                </For>
              </Show>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
