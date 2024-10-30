"use server";

import { CountryData } from "@/types/country";
import { PayloadResponse } from "@/types/type";

export async function getCountryData(country: string) {
  const response = await fetch(
    `${process.env["API_URL"] as string}/country/${country}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );

  const payload: PayloadResponse<CountryData> = await response.json();

  return payload;
}
