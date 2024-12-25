// relative path: src/geocoding/geocoding.module.ts

import { Module } from '@nestjs/common';
import { GeocodingService } from './geocoding.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [GeocodingService],
  exports: [GeocodingService],
})
export class GeocodingModule {}
