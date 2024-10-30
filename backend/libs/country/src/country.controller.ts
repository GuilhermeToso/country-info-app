import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  InternalServerErrorException,
  Param,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryData } from './country.types';
import { CodeDto } from './country.dto';

@Controller({
  path: 'country',
  version: '1',
})
export class CountryController {
  constructor(private countryService: CountryService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getCountries() {
    try {
      const countries = await this.countryService.getCountries();
      return {
        data: countries,
        statusCode: 200,
        error: null,
      };
    } catch (error: any) {
      console.log(error);
      throw new InternalServerErrorException('Error');
    }
  }

  @Get(':code')
  @HttpCode(HttpStatus.OK)
  async getCountryInfo(@Param() code: CodeDto) {
    try {
      const countryBorders = await this.countryService.getBorderCountries(
        code.code,
      );
      const countryPopulation = await this.countryService.getCountryPopulation(
        countryBorders.commonName,
      );
      const flag = await this.countryService.getCountryFlag(
        countryBorders.commonName,
      );
      const data: CountryData = {
        borders: countryBorders.borders,
        population: countryPopulation.data.populationCounts,
        flag: flag.data.flag,
        countryCode: code.code,
        name: countryBorders.commonName,
      };

      return {
        data: data,
        error: null,
        statusCode: 200,
      };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error');
    }
  }
}
