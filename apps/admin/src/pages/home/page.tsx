import { For, Show } from "solid-js";

import { Header } from "../../widgets";
import { Filters } from "../../features/travel/ui/filters";
import { Card, SkeletonCard } from "ui";
import { useUnit } from "effector-solid";
import { $isLoading, $travels } from "../../features/travel";

export function HomePage() {
  const isLoading = useUnit($isLoading);
  const items = useUnit($travels);

  return (
    <div class="h-screen overflow-y-hidden">
      <Header />
      <div class="max-w-7xl mx-auto flex h-full">
        <aside class="w-1/4 bg-white shadow">
          <Filters />
        </aside>
        <main class="w-3/4 px-4 py-6 overflow-auto max-h-[800px]">
          <div>
            <h2 class="text-2xl font-medium text-gray-900">Search Result</h2>
            <div class="grid grid-cols-1 gap-4 mt-6">
              <Show
                when={!isLoading()}
                fallback={
                  <For each={new Array(5).fill(null)}>
                    {() => <SkeletonCard />}
                  </For>
                }
              >
                <For each={items()}>
                  {(item) => {
                    return (
                      <Card
                        options={item.serviceProduct}
                        name={item.company.name}
                        price={`${item.priceRub} RUB`}
                        onClick={() => {}}
                        link={item.company.url}
                        color={item.company.colorHexCode}
                      />
                    );
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
