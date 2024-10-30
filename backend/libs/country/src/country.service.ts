import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { firstValueFrom } from 'rxjs';
import {
  AvailableCountry,
  BorderCountryInfo,
  CountryFlag,
  CountryPopulation,
} from './country.types';

@Injectable()
export class CountryService {
  constructor(private httpService: HttpService) {}

  async getCountries() {
    const response: AxiosResponse<AvailableCountry[], any> =
      await firstValueFrom(
        this.httpService.get(
          `${process.env['DATA_NAVER_API_URL']}/AvailableCountries`,
          {
            method: 'GET',
          },
        ),
      );

    return response.data;
  }

  async getBorderCountries(code: string) {
    const response: AxiosResponse<BorderCountryInfo, any> =
      await firstValueFrom(
        this.httpService.get(
          `${process.env['DATA_NAVER_API_URL']}/CountryInfo/${code}`,
        ),
      );

    return response.data;
  }

  async getCountryPopulation(name: string) {
    const response: AxiosResponse<CountryPopulation, any> =
      await firstValueFrom(
        this.httpService.post(
          `${process.env['COUNTRIES_NOW_API_URL']}/countries/population`,
          {
            country: name,
          },
        ),
      );

    return response.data;
  }

  async getCountryFlag(name: string) {
    const response: AxiosResponse<CountryFlag, any> = await firstValueFrom(
      this.httpService.post(
        `${process.env['COUNTRIES_NOW_API_URL']}/countries/flag/images`,
        {
          country: name,
        },
      ),
    );

    return response.data;
  }
}
