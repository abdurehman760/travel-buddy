// relative path: src/weather/weather.module.ts

import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { GeocodingService } from '../geocoding/geocoding.service';
import { ConfigModule } from '@nestjs/config';  // Import ConfigModule

@Module({
  imports: [HttpModule, ConfigModule],  // Include ConfigModule to provide ConfigService
  providers: [WeatherService, GeocodingService],
  controllers: [WeatherController],
  exports: [WeatherService],  // Export WeatherService
})
export class WeatherModule {}
