document.addEventListener('DOMContentLoaded', function () {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const today = new Date().toISOString().split('T')[0];
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 7);
    const maxDateString = maxDate.toISOString().split('T')[0];

    startDateInput.setAttribute('min', today);
    startDateInput.setAttribute('max', maxDateString);
    endDateInput.setAttribute('min', today);
    endDateInput.setAttribute('max', maxDateString);

    // Set the start and end dates to the current date
    startDateInput.value = today;
    endDateInput.value = today;

    startDateInput.addEventListener('change', function () {
      endDateInput.setAttribute('min', startDateInput.value);
    });

    const interestsInput = document.getElementById('interests');
    const interestSuggestionsBox = document.getElementById(
      'interestSuggestions',
    );
    const interests = [
'River', 'Beach', 'Mountain', 'Forest', 'Desert', 'Waterfall', 'Cave', 'National Park', 'Lake', 
'Island', 'Hiking Trail', 'Museum', 'Art Gallery', 'Historical Place', 'Cathedral', 'Castle', 'Palace', 
'Ruins', 'Archaeological Site', 'Aquarium', 'Zoo', 'Botanical Garden', 'Botanic Park', 'Wildlife Reserve', 
'Botanical Garden', 'Safari', 'Jungle', 'Monument', 'Statue', 'Park', 'City Square', 'Town Square', 'Amusement Park', 
'Shopping Mall', 'Luxury Hotel', 'Hostel', 'Boutique Hotel', 'Restaurant', 'Cafe', 'Food Market', 'Street Food', 
'Fine Dining', 'Food Stall', 'Wine Bar', 'Cocktail Bar', 'Brewery', 'Bakery', 'Ice Cream Parlor', 'Tea House', 
'Coffee Shop', 'Patio', 'Wine Tasting', 'Jazz Bar', 'Nightclub', 'Concert Hall', 'Theater', 'Opera House', 
'Performance Venue', 'Stadium', 'Sports Complex', 'Gym', 'Yoga Studio', 'Spa', 'Massage Parlor', 'Beauty Salon', 
'Boutique Shop', 'Antique Shop', 'Souvenir Shop', 'Local Markets', 'Street Vendor', 'Craft Shop', 'Bookstore', 
'Souvenir Shop', 'Handicraft Store', 'Farmer\'s Market', 'Artisan Shop', 'Leather Goods Shop', 'Jewelry Shop', 
'Clothing Boutique', 'Technology Store', 'Gift Shop', 'Stationery Shop', 'Florist', 'Toy Store', 'Game Shop', 
'Swimming Pool', 'Spa Resort', 'Tennis Court', 'Golf Course', 'Ski Resort', 'Mountain Resort', 'Water Park', 
'Cultural Center', 'Craft Museum', 'City Tour', 'Sightseeing Tour', 'Helicopter Tour', 'Bicycle Tour', 
'Walking Tour', 'Boat Tour', 'River Cruise', 'Historical Walking Tour', 'Photography Tour', 'Food Tour', 
'Cooking Class', 'Fishing Trip', 'Hunting Trip', 'Sailing', 'Boat Rental', 'Jet Ski', 'Horseback Riding', 
'Camel Ride', 'Paragliding', 'Skydiving', 'Hot Air Balloon Ride', 'Scuba Diving', 'Snorkeling', 'Kayaking', 
'Surfing', 'Windsurfing', 'Rock Climbing', 'Zip Lining', 'Fishing Spot', 'Canoeing', 'Rowing', 'Golfing', 
'Yoga Retreat', 'Spa Treatment', 'Relaxation', 'Mindfulness', 'Cultural Festival', 'Art Festival', 
'Music Festival', 'Food Festival', 'Literary Festival', 'Film Festival', 'Craft Fair', 'Holiday Market', 
'Charity Event', 'Volunteer Experience', 'Local Village', 'Agricultural Tour', 'Food Farming Tour', 'Wine Harvest Tour'
];

    interestsInput.addEventListener('input', function () {
      const query = interestsInput.value.toLowerCase();
      interestSuggestionsBox.innerHTML = '';
      if (query) {
        const filteredInterests = interests.filter((interest) =>
          interest.toLowerCase().includes(query),
        );
        filteredInterests.forEach((interest) => {
          const suggestion = document.createElement('div');
          suggestion.classList.add('autocomplete-suggestion');
          suggestion.textContent = interest;
          suggestion.addEventListener('click', function () {
            interestsInput.value = interest;
            interestSuggestionsBox.innerHTML = '';
          });
          interestSuggestionsBox.appendChild(suggestion);
        });
      }
    });

    const destinationInput = document.getElementById('destination');
    const destinationSuggestionsBox = document.getElementById(
      'destinationSuggestions',
    );
    const destinations = [
'New York', 'Tokyo', 'London', 'Sydney', 'Rome', 'Dubai', 'Barcelona', 'Istanbul', 'Bangkok',
'Los Angeles', 'Madrid', 'Milan', 'Seoul', 'Beijing', 'San Francisco', 'Lisbon', 'Amsterdam', 'Copenhagen', 'Berlin',
'Prague', 'Stockholm', 'Vienna', 'Singapore', 'Cape Town', 'Hawaii', 'Sydney', 'Athens', 'Zurich', 'Rio de Janeiro',
'Mexico City','Moscow', 'Bangkok', 'Lagos', 'Dubai', 'Vienna', 'Oslo', 'Helsinki',
'Cairo', 'Los Angeles', 'Shanghai', 'Rome', 'San Francisco', 'San Diego', 'Chicago', 'Montreal', 'Warsaw', 'Dublin', 
'Stockholm', 'Bali', 'Dubai', 'Buenos Aires', 'Los Angeles', 'Toronto', 'Athens', 'Zanzibar', 'Nairobi', 'Vancouver',
'Seoul', 'Florence', 'Brussels', 'Zurich', 'Dubai', 'Chennai', 'Bangalore', 'Dublin', 'Auckland', 'Osaka', 'London',
'Berlin', 'Bangkok', 'Cape Town', 'Rome', 'Lisbon', 'Rio de Janeiro', 'Shanghai', 'Mexico City', 'Lagos', 'Athens', 
'Venice', 'Malta', 'Manchester', 'Edinburgh', 'Perth', 'Calcutta', 'Kuala Lumpur', 'Pune', 'Istanbul', 
'Chennai', 'Phuket', 'Amman', 'Moscow', 'Jakarta', 'New Orleans', 'Amsterdam', 'Paris', 'Sydney', 'Wellington',
'Seoul', 'Bucharest', 'Tokyo', 'Bangkok', 'San Francisco', 'Mumbai', 'Wellington', 'Mexico City', 'Bangalore',
'Washington DC', 'Las Vegas', 'Lagos', 'Dallas', 'Munich', 'Hong Kong', 'Rio de Janeiro', 'Cape Town', 'Santiago',
'Dublin', 'Zurich', 'Copenhagen', 'Buenos Aires', 'Los Angeles', 'Dublin', 'Oslo', 'Seoul', 'London', 'Paris',
'Tokyo', 'Berlin', 'Milan', 'Madrid', 'Singapore', 'Hong Kong', 'Kuala Lumpur', 'Stockholm', 'Buenos Aires',
'Zanzibar', 'Seattle', 'New York City', 'New Delhi', 'Florence', 'Amman', 'Vancouver', 'Toronto', 'Dubai', 
'Los Angeles', 'Mexico City', 'Helsinki', 'Cairo', 'Rio de Janeiro', 'Madrid', 'Sydney', 'Washington DC', 
'Lisbon', 'Miami', 'Bangkok', 'Sofia', 'Cape Town', 'Paris', 'Manchester', 'Vienna', 'Oslo', 'Shanghai', 
'Warsaw', 'Prague', 'Rio de Janeiro', 'London', 'Toronto', 'Vancouver', 'New York', 'Amsterdam', 'Berlin', 'Seoul', 
'Milan', 'Hong Kong', 'Madrid', 'San Diego', 'Los Angeles', 'San Francisco', 'Stockholm', 'New York City', 'Vancouver', 
'Osaka', 'Singapore',  'Los Angeles', 'Barcelona', 'Cape Town', 'Florence', 'Kuala Lumpur',
'Rome', 'Bucharest', 'Dubai', 'Sydney', 'Rome', 'Jakarta', 'Barcelona', 'London', 'New York', 'Moscow',
'Chicago', 'Athens', 'Dublin', 'Dubai', 'Milan', 'Istanbul', 'Dubai', 'Tokyo', 'Zurich', 'San Francisco', 
'Shanghai', 'San Diego', 'Tokyo', 'Beijing', 'Warsaw', 'Singapore',  'Miami', 'Dallas', 'Vienna',
'Mexico City', 'Los Angeles', 'Copenhagen', 'Berlin', 'London', 'Florence', 'Helsinki', 'Zurich', 'Oslo',
'Singapore', 'Buenos Aires', 'Kuala Lumpur', 'Tokyo', 'Barcelona', 'Toronto', 'Milan', 'Sydney', 'Osaka','Kalam', 'Sapa', 'Bhutan', 'Ulaanbaatar', 'Vang Vien', 'Lijiang', 'Chefchaouen', 'Kotor', 'Shiraz', 'Luang Prabang',
'Zermatt', 'Rishikesh', 'Machu Picchu', 'Lake Baikal', 'Cinque Terre', 'Rotorua', 'Bled', 'Victoria Falls', 'Aoraki Mount Cook',
'Kigali', 'Giza', 'Galle', 'Pushkar', 'Azerbaijan', 'Wadi Rum', 'Zanzibar', 'Antwerp', 'Valletta', 'Fes',
'Tbilisi', 'Kyrgyzstan', 'Galapagos Islands', 'Koh Lanta', 'Meteora', 'Komodo Island', 'Oaxaca', 'Abu Dhabi', 'Guilin',
'Ushuaia', 'Tulum', 'Punta Cana', 'Siem Reap', 'Marrakech', 'Baku', 'Cartagena', 'Salzburg', 'Ljubljana', 'Galle',
'Lagos', 'Lake Atitlan', 'Zanzibar', 'Antananarivo', 'Luanda', 'Cebu', 'Hvar', 'Byron Bay', 'Corsica', 'Vang Vien',
'Almaty', 'Bucharest', 'Piran', 'Lima', 'Kochi', 'Alexandria', 'San Pedro de Atacama', 'Manila', 'Marrakech', 'Patagonia',
'Medellin', 'Chichen Itza', 'Bali', 'Albuquerque', 'Fiji', 'Iquitos', 'Kangaroo Island', 'Guilin', 'Quebec City', 'Puno',
'Belem', 'Malawi', 'Quito', 'Cuzco', 'Rwanda', 'Colca Canyon', 'Tangier', 'Valencia', 'Palawan', 'Mount Roraima', 'The Dead Sea',
'Baños', 'Laos', 'Ethiopia', 'Taj Mahal', 'Madagascar', 'Salta', 'Punta Arenas', 'Morocco', 'Khiva', 'Azores', 'La Paz',
'Kazakhstan', 'Cabo Verde', 'Dushanbe', 'Novosibirsk', 'Shymbulak', 'Nicaragua', 'Kazakhstan', 'Kuala Lumpur', 'Crete',
'Manaus', 'Helsinki Archipelago', 'Pattaya', 'Vail', 'Colombia', 'Mount Fuji', 'Koh Samui', 'Kanchanaburi', 'Jaisalmer',
'Cusco', 'Guilin', 'Rajasthan', 'Laos', 'Tirana', 'Amalfi Coast', 'Kuala Lumpur', 'Gili Islands', 'Palawan', 'Sri Lanka',
'Hokkaido', 'Vang Vien', 'Cedar Forest', 'Cambodia', 'Kerala', 'Yogyakarta', 'Himachal Pradesh', 'Katmandu', 'Vancouver Island',
'Arusha', 'Zagreb', 'Namibia', 'Tanzania', 'Belgrade', 'Wellington', 'Inle Lake', 'Borneo', 'Kangaroo Island', 'Shiraz',
'Seychelles', 'Lijiang', 'Algeria', 'Sapa', 'Batumi', 'Tallinn', 'Luanda', 'Saigon', 'Cape Verde', 'Orvieto', 'Santiago',
'Lima', 'Banff', 'Oaxaca', 'Hiroshima', 'Tangier', 'Isla Holbox', 'Auckland', 'Panglao Island', 'Dubai', 'Fes', 'Lima',
'Patagonian Region', 'Giza', 'Saint Petersburg', 'Fes', 'Dakar', 'Cuzco', 'Zadar', 'South Luangwa', 'Santiago de Chile',
'Jordan Valley', 'Ibiza', 'Santa Teresa', 'Isla Mujeres', 'Hvar', 'Seoul', 'Zanzibar', 'Laguna Colorada', 'Lima', 'Iguaçu Falls',
'Bratislava', 'Barcelona', 'Bucovina', 'Pienza', 'Djemaa el Fna', 'Bucovina', 'Helsinki', 'Cancun', 'Sofia', 'Minsk',
'San Cristobal', 'Golden Temple', 'Sri Lanka', 'Victoria Falls', 'Patagonian Desert', 'Colca Canyon', 'Banff', 'Nairobi',
'Djerba', 'Oman', 'Tangiers', 'Curacao', 'Ibiza', 'Vladivostok', 'Taroko Gorge', 'Whistler', 'Rotorua', 'Santiago', 'Helsinki',
'Santa Marta', 'Iguaçu Falls', 'Gozo', 'Chichen Itza', 'Ain Sefra', 'Angkor Wat', 'Reykjavik', 'Riviera Maya', 'Arles', 
'Riga', 'Oaxaca', 'Andes', 'Kep', 'Uruguay', 'Alicante', 'Santiago', 'Vancouver', 'Zanzibar', 'Kavala', 'Cairo',
'Costa Brava', 'Barcelona', 'Kyoto', 'Oaxaca', 'Trinidad', 'Singapore', 'Giza', 'Buenos Aires', 'Sarajevo', 'Palawan', 'Tokyo','Islamabad', 'Lahore', 'Karachi', 'Rawalpindi', 'Peshawar', 'Quetta', 'Multan', 'Faisalabad', 'Sialkot', 'Gujranwala',
'Murree', 'Swat', 'Hunza', 'Skardu', 'Gilgit', 'Chitral', 'Fairy Meadows', 'Naran', 'Kaghan', 'Azad Kashmir', 
'Baltit Fort', 'Khunjerab Pass', 'Deosai National Park', 'Karimabad', 'Ranikot Fort', 'Makli Necropolis', 'Lahore Fort', 
'Badshahi Mosque', 'Minar-e-Pakistan', 'Shalimar Gardens', 'Walled City of Lahore', 'Mohenjo-Daro', 'Taxila', 'Khewra Salt Mine', 
'Faisal Mosque', 'Hingol National Park', 'Ratti Gali Lake', 'Shogran', 'Babusar Pass', 'Kaghan Valley', 'Shandur Pass', 
'Lake Saif ul Malook', 'Naltar Valley', 'Attabad Lake', 'Lulusar Lake', 'Tarbela Dam', 'Cholistan Desert', 'Thar Desert', 
'Mirpur', 'Naran Kaghan', 'Pindi Point', 'Malam Jabba', 'Peshawar Museum', 'Sawat Valley', 'Raja Bazar', 'Mohenjo Daro', 
'Kot Diji Fort', 'Lahore Museum', 'Rawat Fort', 'Pattoki', 'Derawar Fort', 'Kalash Valley', 'Pir Sohawa', 'Bolan Pass', 
'Karakoram Highway', 'Sikhs Gurdwaras', 'Waziristan', 'Islamabad National Park', 'Lahore Zoo', 'Toli Pir', 'Pind Dadan Khan', 
'Abbottabad', 'Ziarat', 'Jhelum', 'Harappa', 'Madhuri', 'Shandur Festival', 'Ziarat Juniper Forest', 'Sahibzada Baba', 
'Baba Farid Tomb', 'Nankana Sahib', 'Karachi Clifton Beach', 'Matiari', 'Ravi River', 'Halla', 'Tarkani', 'Faisalabad Clock Tower',
'Dhanisar', 'Kund Malir', 'Sikarpur', 'Chakwal', 'Nankana Sahib', 'Hassan Abdal', 'Mardan', 'Sargodha', 'Gorakh Hill', 
'Sawat River', 'Chilam', 'Peshawar Old City', 'Ziarat Hill', 'Hattar', 'Siri Paye', 'Muzaffarabad', 'Shahkot', 'Sargodha',
'Peshawar Bazaar', 'Saiful Malook Lake', 'Gilgit Baltistan', 'Bhimber', 'Hazar Khwani', 'Kachh', 'Gurdaspur', 'Chilas', 
'Eidgah', 'Karak', 'Wazirabad', 'Balochistan', 'Hingol National Park', 'Kohat', 'Mardan', 'Torkham', 'Risalpur', 'Dera Ismail Khan', 
'Karachi Gateway', 'Port Qasim', 'Bannu', 'Mirpurkhas', 'Kohat Fort', 'Kalat', 'Makran Coast', 'Gorakh Hill Station', 
'Pak-Afghan Border', 'Mushkpuri', 'Peshawar Fort', 'Fort Munro', 'Balakot', 'Wadi e Swat', 'Khaplu', 'Kalam Valley', 
'Ayubia National Park', 'Srinagar', 'Mansehra', 'Chitral Fort', 'Abbottabad Hills', 'Lahore Cantt', 'Bagh', 'Tarbelan Dam',
'Kallar Kahar', 'Attock', 'Jand', 'Murree Hills', 'Takht-i-Bahi', 'Rani Kot', 'Jhelum Fort', 'Shah Jahan Mosque', 'Pind Dadan Khan',
'Khanpur Dam', 'Kashmir Point', 'Malam Jabba Resort', 'Patriata', 'Murran', 'Kundar', 'Shankar Fort', 'Puran', 'Dargai',
'Pakpattan', 'Talagang', 'Rahim Yar Khan', 'Sahiwal', 'Dera Ghazi Khan', 'Khanewal', 'Sheikhupura', 'Kasur', 'Bhakkar', 
'Okara', 'Pattoki', 'Lodhran', 'Chiniot', 'Narowal', 'Mansehra', 'Mingora', 'Chaman', 'Sibi', 'Panjgur', 'Turbat', 'Kalat',
'Khuzdar', 'Pasni', 'Ormara', 'Gwadar', 'Nushki', 'Dera Ismail Khan', 'Hangu', 'Kurram Agency', 'Bajaur', 'Khyber Agency', 
];

    destinationInput.addEventListener('input', function () {
      const query = destinationInput.value.toLowerCase();
      destinationSuggestionsBox.innerHTML = '';
      if (query) {
        const filteredDestinations = destinations.filter((destination) =>
          destination.toLowerCase().includes(query),
        );
        filteredDestinations.forEach((destination) => {
          const suggestion = document.createElement('div');
          suggestion.classList.add('autocomplete-suggestion');
          suggestion.textContent = destination;
          suggestion.addEventListener('click', function () {
            destinationInput.value = destination;
            destinationSuggestionsBox.innerHTML = '';
          });
          destinationSuggestionsBox.appendChild(suggestion);
        });
      }
    });

    document.addEventListener('click', function (event) {
      if (
        !interestSuggestionsBox.contains(event.target) &&
        event.target !== interestsInput
      ) {
        interestSuggestionsBox.innerHTML = '';
      }
      if (
        !destinationSuggestionsBox.contains(event.target) &&
        event.target !== destinationInput
      ) {
        destinationSuggestionsBox.innerHTML = '';
      }
    });

    // Call the events endpoint when the page loads, refreshes, or reloads
    const eventSource = new EventSource('http://localhost:3000/langchain/events');
    eventSource.onmessage = function (event) {
      const responseDiv = document.getElementById('response');
      const travelForm = document.getElementById('travelForm');
      travelForm.style.display = 'none'; // Hide the form immediately upon submission
      const terminalLoader = document.querySelector('.terminal-loader');
      if (terminalLoader) {
        terminalLoader.style.display = 'none'; // Hide terminal loader
      }

      responseDiv.innerHTML = ''; // Clear previous messages
      const message = document.createElement('div');
      
      message.innerHTML = `${event.data}`; // Append the new message
      responseDiv.appendChild(message);
    };

    document
      .getElementById('travelForm')
      .addEventListener('submit', async function (event) {
        event.preventDefault();

        const destination = document.getElementById('destination').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const interests = document.getElementById('interests').value;

        const dates = `${new Date(startDate).toLocaleString('default', { month: 'short' })} ${new Date(startDate).getDate()}-${new Date(endDate).getDate()}`;

        const responseDiv = document.getElementById('response');
        responseDiv.innerHTML = `
      <div class="terminal-loader">
        <div class="terminal-header">
          <div class="terminal-title">Status</div>
          <div class="terminal-controls">
            <div class="control close"></div>
            <div class="control minimize"></div>
            <div class="control maximize"></div>
          </div>
        </div>
        <div class="text">Preparing your itinerary...</div>
      </div>
    `; // Display terminal loader

        try {
          // Send request to backend to process the data
          await fetch('http://localhost:3000/langchain/process', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ destination, dates, interests }),
          });
        } catch (error) {
          console.error('Error processing query:', error);
          responseDiv.textContent =
            'An error occurred while processing your request.';
        }
      });
  });