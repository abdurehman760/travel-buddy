import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  destination: string;

  @IsString()
  @IsNotEmpty()
  @IsDateString()
  travelDates: string;

  @IsString()
  @IsNotEmpty()
  interests: string;

  @IsString()
  @IsOptional()
  weatherPreferences?: string;

  @IsOptional()
  lat?: number;

  @IsOptional()
  lng?: number;

  @IsOptional()
  formattedAddress?: string;

  @IsOptional()
  timezone?: string;

  @IsOptional()
  weather?: any;  // Optional field to store weather data
}
