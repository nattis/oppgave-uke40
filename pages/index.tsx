import type { NextPage } from 'next'
import StaticText from '../components/StaticText'
import Title from '../components/Title'
import WeatherDropdown from '../components/WeatherDropdown'
import WeatherTable from '../components/WeatherTable'
import { data } from '../data'
import useWeather from '../hooks/useWeather'

const Home: NextPage = () => {
  const { weatherData, handleUpdateWeather, currentLocation } = useWeather(data)

  return (
    <>
      <Title title={'Velkommen til oversikten over været'} />
      <StaticText />
      <WeatherDropdown
        weatherData={weatherData}
        handleUpdateWeather={handleUpdateWeather}
        currentLocation={currentLocation}
      />
      <WeatherTable currentLocation={currentLocation} />
    </>
  )
}

export default Home
