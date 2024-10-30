export interface AvailableCountry {
  countryCode: string;
  name: string;
}

export interface BorderCountryInfo {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: null | BorderCountryInfo[];
}

export interface CountryInfo extends Partial<BorderCountryInfo> {
  borders: BorderCountryInfo[];
}

export interface PopulationCounts {
  year: number;
  value: number;
}

export interface CountryPopulation {
  error: boolean;
  msg: string;
  data: {
    country: string;
    code: string;
    iso3: string;
    populationCounts: PopulationCounts[];
  };
}

export interface CountryFlag {
  error: boolean;
  msg: string;
  data: {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;
  };
}

export interface CountryData {
  countryCode: string;
  name: string;
  borders: BorderCountryInfo[];
  population: PopulationCounts[];
  flag: string;
}
