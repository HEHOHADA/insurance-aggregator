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

export type Scrapping = {
  url: Selector;
  travel: TravelData;
  company: {
    name: Selector;
    logo: Selector;
    color: Selector;
    url: Selector;
  };
  type: Paging | InfinityScroll | One;
  params: {
    [key: string]: Selector;
  };
};

type TravelData = {
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
