import type { TravelDataSelectors } from "../../types";

export const parsePrice = (page: any, selector: TravelDataSelectors["price"]) => {
  const { value, currency } = selector;
  const price = page.findElement(value).getText();
  const foundCurrency = page.findElement(currency).getText();

  return { price, currency: foundCurrency };
};
