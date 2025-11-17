import { BASE_URL, API_KEY } from '../../core/constants.ts';
import { Weather } from '../../domain/entities/Weather.ts';

export async function fetchWeatherFromOpenWeather(city: string): Promise<Weather> {
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    const message = data.message || 'Error fetching weather';
    const err: any = new Error(message);
    err.status = res.status;
    throw err;
  }

  const data = await res.json();

  return {
    temperature: data.main.temp,
    humidity: data.main.humidity,
    description: data.weather?.[0]?.description || '',
  };
}