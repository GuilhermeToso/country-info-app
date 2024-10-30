import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { HttpModule } from '@nestjs/axios';
import { CountryController } from './country.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [CountryController],
  providers: [CountryService],
  exports: [CountryService],
})
export class CountryModule {}
