import { useStoreMap } from "effector-solid";
import type { Component } from "solid-js";

import { Filter, Select } from "ui";

import { countries } from "../../../shared/countries";
import { $form, setField } from "../index";

export const Filters: Component = () => {
  return (
    <div class="px-4 py-6">
      <div class="flex gap-6">
        <CountryFilter />
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
    <Filter text="Country" class="w-full">
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
