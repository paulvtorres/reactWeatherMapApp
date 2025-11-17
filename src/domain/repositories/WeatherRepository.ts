import { Weather } from '../entities/Weather';

export default abstract class WeatherRepository {
  abstract getWeatherByCity(city: string): Promise<Weather>;
}