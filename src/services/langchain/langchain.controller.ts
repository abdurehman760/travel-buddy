import { Controller, Post, Body, Sse, MessageEvent } from '@nestjs/common';
import { LangChainService } from './langchain.service';
import { UserService } from '../../user/user.service';
import { CreateUserDto } from '../../common/dto/create-user.dto';
import { Observable, Subject } from 'rxjs';

@Controller('langchain')
export class LangChainController {
  private eventsSubject: Subject<MessageEvent> = new Subject<MessageEvent>();

  constructor(
    private readonly langChainService: LangChainService,
    private readonly userService: UserService,
  ) {}

  @Post('process')
  async processQuery(@Body() query: { destination: string; dates: string; interests: string }) {
    this.eventsSubject = new Subject<MessageEvent>(); // Reinitialize eventsSubject for each request

    console.log('Received query in LangChainController:', query);

    const userDto: CreateUserDto = {
      destination: query.destination,
      travelDates: query.dates,
      interests: query.interests,
    };

    const userPreferences = await this.userService.create(userDto);
    console.log('Generated userPreferences:', userPreferences);

    this.eventsSubject.next({ data: 'Preparing your itinerary...' });

    // Simulate streaming events
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.eventsSubject.next({ data: 'Compiling weather data...' });

    await new Promise((resolve) => setTimeout(resolve, 1000));
this.eventsSubject.next({ data: '<div class="response-message">Generating travel suggestions...</div>' });

    const result = await this.langChainService.processUserPreferences(userPreferences);

    this.eventsSubject.next({ data: 'Itinerary complete!' });
    this.eventsSubject.next({ data: result });
    this.eventsSubject.complete();
  }

  @Sse('events')
  sendEvents(): Observable<MessageEvent> {
    return this.eventsSubject.asObservable();
  }
}
