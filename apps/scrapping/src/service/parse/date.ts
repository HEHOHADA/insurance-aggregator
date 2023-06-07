import type { TravelDataSelectors } from "../../types";

export const parseDate = (page: any, selector: TravelDataSelectors["date"]) => {
  const { end, start } = selector;
  const startDate = page.findElement(start).getText();
  const endDate = page.findElement(end).getText();

  return { end: endDate, start: startDate };
};
