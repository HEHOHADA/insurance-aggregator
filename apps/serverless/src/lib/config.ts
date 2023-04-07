import type { ServiceProduct } from "database";

export type CherepahaResponse = {
  calculations: {
    productId: number;
    companyId: number;
    price: number;
    priceRub: number;
    assistances: {
      code: string;
      name: string;
    }[];
    matchRating: number;
    matchDetails: {
      totalServices: number;
      additionalServices: number;
      missingServices: number;
      matchingServices: number;
      higherSumms: number;
      lowerSumms: number;
      priceRating: number;
      payoutRating: number;
    };
    serviceProduct: Omit<ServiceProduct, "id">;
    info: {
      medicina: any;
    } | null;
  }[];
};

export const handlerConfig = {
  cherepaha: {
    url: "https://www.cherehapa.ru/api/travel/calculate",
    method: "POST",
    params: {
      dateStart: "$.context.dateStart",
      insuredDays: 7,
      currency: "USD",
      services: { medicine: 50000, covid: 0, urgentStomatology: 1, foreign: 1 },
      tourists: [{ age: 18 }],
      countries: [],
      countryGroups: ["all-world"],
      sports: [],
      assistances: [],
    },
    companies: [
      {
        id: 23,
        code: "alfa",
        name: "АльфаСтрахование",
        url: "http://www.alfastrah.ru/",
        colorHexCode: "#ef3124",
        touristMaxAgeInYears: 100,
        isInsurerInRussian: true,
      },
      {
        id: 29,
        code: "tinkoff",
        name: "Тинькофф Страхование",
        url: "https://www.tinkoffinsurance.ru/",
        colorHexCode: "#ffdd2e",
        touristMaxAgeInYears: 74,
        isInsurerInRussian: true,
      },
      {
        id: 35,
        code: "ingos",
        name: "Ингосстрах",
        url: "http://www.ingos.ru/",
        colorHexCode: "#36415a",
        touristMaxAgeInYears: 99,
        isInsurerInRussian: false,
      },
      {
        id: 43,
        code: "sovcombank",
        name: "Совкомбанк Страхование",
        url: "https://sovcomins.ru/",
        colorHexCode: "#616265",
        touristMaxAgeInYears: 100,
        isInsurerInRussian: false,
      },
      {
        id: 47,
        code: "renins",
        name: "Ренессанс",
        url: "http://www.renins.com/",
        colorHexCode: "#6c3d7c",
        touristMaxAgeInYears: 64,
        isInsurerInRussian: false,
      },
      {
        id: 48,
        code: "reso",
        name: "РЕСО Гарантия",
        url: "http://www.reso.ru/",
        colorHexCode: "#2a7849",
        touristMaxAgeInYears: 85,
        isInsurerInRussian: false,
      },
      {
        id: 51,
        code: "soglasie",
        name: "Согласие",
        url: "http://www.soglasie.ru/",
        colorHexCode: "#e87932",
        touristMaxAgeInYears: 80,
        isInsurerInRussian: true,
      },
      {
        id: 52,
        code: "rstandart",
        name: "Русский Стандарт",
        url: "http://www.rsins.ru/",
        colorHexCode: "#8f0a0a",
        touristMaxAgeInYears: 100,
        isInsurerInRussian: true,
      },
      {
        id: 57,
        code: "absolut",
        name: "Абсолют Страхование",
        url: "https://www.absolutins.ru/",
        colorHexCode: "#ee2d23",
        touristMaxAgeInYears: 80,
        isInsurerInRussian: false,
      },
      {
        id: 59,
        code: "sberbank",
        name: "СберСтрахование",
        url: "http://www.sberbank.ru",
        colorHexCode: "#9acd32",
        touristMaxAgeInYears: 80,
      },
      {
        id: 62,
        code: "energogarant",
        name: "ЭНЕРГОГАРАНТ",
        url: "https://www.energogarant.ru/",
        colorHexCode: "#EE2121",
        touristMaxAgeInYears: 100,
        isInsurerInRussian: false,
      },
    ],
  },
};
