import { useState } from 'react';
import makeGetWeatherByCity from '../../domain/usecases/getWeatherByCity';
import  WeatherRepository from '../../domain/repositories/WeatherRepository';
import { Weather } from '../../domain/entities/Weather';

export default function useWeatherViewModel({ weatherRepository }: { weatherRepository: WeatherRepository }) {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [weather, setWeather] = useState<Weather | null>(null);

  const getWeatherByCity = makeGetWeatherByCity({ weatherRepository });

  const handleCityChange = (value: string) => {
    setCity(value);
    setWeather(null);
    setError(null);
  };

  const search = async () => {
    setError(null);

    if (!city.trim()) {
      setError('Ingrese el nombre de una ciudad');
      return;
    }

    try {
      setLoading(true);
      const data = await getWeatherByCity(city.trim());
      setWeather(data);
    } catch (e: any) {
      setError(
        e?.message === 'Error de red'
          ? 'Error de conexión'
          : e?.message || 'Error al obtener el clima'
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    city,
    setCity: handleCityChange,
    loading,
    error,
    weather,
    search,
  };
}