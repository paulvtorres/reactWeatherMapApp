React Native Weather App

Descripción del Proyecto

Aplicación de clima simple construida con React Native CLI. Permite a los usuarios buscar el clima actual de cualquier ciudad y mostrar información relevante como la temperatura, la humedad y una breve descripción del clima.

Además, incluye pruebas unitarias para asegurar que las funcionalidades principales funcionan correctamente.

⸻

Requisitos
	•	Campo de entrada para que el usuario ingrese el nombre de una ciudad.
	•	Botón para buscar el clima de la ciudad ingresada.
	•	Sección que muestra la información del clima:
	•	Temperatura actual
	•	Humedad
	•	Descripción del clima (ej. “soleado”, “nublado”)
	•	Funcionalidades:
	•	Buscar clima actual por ciudad
	•	Manejo de errores (ciudad inválida o fallo de conexión)
	•	Consumo de API pública OpenWeatherMap: https://openweathermap.org/￼

⸻

Instalación
	1.	Clonar el repositorio:

git clone <REPO_URL>
cd reactWeatherMapApp

	2.	Instalar dependencias:

npm install

	3.	Crear archivo .env en la raíz del proyecto y agregar tu API Key de OpenWeatherMap:

OPENWEATHERMAP_API_KEY=tu_api_key_aqui

Puedes obtener tu API Key registrándote en OpenWeatherMap￼

⸻

Ejecución de la App
	1.	Iniciar Metro Bundler:

npx react-native start

	2.	Ejecutar la app en Android:

npx react-native run-android

	3.	Ejecutar la app en iOS (requiere macOS):

npx react-native run-ios


⸻

Pruebas Unitarias

Esta aplicación utiliza Jest y React Testing Library.

Ejecutar pruebas

npm run test

Ejecutar pruebas con cobertura

npm run test:coverage

Se espera un coverage mínimo de 80%. La cobertura actual incluye:
	•	Funcionalidad de búsqueda de clima
	•	Manejo de errores
	•	Campo de entrada y botón de búsqueda
	•	Actualización de UI

⸻

Estructura del Proyecto

reactWeatherMapApp/
│
├─ src/
│  ├─ data/               # Repositorios y datasources
│  ├─ domain/             # Entidades y casos de uso
│  ├─ presentation/       # Screens y ViewModels
│  └─ di/                 # Inyección de dependencias
│
├─ __tests__/             # Pruebas unitarias
│
├─ App.js                 # Punto de entrada
├─ package.json
└─ jest.config.js


⸻

Notas
	•	La app sigue Clean Architecture con MVVM para separar UI, lógica de negocio y acceso a datos.
	•	Se utiliza fetch para consumir la API de OpenWeatherMap.
	•	La pantalla principal muestra los resultados y oculta los valores antiguos al ingresar un nuevo texto.
	•	Al final de la pantalla se muestra:

Dev. Paul Torres


⸻

Autor

Paul Torres
