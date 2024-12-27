import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { LangChainService } from './langchain.service';
import { LangChainController } from './langchain.controller';
import { OpenAIService } from '../openai.service';
import { UserModule } from '../../user/user.module'; 

@Module({
  imports: [HttpModule, UserModule],
  providers: [LangChainService, OpenAIService],
  controllers: [LangChainController],
})
export class LangChainModule {}
