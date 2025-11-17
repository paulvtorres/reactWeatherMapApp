import WeatherRepositoryImpl from '../data/repositories/WeatherRepositoryImpl';

export function makeWeatherRepository() {
  return new WeatherRepositoryImpl();
}