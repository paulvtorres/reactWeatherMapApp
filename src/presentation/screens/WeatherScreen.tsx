import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import useWeatherViewModel from '../viewmodels/useWeatherViewModel';
import WeatherRepository from '../../domain/repositories/WeatherRepository';

type Props = {
  weatherRepository: WeatherRepository;
};

export default function WeatherScreen({ weatherRepository }: Props) {
  const vm = useWeatherViewModel({ weatherRepository });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clima Actual</Text>

      <TextInput
        placeholder="Ingrese una ciudad..."
        value={vm.city}
        onChangeText={vm.setCity}
        accessibilityLabel="input-city"
        style={styles.input}
        placeholderTextColor="#777"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={vm.search}
        accessibilityLabel="btn-search"
      >
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      {vm.loading && (
        <ActivityIndicator style={{ marginTop: 16 }} size="large" color="#4A90E2" />
      )}

      {vm.error && (
        <Text accessibilityLabel="error-message" style={styles.errorText}>
          {vm.error}
        </Text>
      )}

      {vm.weather && (
        <View style={styles.resultCard} accessibilityLabel="weather-result">
          <Text style={styles.resultTitle}>{vm.city}</Text>

          <Text style={styles.resultText}>
            Temperatura: <Text style={styles.bold}>{vm.weather.temperature}°C</Text>
          </Text>

          <Text style={styles.resultText}>
            Humedad: <Text style={styles.bold}>{vm.weather.humidity}%</Text>
          </Text>

          <Text style={styles.resultText}>
            Descripción: <Text style={styles.bold}>{vm.weather.description}</Text>
          </Text>
        </View>
      )}
      <Text style={styles.devLabel}>Dev. Paul Torres</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, paddingTop: 80, backgroundColor: '#F7F9FC' },
  title: { fontSize: 28, fontWeight: '700', color: '#222', textAlign: 'center', marginBottom: 32 },
  input: { backgroundColor: '#FFF', borderWidth: 1, borderColor: '#DDD', borderRadius: 12, paddingHorizontal: 16, paddingVertical: 12, fontSize: 16, color: '#333', marginBottom: 16, elevation: 1 },
  button: { backgroundColor: '#4A90E2', paddingVertical: 14, borderRadius: 12, alignItems: 'center', elevation: 2, marginBottom: 20 },
  buttonText: { color: '#FFF', fontSize: 17, fontWeight: '600' },
  errorText: { color: '#E63946', fontSize: 16, textAlign: 'center', marginTop: 12 },
  resultCard: { marginTop: 24, padding: 20, backgroundColor: '#FFF', borderRadius: 16, borderColor: '#E5E7EB', borderWidth: 1, elevation: 2 },
  resultTitle: { fontSize: 22, fontWeight: '700', color: '#333', marginBottom: 12, textTransform: 'capitalize' },
  resultText: { fontSize: 18, color: '#555', marginBottom: 6 },
  bold: { fontWeight: '700', color: '#333' },
  devLabel: { textAlign: 'center', marginTop: 40, fontSize: 18, color: '#2a1f1fff', fontStyle: 'italic' },
});