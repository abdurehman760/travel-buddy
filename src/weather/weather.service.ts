//src\weather\weather.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}

  // Function to fetch weather data from Open-Meteo API
  async getWeather(latitude: number, longitude: number, forecastDays: number) {
    const params = {
      latitude,
      longitude,
      daily: [
        "weather_code", 
        "apparent_temperature_max", 
        "apparent_temperature_min", 
        "sunrise", 
        "sunset", 
        "daylight_duration"
      ],
      timezone: 'auto', // Automatically adjust based on the provided latitude and longitude
      forecast_days: forecastDays // Include forecast_days in the params
    };

    const url = 'https://api.open-meteo.com/v1/forecast';

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, { params })
      );

      const data = response.data;

      // Map weather codes to human-readable descriptions
      const weatherDescriptions = this.mapWeatherCodes(data.daily.weather_code);

      // Process weather data to include only required information
      const weatherData = {
        latitude: data.latitude,
        longitude: data.longitude,
        daily: {
          weatherDescription: weatherDescriptions,
          apparentTemperatureMax: data.daily.apparent_temperature_max,
          apparentTemperatureMin: data.daily.apparent_temperature_min,
          sunrise: data.daily.sunrise,
          sunset: data.daily.sunset,
          daylightDuration: data.daily.daylight_duration,
        },
      };

      return weatherData;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw new Error('Error fetching weather data');
    }
  }

  // Map WMO Weather Interpretation Codes to descriptions
  private mapWeatherCodes(codes: number[]): string[] {
    const wmoDescriptions: { [key: number]: string } = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Depositing rime fog",
      51: "Drizzle: Light intensity",
      53: "Drizzle: Moderate intensity",
      55: "Drizzle: Dense intensity",
      56: "Freezing Drizzle: Light intensity",
      57: "Freezing Drizzle: Dense intensity",
      61: "Rain: Slight intensity",
      63: "Rain: Moderate intensity",
      65: "Rain: Heavy intensity",
      66: "Freezing Rain: Light intensity",
      67: "Freezing Rain: Heavy intensity",
      71: "Snow fall: Slight intensity",
      73: "Snow fall: Moderate intensity",
      75: "Snow fall: Heavy intensity",
      77: "Snow grains",
      80: "Rain showers: Slight intensity",
      81: "Rain showers: Moderate intensity",
      82: "Rain showers: Violent intensity",
      85: "Snow showers: Slight intensity",
      86: "Snow showers: Heavy intensity",
      95: "Thunderstorm: Slight or moderate",
      96: "Thunderstorm with slight hail",
      99: "Thunderstorm with heavy hail",
    };

    // Transform the codes to descriptions
    return codes.map((code) => {
      if (code in wmoDescriptions) {
        return wmoDescriptions[code];
      } else {
        return "Unknown weather condition";
      }
    });
  }
}
