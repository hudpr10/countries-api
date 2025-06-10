type FlagsType = {
  png: string;
  svg: string;
  alt: string;
};

export type NativeNameType = {
  [key: string]: {
    official: string;
    common: string;
  };
};

export type LanguagesType = {
  [key: string]: string;
};

export type NameType = {
  common: string;
  nativeName?: NativeNameType;
  official: string;
};

export type CountryResponseType = {
  name: NameType;
  capital: string[];
  flags: FlagsType;
  population: number;
  region: string;
  cca2: string;
};

export type CurrenciesType = {
  [key: string]: {
    name: string;
    symbol: string;
  };
};

export type CountryDetailedType = {
  name: NameType;
  population: number;
  region: string;
  capital?: string[];
  subregion?: string;
  tld: string[];
  currencies?: CurrenciesType;
  languages?: LanguagesType;
  borders?: string[];
};
