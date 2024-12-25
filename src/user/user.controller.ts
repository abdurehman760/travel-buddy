// relative path: src/user/user.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../common/dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('preferences')
  async create(@Body() createUserDto: CreateUserDto): Promise<string> {
    return await this.userService.create(createUserDto); // Await the Promise returned by the service
  }
}
