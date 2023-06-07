import type { TravelDataSelectors } from "../../types";

export const parseServiceProduct = (
  page: any,
  selectors: TravelDataSelectors["serviceProduct"],
) => {
  return Object.keys(selectors).reduce((acc, key) => {
    const element = page.findElement(selectors[key]).getText();

    acc[key] = element;

    return acc;
  }, {} as Record<string, any>);
};
