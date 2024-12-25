// relative path: src/weather/weather.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('forecast')
  async getWeatherForecast(
    @Query('latitude') latitude: number,
    @Query('longitude') longitude: number,
    @Query('forecastDays') forecastDays: number, // Include forecastDays in the query parameters
  ) {
    // Fetch weather data from the weather service
    const weatherData = await this.weatherService.getWeather(latitude, longitude, forecastDays);

    return weatherData;
  }
}
