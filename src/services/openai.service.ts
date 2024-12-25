import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenAIService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async complete(params: { model: string; prompt: string; max_tokens: number }) {
    const response = await this.openai.chat.completions.create({
      model: params.model,
      messages: [{ role: 'user', content: params.prompt }],
      max_tokens: params.max_tokens,
    });
    return response;
  }
}