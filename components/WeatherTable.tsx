import { data as weatherData } from '../data'
import { Place } from '../types'

export default function WeatherTable({
  currentLocation,
}: {
  currentLocation: Place
}) {
  return (
    <section className="weather-table" data-testid="weather-table">
      <h2>Oversikt</h2>
      <ul>
        {weatherData.map((data) => (
          <li key={data.id}>
            <div>
              <span>{data.place}</span>
              <span>{data.weather}</span>
              <span>{data.temperature}</span>
            </div>
            {currentLocation !== data.place.toLowerCase() ? (
              <button type="button">Velg sted</button>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
