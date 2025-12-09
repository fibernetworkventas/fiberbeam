# FiberBeam Dashboard

Aplicación de React Native con Expo que incluye un dashboard completo con estadísticas, gráficos y navegación.

## Características

- **Dashboard Principal**: Tarjetas de estadísticas con indicadores de tendencia
- **Analytics**: Gráficos de línea, barra y pastel para visualización de datos
- **Configuración**: Pantalla de ajustes con perfil de usuario y preferencias
- **Navegación**: Navegación por tabs con iconos
- **Pull to Refresh**: Actualización de datos con gesto de arrastre

## Requisitos

- Node.js 18+
- npm o yarn
- Expo CLI
- Expo Go app (para dispositivos móviles)

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm start
```

## Ejecutar en dispositivos

```bash
# Android
npm run android

# iOS
npm run ios

# Web
npm run web
```

## Estructura del Proyecto

```
fiberbeam/
├── App.js                    # Punto de entrada
├── app.json                  # Configuración de Expo
├── package.json              # Dependencias
├── src/
│   ├── components/
│   │   ├── StatCard.js       # Tarjeta de estadísticas
│   │   ├── ChartCard.js      # Tarjeta de gráficos
│   │   └── ActivityItem.js   # Item de actividad
│   └── screens/
│       ├── DashboardScreen.js  # Pantalla principal
│       ├── AnalyticsScreen.js  # Pantalla de analytics
│       └── SettingsScreen.js   # Pantalla de ajustes
└── assets/                   # Imágenes y recursos
```

## Tecnologías

- React Native
- Expo
- React Navigation
- React Native Chart Kit
- Expo Vector Icons

## Licencia

MIT
