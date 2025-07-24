# React + TypeScript + Tailwind CSS Project

Un proyecto moderno construido con React, TypeScript y Tailwind CSS utilizando Vite como build tool.

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript** - Superset de JavaScript con tipado estático
- **Tailwind CSS** - Framework CSS utility-first
- **Vite** - Build tool extremadamente rápido
- **PostCSS** - Herramienta para transformar CSS con JavaScript

## 📦 Instalación

1. Clona el repositorio o navega al directorio del proyecto
2. Instala las dependencias:

```bash
npm install
```

## 🛠️ Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

## 🏗️ Build

Para crear una versión de producción:

```bash
npm run build
```

## 📁 Estructura del Proyecto

```
src/
├── App.tsx          # Componente principal
├── main.tsx         # Punto de entrada
├── index.css        # Estilos globales con Tailwind
└── assets/          # Recursos estáticos
```

## 🎨 Características

- ✅ **Hot Module Replacement (HMR)** - Recarga automática durante el desarrollo
- ✅ **TypeScript** - Tipado estático para mejor desarrollo
- ✅ **Tailwind CSS** - Clases utilitarias para diseño rápido
- ✅ **Responsive Design** - Diseño adaptable a diferentes dispositivos
- ✅ **Modern UI** - Interfaz moderna y atractiva

## 🔧 Configuración

### Tailwind CSS
El proyecto está configurado con Tailwind CSS. Los archivos de configuración son:
- `tailwind.config.js` - Configuración de Tailwind
- `postcss.config.js` - Configuración de PostCSS

### TypeScript
- `tsconfig.json` - Configuración principal de TypeScript
- `tsconfig.app.json` - Configuración específica para la aplicación
- `tsconfig.node.json` - Configuración para Node.js

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter

## 🎯 Próximos Pasos

1. Personaliza los colores y estilos en `tailwind.config.js`
2. Agrega más componentes en la carpeta `src/components/`
3. Configura rutas con React Router si es necesario
4. Integra un estado global con Zustand o Redux Toolkit

¡Disfruta desarrollando! 🚀
