// src/services/langchain/langchain.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { LangChainService } from './langchain.service';
import { UserService } from '../../user/user.service'; // Import UserService
import { CreateUserDto } from '../../common/dto/create-user.dto'; // Import CreateUserDto

@Controller('langchain')
export class LangChainController {
  constructor(
    private readonly langChainService: LangChainService,
    private readonly userService: UserService, // Inject UserService
  ) {}

  @Post('process')
  async processQuery(@Body() query: { destination: string; dates: string; interests: string }) {
    console.log('Received query in LangChainController:', query);

    // Map incoming query to CreateUserDto
    const userDto: CreateUserDto = {
      destination: query.destination,
      travelDates: query.dates, // Map 'dates' to 'travelDates'
      interests: query.interests,
    };

    console.log('Mapped query to CreateUserDto:', userDto);

    // Generate user preferences from UserService
    const userPreferences = await this.userService.create(userDto);

    console.log('Generated userPreferences:', userPreferences);

    // Pass userPreferences to LangChainService for processing
    const result = await this.langChainService.processUserPreferences(userPreferences);

    console.log('Response from LangChainService:', result);
    return result;
  }
}
