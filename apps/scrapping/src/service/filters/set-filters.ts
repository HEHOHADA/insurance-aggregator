import type { Scrapping } from "../../types";

export const setFilters = async (page: any, filters: Scrapping["filters"]) => {
  Object.keys(filters).forEach((key) => {
    page.findElement(filters[key][0]).sendKeys(filters[key][1]);
  });

  return page;
};
