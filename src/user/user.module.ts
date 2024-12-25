// relative path: src/user/user.module.ts

import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { GeocodingModule } from '../geocoding/geocoding.module';
import { WeatherModule } from '../weather/weather.module';  // Import WeatherModule

@Module({
  imports: [GeocodingModule, WeatherModule],  // Include WeatherModule in imports
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
