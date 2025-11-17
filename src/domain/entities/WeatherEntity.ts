import type { Weather } from './Weather';

export function createWeatherEntity(data: Weather): Weather {
  return Object.freeze({
    temperature: data.temperature,
    humidity: data.humidity,
    description: data.description,
  });
}