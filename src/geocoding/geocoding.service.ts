// relative path: src/geocoding/geocoding.service.ts

import { Injectable } from '@nestjs/common';
import * as opencage from 'opencage-api-client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GeocodingService {
  private readonly apiKey: string;

  constructor(private readonly configService: ConfigService) {
    this.apiKey = this.configService.get<string>('OPENCAGE_API_KEY');
  }

  async getCoordinates(destination: string): Promise<{ lat: number; lng: number; formattedAddress: string; timezone: string }> {
    try {
      // Forward geocode (address to coordinates)
      const data = await opencage.geocode({ q: destination, key: this.apiKey });

      if (data.status.code === 200 && data.results.length > 0) {
        const place = data.results[0];
        const { lat, lng } = place.geometry;
        const formattedAddress = place.formatted;
        const timezone = place.annotations.timezone.name;

        return { lat, lng, formattedAddress, timezone };
      } else {
        throw new Error('No results found for the destination.');
      }
    } catch (error) {
      throw new Error('Error fetching geocode data: ' + error.message);
    }
  }
}
