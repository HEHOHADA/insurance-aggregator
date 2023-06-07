import { useStoreMap } from "effector-solid";
import type { Component } from "solid-js";

import { Filter, Input, Select } from "ui";

import { countries } from "../../../shared/countries";
import { $form, setField } from "../index";

export const Filters: Component = () => {
  return (
    <div class="px-4 py-6">
      <div class="flex gap-6">
        <CountryFilter />
        <DateFilter />
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
      const fieldValue = store[key];

      return fieldValue;
    },
  });

  return (
    <Filter text="Country" class="w-full">
      <Select
        value={fieldValue()}
        onChange={(values) => {
          setField({
            key: "country",
            value: values.value,
          });
        }}
        options={options}
        placeholder="Select country"
      />
    </Filter>
  );
};

const DateFilter = () => {
  const fieldValue = useStoreMap({
    store: $form,
    keys: ["from"],
    fn: (store, [key]) => {
      const fieldValue = store[key];

      return fieldValue;
    },
  });

  return (
    <Filter text="From Date">
      <Input
        type="date"
        value={fieldValue()}
        onChange={(event) => {
          setField({
            key: "from",
            value: event.currentTarget.value,
          });
        }}
      />
    </Filter>
  );
};
