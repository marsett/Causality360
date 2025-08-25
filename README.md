# Causality360 - Análisis Inteligente de Noticias

## 🚀 Descripción

Aplicación web desarrollada con Angular que proporciona análisis automatizado de noticias españolas mediante inteligencia artificial. Procesa diariamente 5 noticias seleccionadas, generando análisis de origen, impacto y predicciones fundamentadas.

🔗 **[Ver Proyecto en Vivo](https://ashy-bay-0e29e4a03.1.azurestaticapps.net)**

## 🛠️ Tecnologías Utilizadas

- **Framework:** Angular
- **Lenguajes:** TypeScript, SCSS, HTML5
- **Backend:** .NET API (ApiCausality360)
- **SSR:** Angular Universal con Express
- **CI/CD:** GitHub Actions

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

## 📱 Funcionalidades Principales

### 🏠 Análisis de Noticias
Procesamiento automático diario a las 12:00 AM con análisis IA que incluye origen, impacto y predicciones, además de categorización inteligente por temática.

### 🎠 Carruseles Interactivos
Workflow de 4 pasos explicativos con eventos similares históricos navegables y controles adaptativos según dispositivo.

### 📱 Panel Lateral Deslizable
Análisis completo del evento seleccionado con navegación entre eventos similares y cierre suave con animaciones.

### 🎨 Diseño Responsivo
Interfaz totalmente adaptativa que se optimiza automáticamente para desktop, tablet y mobile con controles inteligentes según el dispositivo.

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
├── ApiCausality360/        # Backend .NET
├── angular.json
├── package.json
└── README.md
```

## 🌐 API Backend

La aplicación consume una API .NET que proporciona endpoints para la gestión de eventos y análisis de noticias:

- **GET /api/events/recent** - Eventos del día
- **POST /api/events** - Crear evento
- **GET /api/events/{id}** - Detalle de evento

## 📈 Rendimiento y Optimización

- 📱 Totalmente responsivo y optimizado para todos los dispositivos
- ⚡ Server-Side Rendering para mejor SEO y carga inicial
- 🔄 Cache inteligente de respuestas API
- 🎨 Estados de carga y error manejados elegantemente

## 🔄 Actualizaciones Recientes

**v1.0.0** (2025) - Lanzamiento inicial
- Sistema de carruseles interactivos completo
- Panel lateral deslizable implementado
- Diseño responsivo optimizado
- Integración completa con API .NET backend
- Server-Side Rendering configurado
- Sistema de categorización visual por colores
- Estados de carga y error manejados
- Análisis inteligente de noticias con IA

---

## 📄 Licencia

Este proyecto está disponible para visualización y evaluación profesional. Ver el archivo [LICENSE](LICENSE) para más detalles sobre términos de uso y restricciones.