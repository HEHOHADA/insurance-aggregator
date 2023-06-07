export type Selector = string;

export type InfinityScroll = {
  type: "infinity_scroll";
  scrollContainer: Selector;
  maxTimes: number;
};

export type Paging = {
  type: "paging";
  nextButton: Selector;
  maxTimes: number;
};

export type One = {
  type: "one";
};

type Value = string;

export type Scrapping = {
  url: Selector;
  travel: TravelDataSelectors;
  company: {
    name: Selector | string;
    logo: Selector | string;
    color: Selector | string;
    url: Selector | string;
  };
  type: Paging | InfinityScroll | One;
  filters: {
    [key: string]: [Selector, Value];
  };
};

export type TravelDataSelectors = {
  serviceProduct: Record<string, Selector>;
  price: {
    currency: Selector;
    value: Selector;
  };
  date: {
    start: Selector;
    end: Selector;
  };
  meta: {
    [key: string]: Selector;
  };
};
