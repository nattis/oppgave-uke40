import { Place, WeatherData } from '../types'

type WeatherDropdownProps = {
  weatherData?: WeatherData[]
  currentLocation: Place
  handleUpdateWeather: (place: Place) => void
}

export default function WeatherDropdown({
  weatherData,
  handleUpdateWeather,
  currentLocation,
}: WeatherDropdownProps) {
  if (!weatherData) return null

  return (
    <select
      className="weather"
      data-testid="weather-dropdown"
      value={currentLocation ?? ''}
      onChange={(event) => handleUpdateWeather(event.target.value as Place)}
    >
      <option value="" disabled>
        Velg sted
      </option>
      {weatherData.map((data) => (
        <option key={data.id} value={data.place.toLowerCase()}>
          {data.place}
        </option>
      ))}
    </select>
  )
}
