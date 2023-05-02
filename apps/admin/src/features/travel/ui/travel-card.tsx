import type { Component } from "solid-js";
import { For } from "solid-js";

import { capitalizedWord } from "lib";
import { Card, Collapse, Tag } from "ui";

import type { Travel } from "../../../shared/api";

export type TravelCardProps = {
  travel: Travel;
  onBlock: (id: string) => void;
};

export const TravelCard: Component<TravelCardProps> = (props) => {
  const { travel, onBlock } = props;
  const cards = Object.entries(travel.serviceProduct);

  const optionsCount = cards.filter((option) => option[1] === 0).length;

  const tags = cards
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
      name={travel.company.name}
      price={`${travel.priceRub} RUB`}
      onClick={onBlock}
      link={travel.company.url}
      color={travel.company.colorHexCode}
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
