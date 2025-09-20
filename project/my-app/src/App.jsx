import { useState } from 'react'
import './App.css'

// Mock weather data
const WEATHER_DATA = {
  "Boston": { weather: "Sunny☀️", temperature: 25 },
  "New York": { weather: "Cloudy☁️", temperature: 22 },
  "Los Angeles": { weather: "Rainy☔︎︎", temperature: 18 },
};

function App() {
  // State variables
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle search
  const handleSearch = (e) => {
    // Stops the page from refreshing
    e.preventDefault();
    // Show loading status
    setIsLoading(true);
    setWeatherData(null);

    // Set timeout to display loading
    setTimeout(() => {
      const data = WEATHER_DATA[city];
      setWeatherData(data);
      setIsLoading(false);
    }, 1000);

  }

  return (
    <>
      <div className="container">
        <header>
          <h1>Michael Tsuruda's Weather App</h1>
          <p>Type your city from the following: Boston, New York, Los Angeles (Case sensitive)</p>
        </header>
        {/* Search bar */}
        <SearchBar
          cityName={city}
          onCityChange={setCity}
          onFormSubmit={handleSearch}
        />
        {isLoading ? (
          // If (isLoading) then
          <p>Loading...</p>
        ) : weatherData ? (
          // If (weatherData) then
          // Weather card
          < WeatherCard
            city={city}
            temperature={weatherData.temperature}
            weather={weatherData.weather}
          />
        ) : (
          // else
          <p>Please enter a city to get the weather information.</p>
        )}
      </div>
    </>
  )
}

// WeatherCard component
// Renders a card with weather information based on props
function WeatherCard({ city, weather, temperature }) {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p>{weather}</p>
      <p>{temperature}°C</p>
    </div>
  )
}

// SearchBar component
// Renders an input field for searching cities
function SearchBar({ cityName, onCityChange, onFormSubmit }) {
  return (
    // Add a search button to the form
    <form onSubmit={onFormSubmit}>
      <input type="text"
        value={cityName}
        onChange={(e) => onCityChange(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default App

// How to run this app:
// 9/8 recording
// npm create vite@latest my-app -- --template react
// cd my-app
// npm install
// npm run dev