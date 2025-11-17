import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import WeatherScreen from '../../src/presentation/screens/WeatherScreen';
import WeatherRepositoryMock from '../mocks/WeatherRepositoryMock';

describe('WeatherScreen', () => {
  let repoMock: WeatherRepositoryMock;

  beforeEach(() => {
    repoMock = new WeatherRepositoryMock();
  });

  it('muestra la información del clima correctamente', async () => {
    const { getByPlaceholderText, getByText } = render(<WeatherScreen weatherRepository={repoMock} />);

    fireEvent.changeText(getByPlaceholderText('Ingrese una ciudad...'), 'Quito');
    fireEvent.press(getByText('Buscar'));

    await waitFor(() => {
      expect(getByText('25°C')).toBeTruthy();
      expect(getByText('55%')).toBeTruthy();
      expect(getByText('sunny')).toBeTruthy();
    });
  });

  it('muestra mensaje de error si la ciudad no existe', async () => {
    const { getByPlaceholderText, getByText } = render(<WeatherScreen weatherRepository={repoMock} />);

    fireEvent.changeText(getByPlaceholderText('Ingrese una ciudad...'), 'Ciudad invalida');
    fireEvent.press(getByText('Buscar'));

    await waitFor(() => {
      expect(getByText('Ciudad no encontrada')).toBeTruthy();
    });
  });

  it('verifica que el input y botón funcionan', async () => {
    const { getByPlaceholderText, getByText } = render(<WeatherScreen weatherRepository={repoMock} />);

    const input = getByPlaceholderText('Ingrese una ciudad...');
    const button = getByText('Buscar');

    fireEvent.changeText(input, 'Quito');
    expect(input.props.value).toBe('Quito');

    fireEvent.press(button);
    await waitFor(() => {
      expect(getByText('25°C')).toBeTruthy();
    });
  });
});