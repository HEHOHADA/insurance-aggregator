import { useUnit } from "effector-solid";
import { For, Show } from "solid-js";

import { SkeletonCard } from "ui";

import { $isLoading, $travels, banTravel } from "../../features";
import { TravelCard, Filters } from "../../features/travel/ui";
import { Header } from "../../widgets";

const SKELETON_FILLED = new Array(5).fill(null);

export function HomePage() {
  const [isLoading, items] = useUnit([$isLoading, $travels]);

  return (
    <div class="h-screen overflow-y-hidden">
      <Header />
      <div class="mx-auto flex h-full max-w-7xl">
        <aside class="w-1/4 bg-white shadow dark:bg-bgLight">
          <Filters />
        </aside>
        <main class="max-h-[800px] w-3/4 overflow-auto px-4 py-6">
          <div>
            <h2 class="text-2xl font-medium">Search Result</h2>
            <div class="mt-6 grid grid-cols-1 gap-4">
              <Show when={!isLoading()} fallback={<For each={SKELETON_FILLED}>{SkeletonCard}</For>}>
                <Show when={items().length} fallback={<span>Not found</span>}>
                  <For each={items()}>
                    {(item) => {
                      return (
                        <TravelCard
                          travel={item}
                          onBlock={(id) => {
                            banTravel({ id });
                          }}
                        />
                      );
                    }}
                  </For>
                </Show>
              </Show>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
