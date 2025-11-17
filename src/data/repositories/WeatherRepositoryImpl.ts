import WeatherRepository from '../../domain/repositories/WeatherRepository';
import { fetchWeatherFromOpenWeather } from '../datasources/openWeatherApi';
import { Weather } from '../../domain/entities/Weather';

export default class WeatherRepositoryImpl extends WeatherRepository {
  async getWeatherByCity(city: string): Promise<Weather> {
    return fetchWeatherFromOpenWeather(city);
  }
}