export default function WeatherDropdown() {
    return(
        <select className="weather" data-testid="weather-dropdown">
            <option value="" disabled>Velg sted</option>
        </select>
    )
}