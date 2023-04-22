import type { Component } from "solid-js";
import { Button, Filter, Select } from "ui";
import { countries } from "../../../shared/countries";

export type FiltersProps = {
  onApplyFilters: () => void;
};

export const Filters: Component<FiltersProps> = (props) => {
  const {} = props;

  return (
    <div class="px-4 py-6">
      <h2 class="text-lg font-medium text-gray-900">Filters</h2>
      <div class="flex flex-col gap-6">
        <Filter text="Country">
          <Select
            multiple
            options={countries.map((value) => ({
              label: value.name,
              value: value.name,
            }))}
            placeholder="Select country"
          />
        </Filter>

        <div>
          <Button>Apply filters</Button>
        </div>
      </div>
    </div>
  );
};
