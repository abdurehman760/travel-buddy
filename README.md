# Travel Buddy

Travel Buddy is a comprehensive travel planning application designed to help users organize their trips efficiently. This README provides an overview of the project, installation instructions, usage guidelines, and contribution information.

## Table of Contents
- [Features](#features)
- [LangChain Integration](#langchain-integration)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Demo](#demo)

---

## Demo

Watch the demo video to see Travel Buddy in action:
[Demo Video](https://drive.google.com/file/d/1XwmoU2girszr9nqHslFpMS31Rcrmi90b/view?usp=drive_link)

## Documention

See Travel Buddy Documention:
[Documention](https://drive.google.com/file/d/1XwmoU2girszr9nqHslFpMS31Rcrmi90b/view?usp=drive_link](https://docs.google.com/document/d/1am548Ju3KRMok2oZOfdanVWyox-Y7P5SfFBhQuO3CDI/edit?tab=t.0)


## Features

### Trip Planning
- Create and manage travel itineraries.
- Find popular destinations and attractions.
- Get real-time weather information for your destinations.
- Access a collection of travel tips and advice.

### Form Autocomplete and Auto-suggestion
The frontend of Travel Buddy includes advanced form features such as autocomplete and auto-suggestion to enhance user experience. These features help users quickly fill out forms by suggesting relevant options as they type, making the process faster and more efficient.
- **Autocomplete**: Automatically completes user input based on previously entered data or predefined options.
- **Auto-suggestion**: Provides a list of suggestions as the user types, allowing them to select the most appropriate option.

---

## LangChain Integration

LangChain is utilized in Travel Buddy to generate detailed travel itineraries based on user preferences. Here's how it works:

1. **User Input**: The user provides their travel destination, dates, and interests through the frontend form.
2. **Backend Processing**: The backend receives the user input and processes it using the LangChain service.
3. **Weather Data**: The WeatherService fetches real-time weather data for the specified destination and dates.
4. **OpenAI Integration**: The LangChain service uses the OpenAI API to generate a detailed itinerary. The prompt includes weather information and user preferences to create a customized travel plan.
5. **Real-time Updates**: The backend sends real-time updates to the frontend using Server-Sent Events (SSE) to keep the user engaged while the itinerary is being generated.

---

## Installation

To install Travel Buddy, follow these steps:

1. Clone the repository:
  ```bash
  git clone https://github.com/abdurehman760/travel-buddy.git
  ```
2. Navigate to the project directory:
  ```bash
  cd travel-buddy
  ```
3. Install the dependencies:
  ```bash
  npm install
  ```

---

## Usage

To start using Travel Buddy, run the following command:
```bash
npm start
```
Open your browser and navigate to `http://localhost:3000` to access the application.

---

## Contributing

We welcome contributions to Travel Buddy! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch:
  ```bash
  git checkout -b feature-branch
  ```
3. Make your changes and commit them:
  ```bash
  git commit -m "Description of changes"
  ```
4. Push to the branch:
  ```bash
  git push origin feature-branch
  ```
5. Create a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---


