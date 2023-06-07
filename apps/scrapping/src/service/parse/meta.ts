import type { TravelDataSelectors } from "../../types";

export const parseMeta = (page: any, selector: TravelDataSelectors["meta"]) => {
  return Object.keys(selector).reduce((acc, key) => {
    const element = page.findElement(selector[key]).getText();

    acc[key] = element;

    return acc;
  }, {} as Record<string, any>);
};
