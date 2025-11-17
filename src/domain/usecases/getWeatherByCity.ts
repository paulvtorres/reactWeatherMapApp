export default function makeGetWeatherByCity({ weatherRepository }: { weatherRepository: any }) {
  return async function getWeatherByCity(city: string) {
    return weatherRepository.getWeatherByCity(city);
  };
}