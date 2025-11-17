import React from 'react';
import WeatherScreen from './src/presentation/screens/WeatherScreen';
import { makeWeatherRepository } from './src/di/container';

export default function App() {
  const repo = makeWeatherRepository();
  return <WeatherScreen weatherRepository={repo} />;
}