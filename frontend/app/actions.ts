"use server";

import { AvailableCountry } from "@/types/country";
import { PayloadResponse } from "@/types/type";

export async function getCountries() {
  const response = await fetch(`${process.env["API_URL"] as string}/country`, {
    method: "GET",
    cache: "no-cache",
  });

  const payload: PayloadResponse<AvailableCountry[]> = await response.json();

  return payload;
}
