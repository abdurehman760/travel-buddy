import { Injectable } from '@nestjs/common';
import { OpenAIService } from '../openai.service';

@Injectable()
export class LangChainService {
  constructor(private readonly openaiService: OpenAIService) {}

  async processUserPreferences(userPreferences: any) {
    console.log('Received userPreferences in LangChainService:', userPreferences);

    const response = await this.chainActions(userPreferences);
    return response;
  }

  private async chainActions(userPreferences: any) {
    const weatherDetails = this.formatWeatherDetails(userPreferences.weather);
    console.log('Formatted weather details:', weatherDetails);

    // Dynamic prompt with a focus on including necessary weather information
    const prompt = `
    Plan a trip to ${userPreferences.destination} from ${userPreferences.dates} with interests in ${userPreferences.interests}.
    For each day, include weather-related information such as maximum and minimum temperatures, sunrise and sunset times, and other relevant weather conditions.
    The weather information must include the following details:
    - Weather description (e.g., Clear sky, Partly cloudy, Rain)
    - Max Temperature (e.g., 12°C)
    - Min Temperature (e.g., 8°C)
    - Sunrise time (e.g., 07:45 AM)
    - Sunset time (e.g., 04:30 PM)
    - Daylight Duration (in hours, e.g., 8.75 hours)

    Use the following detailed weather forecast to enhance the itinerary planning:
    ${weatherDetails}

    Additionally, please suggest main tourist attractions or places to visit in ${userPreferences.destination}. These should be based on the destination's unique culture, landmarks, and popular spots. Avoid hardcoded suggestions and make them relevant to the destination.

    Create an itinerary where activities are planned to match the weather conditions and highlight key attractions for each day. Clearly explain how the weather will affect the planned activities for each day, and what the user can expect from visiting these locations.

    Please format the response in HTML, using the following structure:
    - Use <h2> for the day headers (e.g., Day 1, Day 2, etc.)
    - Use <ul> and <li> tags for listing activities or details for each day.
    - For weather information, use a <table> with columns for Weather, Max Temperature, Min Temperature, Sunrise, Sunset, and Daylight Duration.
    - Ensure the HTML is properly structured to display as an easily readable itinerary,add hyperlinks to p.

    Style the page according to the destination's vibe, enhancing the visual appeal of the itinerary. Ensure the style complements the mood of the destination and provides an engaging experience for the user.and also dont say things other than itinerary.  
`;


    const response = await this.openaiService.complete({
      model: 'gpt-4o-2024-11-20',
      prompt: prompt,
      max_tokens: 2000,
    });

    return response.choices[0].message.content;
  }

  private formatWeatherDetails(weather: any): string {
    if (!weather || !weather.daily) {
      console.error('Weather data is missing or malformed:', weather);
      return 'No weather data available.';
    }

    const days = weather.daily.weatherDescription.length;
    let weatherDetails = 'Weather Forecast:\n\n';

    for (let i = 0; i < days; i++) {
      weatherDetails += `Day ${i + 1} (${new Date(weather.daily.sunrise[i]).toLocaleDateString()}):\n`;
      weatherDetails += `  - Weather: ${weather.daily.weatherDescription[i]}\n`;
      weatherDetails += `  - Max Temperature: ${weather.daily.apparentTemperatureMax[i]}°C\n`;
      weatherDetails += `  - Min Temperature: ${weather.daily.apparentTemperatureMin[i]}°C\n`;
      weatherDetails += `  - Sunrise: ${weather.daily.sunrise[i]}\n`;
      weatherDetails += `  - Sunset: ${weather.daily.sunset[i]}\n`;
      weatherDetails += `  - Daylight Duration: ${(weather.daily.daylightDuration[i] / 3600).toFixed(2)} hours\n\n`;
    }

    return weatherDetails;
  }
}
