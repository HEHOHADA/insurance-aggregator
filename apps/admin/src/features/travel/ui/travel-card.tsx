import type { Component } from "solid-js";
import { For } from "solid-js";

import clsx from "clsx";
import { capitalizedWord } from "lib";
import { Card, Collapse, Tag } from "ui";

import type { Travel } from "../../../shared/api";

export type TravelCardProps = {
  travel: Travel;
  onBlock: (id: string) => void;
};

export const TravelCard: Component<TravelCardProps> = (props) => {
  const entries = Object.entries(props.travel.serviceProduct);

  const optionsCount = entries.filter((option) => option[1] === 0).length;
  const tags = entries
    .map(([card, value]) => {
      const key = capitalizedWord(card.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase());

      if (!value) {
        return;
      }

      return {
        name: key,
        value: value === 1 ? undefined : `${value} $`,
        checked: Boolean(value === 1),
      };
    })
    .filter(Boolean);

  return (
    <Card
      name={props.travel.company.name}
      price={`${props.travel.price} RUB`}
      onClick={props.onBlock}
      link={props.travel.company.url}
      blockButton
      class={clsx(props.travel.approved ? "bg-rose-800" : "bg-bgLight")}
      color={props.travel.company.colorHexCode}
    >
      <Collapse title={<span>{optionsCount} Options allowed</span>}>
        <div class="flex flex-row flex-wrap gap-1">
          <For each={tags}>
            {(tag) => <Tag checked={tag.checked} name={tag.name} value={tag.value} />}
          </For>
        </div>
      </Collapse>
    </Card>
  );
};
