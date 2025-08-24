# Causality360 - Análisis Inteligente de Noticias

## 📄 Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🚀 Descripción
Aplicación web desarrollada con Angular que proporciona análisis automatizado de noticias españolas mediante inteligencia artificial. Procesa diariamente 5 noticias seleccionadas, generando análisis de origen, impacto y predicciones fundamentadas.

## 🛠️ Tecnologías Utilizadas
- **Framework:** Angular 19.2.14
- **Lenguajes:** TypeScript 5.7.2, SCSS, HTML5
- **Backend:** .NET API (ApiCausality360)
- **SSR:** Angular Universal con Express
- **CI/CD:** GitHub Actions
- **Testing:** Karma + Jasmine

## ✨ Características
- ✅ **5 noticias diarias** procesadas automáticamente
- ✅ **Análisis IA** generado por Groq con origen, impacto y predicciones
- ✅ **Eventos similares históricos** para contexto adicional
- ✅ **Diseño completamente responsivo** (Desktop, Tablet, Mobile)
- ✅ **Panel lateral deslizable** para análisis detallado
- ✅ **Carruseles interactivos** con controles adaptativos
- ✅ **Categorización automática** (Política, Economía, Tecnología, Social, Internacional)
- ✅ **Estados de carga y error** manejados elegantemente
- ✅ **Workflow explicativo** del procesamiento de noticias
- ✅ **Server-Side Rendering** para mejor SEO

## 🏗️ Estructura del Proyecto
```
Causality360/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── inicio/
│   │   │       ├── inicio.component.ts
│   │   │       ├── inicio.component.html
│   │   │       ├── inicio.component.scss
│   │   │       └── inicio.component.spec.ts
│   │   ├── services/
│   │   │   └── events.service.ts
│   │   ├── interfaces/
│   │   │   └── event.interface.ts
│   │   ├── app.component.*
│   │   └── app.module.*
│   ├── assets/
│   └── index.html
├── angular.json
├── package.json
└── README.md
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (v18 o superior)
- npm (v9 o superior)
- Angular CLI 19+

### Pasos para ejecutar localmente

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/marsett/Causality360.git
   cd Causality360
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   ng serve
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4200
   ```

## 📱 Funcionalidades Principales

### 🏠 Análisis de Noticias
- Procesamiento automático diario a las 12:00 AM
- Análisis IA con origen, impacto y predicciones
- Categorización inteligente por temática

### 🎠 Carruseles Interactivos
- Workflow de 4 pasos explicativos
- Eventos similares históricos navegables
- Controles adaptativos según dispositivo

### 📱 Panel Lateral Deslizable
- Análisis completo del evento seleccionado
- Navegación entre eventos similares
- Cierre suave con animaciones

### 🎨 Diseño Responsivo
- **Desktop (>768px):** Layout completo con controles laterales
- **Tablet (≤768px):** Imagen arriba en featured story
- **Mobile (≤480px):** Controles de carrusel debajo del contenido

## 🔧 Scripts Disponibles
```bash
# Desarrollo
npm start

# Build para producción
npm run build

# Server-Side Rendering
npm run serve:ssr:Causality360

# Ejecutar tests
npm test

# Tests con coverage
npm run test:coverage
```

## 🌐 API Backend
La aplicación consume una API .NET que proporciona:
- **GET /api/events/recent** - Eventos del día
- **POST /api/events** - Crear evento (admin)
- **GET /api/events/{id}** - Detalle de evento

## 📈 Rendimiento
- 📱 Totalmente responsivo
- 🎨 Optimizado para todos los dispositivos
- ⚡ SSR para mejor SEO y carga inicial
- 🔄 Cache inteligente de respuestas API

## 🎯 Estados Responsivos
- **≤480px:** Controles de carrusel debajo, touch optimizado
- **≤768px:** Featured story con imagen arriba
- **>768px:** Layout completo desktop con navegación lateral

## 🔄 Actualizaciones Recientes
- **v1.0.0** (2025) - Lanzamiento inicial
  - Sistema de carruseles interactivos completo
  - Panel lateral deslizable implementado
  - Diseño responsivo optimizado para 3 breakpoints
  - Integración completa con API .NET backend
  - Server-Side Rendering configurado
  - Sistema de categorización visual por colores
  - Estados de carga y error manejados
  - Análisis inteligente de noticias con IA

---
