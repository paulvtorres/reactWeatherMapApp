import WeatherRepository from '../../src/domain/repositories/WeatherRepository';
import { Weather } from '../../src/domain/entities/Weather';

export default class WeatherRepositoryMock extends WeatherRepository {
  async getWeatherByCity(city: string): Promise<Weather> {
    if (city === 'Ciudad invalida') throw new Error('Ciudad no encontrada');
    if (city === 'NetworkFail') throw new Error('Error de red');
    return { temperature: 25, humidity: 55, description: 'sunny' };
  }
}