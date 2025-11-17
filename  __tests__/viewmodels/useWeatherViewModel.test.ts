import { renderHook, act } from '@testing-library/react-hooks';
import useWeatherViewModel from '../../src/presentation/viewmodels/useWeatherViewModel';
import WeatherRepositoryMock from '../mocks/WeatherRepositoryMock';

describe('useWeatherViewModel', () => {
  let repo: WeatherRepositoryMock;

  beforeEach(() => {
    repo = new WeatherRepositoryMock();
  });

  it('resetea weather y error al cambiar la ciudad', () => {
    const { result } = renderHook(() => useWeatherViewModel({ weatherRepository: repo }));

    act(() => result.current.setCity('Quito'));
    expect(result.current.city).toBe('Quito');
    expect(result.current.weather).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('actualiza weather correctamente después de búsqueda exitosa', async () => {
    const { result } = renderHook(() => useWeatherViewModel({ weatherRepository: repo }));

    act(() => result.current.setCity('Quito'));
    await act(async () => { await result.current.search(); });

    expect(result.current.weather).toEqual({ temperature: 25, humidity: 55, description: 'sunny' });
    expect(result.current.error).toBeNull();
  });

  it('muestra error cuando la ciudad no existe', async () => {
    const { result } = renderHook(() => useWeatherViewModel({ weatherRepository: repo }));

    act(() => result.current.setCity('Ciudad invalida'));
    await act(async () => { await result.current.search(); });

    expect(result.current.weather).toBeNull();
    expect(result.current.error).toBe('Ciudad no encontrada');
  });

  it('muestra error de conexión si falla la red', async () => {
    const { result } = renderHook(() => useWeatherViewModel({ weatherRepository: repo }));

    act(() => result.current.setCity('NetworkFail'));
    await act(async () => { await result.current.search(); });

    expect(result.current.weather).toBeNull();
    expect(result.current.error).toBe('Error de conexión');
  });

  it('muestra error si se intenta buscar sin ingresar ciudad', async () => {
    const { result } = renderHook(() => useWeatherViewModel({ weatherRepository: repo }));

    await act(async () => { await result.current.search(); });

    expect(result.current.weather).toBeNull();
    expect(result.current.error).toBe('Ingrese el nombre de una ciudad');
  });
});