// relative path: src/app.module.ts

import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { GeocodingModule } from './geocoding/geocoding.module';
import { ConfigModule } from '@nestjs/config';  
import { WeatherModule } from './weather/weather.module';
import { LangChainService } from './services/langchain/langchain.service';
import { OpenAIService } from './services/openai.service';
import { LangChainController } from './services/langchain/langchain.controller';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule

@Module({
  imports: [UserModule, GeocodingModule, ConfigModule.forRoot(), WeatherModule, HttpModule], // Include HttpModule
  controllers: [LangChainController],
  providers: [LangChainService, OpenAIService], 
})
export class AppModule {}
