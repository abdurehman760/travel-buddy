// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../common/dto/create-user.dto';
import { GeocodingService } from '../geocoding/geocoding.service';
import { WeatherService } from '../weather/weather.service'; // Import WeatherService

@Injectable()
export class UserService {
  private userPreferences: any; // Updated to allow flexible userPreferences structure

  constructor(
    private readonly geocodingService: GeocodingService,
    private readonly weatherService: WeatherService, // Inject WeatherService
  ) {}

  /**
   * Generates user preferences based on input DTO.
   * 
   * @param createUserDto Input data to create user preferences
   * @returns A promise resolving to the complete user preferences object
   */
  async create(createUserDto: CreateUserDto): Promise<any> {
    // Fetch coordinates, formatted address, and timezone using GeocodingService
    const { lat, lng, formattedAddress, timezone } = await this.geocodingService.getCoordinates(createUserDto.destination);

    // Calculate the number of forecast days based on travel dates
    const forecastDays = this.calculateForecastDays(createUserDto.travelDates);

    // Fetch weather data using WeatherService
    const weather = await this.weatherService.getWeather(lat, lng, forecastDays);

    // Create user preferences object
    this.userPreferences = {
      ...createUserDto,
      lat,
      lng,
      formattedAddress,
      timezone,
      weather, // Include detailed weather data
    };

    console.log('Generated user preferences:', this.userPreferences);

    // Return the generated user preferences
    return this.userPreferences;
  }

  /**
   * Calculates the number of forecast days based on travel dates.
   * 
   * @param travelDates The travel dates in the format "Dec 25-27"
   * @returns The number of forecast days
   */
  private calculateForecastDays(travelDates: string): number {
    const [month, startEnd] = travelDates.split(' ');
    const [start, end] = startEnd.split('-').map(day => new Date(`${month} ${day}, ${new Date().getFullYear()}`));
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // Include both start and end dates
    return diffDays;
  }

  /**
   * Retrieves the current user preferences.
   * 
   * @returns The current user preferences
   */
  getUserPreferences(): any {
    if (!this.userPreferences) {
      throw new Error('User preferences have not been set yet.');
    }
    return this.userPreferences;
  }
}
