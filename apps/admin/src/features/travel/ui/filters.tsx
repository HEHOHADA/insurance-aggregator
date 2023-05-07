import { useStoreMap } from "effector-solid";
import type { Component } from "solid-js";

import { Button, Filter, Select } from "ui";

import { countries } from "../../../shared/countries";
import { $form, sendClicked, setField } from "../index";

export const Filters: Component = () => {
  return (
    <div class="px-4 py-6">
      <h2 class="text-lg font-medium text-gray-900">Filters</h2>
      <div class="flex flex-col gap-6">
        <CountryFilter />
        <div>
          <Button
            onClick={() => {
              sendClicked();
            }}
          >
            Apply filters
          </Button>
        </div>
      </div>
    </div>
  );
};

const options = countries.map((value) => ({
  label: value.name,
  value: value.name,
}));

const CountryFilter = () => {
  const fieldValue = useStoreMap({
    store: $form,
    keys: ["country"],
    fn: (store, [key]) => {
      const fieldValue = store[key] as string[];

      if (fieldValue) {
        return fieldValue?.map((field) => options.find((option) => field === option.value));
      }

      return [];
    },
  });

  return (
    <Filter text="Country">
      <Select
        isMulti
        value={fieldValue()}
        onChange={(values) => {
          setField({
            key: "country",
            value: values.map((value) => value.value),
          });
        }}
        options={options}
        placeholder="Select country"
      />
    </Filter>
  );
};
