# 🌐 Causality360 Frontend

Una aplicación web Angular moderna que proporciona análisis automatizado de noticias con inteligencia artificial en tiempo real.

## 📋 Tabla de Contenidos

- [🎯 Descripción del Proyecto](#-descripción-del-proyecto)
- [✨ Características Principales](#-características-principales)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [🏗️ Arquitectura del Frontend](#️-arquitectura-del-frontend)
- [📱 Diseño Responsivo](#-diseño-responsivo)
- [🎨 Sistema de Diseño](#-sistema-de-diseño)
- [⚙️ Instalación y Configuración](#️-instalación-y-configuración)
- [🚀 Scripts Disponibles](#-scripts-disponibles)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🔗 Integración con Backend](#-integración-con-backend)
- [📊 Componentes Principales](#-componentes-principales)
- [🎛️ Funcionalidades Interactivas](#️-funcionalidades-interactivas)
- [📐 Responsive Design](#-responsive-design)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)
- [🤝 Contribución](#-contribución)

## 🎯 Descripción del Proyecto

**Causality360 Frontend** es una Single Page Application (SPA) desarrollada en **Angular 19** que consume una API .NET para mostrar noticias españolas procesadas con inteligencia artificial. La aplicación proporciona análisis automatizado de eventos, detección de patrones históricos y predicciones fundamentadas.

### 🎪 Demo en Vivo
- **URL**: [Tu URL de producción aquí]
- **Actualización**: Las noticias se procesan automáticamente cada día a las 12:00 AM

## ✨ Características Principales

### 🔍 **Análisis Inteligente de Noticias**
- **5 noticias diarias** seleccionadas automáticamente de fuentes españolas verificadas
- **Análisis de origen** generado por IA Groq
- **Evaluación de impacto** con predicciones fundamentadas
- **Eventos similares históricos** con contexto detallado

### 🎨 **Experiencia de Usuario Premium**
- **Diseño responsive** optimizado para móvil, tablet y desktop
- **Interfaz intuitiva** con navegación fluida
- **Panel lateral deslizable** para análisis completo de eventos
- **Carruseles interactivos** con controles adaptativos según el dispositivo
- **Estados de carga animados** con feedback visual

### 📊 **Categorización Inteligente**
- **5 categorías automáticas**: Política, Economía, Tecnología, Social, Internacional
- **Badges visuales** con código de colores distintivos
- **Distribución natural** basada en el contenido real del día

### 🔄 **Actualización en Tiempo Real**
- **Refresh automático** de contenido
- **Cache inteligente** para optimizar rendimiento
- **Estados de error** manejados elegantemente

## 🛠️ Stack Tecnológico

### **Core Framework**
- **Angular 19.2.14** - Framework principal
- **TypeScript 5.7.2** - Lenguaje de programación
- **SCSS** - Preprocesador CSS
- **RxJS 7.8.0** - Programación reactiva

### **Características Avanzadas**
- **Angular SSR** - Server-Side Rendering para SEO
- **Express** - Servidor para SSR
- **Angular Animations** - Animaciones fluidas
- **Standalone Components** - Arquitectura moderna

### **Herramientas de Desarrollo**
- **Angular CLI 19.1.6** - Herramientas de desarrollo
- **Karma + Jasmine** - Testing framework
- **TypeScript Strict Mode** - Tipado estricto

## 🏗️ Arquitectura del Frontend

### **Patrón de Arquitectura**
```
src/
├── app/
│   ├── components/          # Componentes de UI
│   │   └── inicio/          # Componente principal
│   ├── services/            # Servicios de datos
│   ├── interfaces/          # Tipos TypeScript
│   └── modules/             # Módulos Angular
├── assets/                  # Recursos estáticos
└── styles.scss             # Estilos globales
```

### **Flujo de Datos**
1. **EventService** → Consume API REST del backend
2. **InicioComponent** → Procesa y presenta los datos
3. **Reactive Forms** → Manejo de estado local
4. **Observable Patterns** → Gestión de datos asíncronos

## 📱 Diseño Responsivo

### **Breakpoints Principales**
- **Desktop**: `>768px` - Layout completo con navegación lateral
- **Tablet**: `≤768px` - Layout adaptado con imagen arriba en featured story
- **Mobile**: `≤480px` - Controles de carrusel reorganizados debajo

### **Adaptaciones por Dispositivo**

#### 🖥️ **Desktop (>768px)**
- Grid de 2 columnas para featured story (contenido + imagen)
- Controles de carrusel laterales
- Navegación completa visible

#### 📱 **Tablet (≤768px)**
- Featured story: imagen arriba, contenido abajo
- Espaciado uniforme entre secciones
- Navegación colapsada

#### 📱 **Mobile (≤480px)**
- Controles de carrusel debajo del contenido
- Cards más anchas en workflows
- Interfaz optimizada para touch

## 🎨 Sistema de Diseño

### **Paleta de Colores**
```scss
// Colores principales
$primary-red: #dc2626;          // Rojo principal
$primary-dark: #991b1b;         // Rojo oscuro
$primary-light: #fca5a5;        // Rojo claro

// Categorías
$politics: #dc2626;             // Política - Rojo
$economy: #2563eb;              // Economía - Azul
$technology: #8b5cf6;           // Tecnología - Púrpura
$social: #10b981;               // Social - Verde
$international: #f59e0b;        // Internacional - Naranja

// Neutrales
$text-primary: #1f2937;         // Texto principal
$text-secondary: #6b7280;       // Texto secundario
$background: #f8fafc;           // Fondo principal
```

### **Tipografía**
```scss
// Fuente principal
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

// Escalas
$text-xs: 0.75rem;      // 12px
$text-sm: 0.875rem;     // 14px
$text-base: 1rem;       // 16px
$text-lg: 1.125rem;     // 18px
$text-xl: 1.25rem;      // 20px
$text-2xl: 1.5rem;      // 24px
$text-3xl: 1.875rem;    // 30px
```

### **Componentes de UI**

#### **Cards de Noticias**
- **Sombras suaves** con elevación en hover
- **Bordes redondeados** (20px) para modernidad
- **Transiciones fluidas** (0.3s cubic-bezier)

#### **Botones Interactivos**
- **Gradientes** para acciones principales
- **Estados hover** con escalado (1.1x)
- **Disabled states** manejados elegantemente

#### **Carruseles**
- **Controles circulares** con gradientes
- **Indicadores visuales** responsivos
- **Transiciones suaves** entre elementos

## ⚙️ Instalación y Configuración

### **Prerrequisitos**
- **Node.js** 18+ 
- **npm** 9+
- **Angular CLI** 19+

### **Instalación**
```bash
# Clonar el repositorio
git clone https://github.com/marsett/Causality360.git
cd Causality360

# Instalar dependencias
npm install

# Configurar variables de entorno (opcional)
cp src/environments/environment.example.ts src/environments/environment.ts
```

### **Configuración de API**
```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'https://localhost:7263/api',  // URL del backend
  apiTimeout: 30000
};
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo local
npm run start                    # Servidor dev en http://localhost:4200
npm run watch                    # Build con watch mode

# Producción
npm run build                    # Build optimizado para producción
npm run serve:ssr:Causality360  # Servidor SSR

# Testing
npm run test                     # Unit tests con Karma
npm run test:coverage           # Tests con reporte de cobertura

# Utilidades
ng generate component [name]    # Generar nuevo componente
ng generate service [name]      # Generar nuevo servicio
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   └── inicio/
│   │       ├── inicio.component.ts        # Lógica del componente principal
│   │       ├── inicio.component.html      # Template con estructura completa
│   │       ├── inicio.component.scss      # Estilos responsivos (2000+ líneas)
│   │       └── inicio.component.spec.ts   # Tests unitarios
│   │
│   ├── services/
│   │   └── events.service.ts              # Servicio de consumo de API
│   │
│   ├── interfaces/
│   │   └── event.interface.ts             # Tipado TypeScript
│   │
│   ├── app-routing.module.ts              # Configuración de rutas
│   ├── app.component.*                    # Componente raíz
│   └── app.module.ts                      # Módulo principal
│
├── assets/
│   └── images/
│       └── favicon-algiz.svg              # Favicon personalizado
│
├── environments/                          # Variables de entorno
├── index.html                            # HTML principal
├── main.ts                               # Bootstrap de la aplicación
├── main.server.ts                        # Entry point para SSR
└── styles.scss                           # Estilos globales
```

## 🔗 Integración con Backend

### **Endpoints Consumidos**
```typescript
// Servicio de eventos
GET /api/events/recent                    // Obtener eventos del día
POST /api/events                          // Crear evento (admin)
GET /api/events/{id}                      // Detalle de evento
```

### **Modelos de Datos**
```typescript
interface EventDto {
  id: string;
  titulo: string;
  descripcion?: string;
  fecha: string;
  origen?: string;                        // Análisis IA
  impacto?: string;                      // Evaluación IA
  prediccionIA?: string;                 // Predicción IA
  fuentes?: string;
  imageUrl?: string;
  sourceName?: string;
  categories: string[];
  similarEvents: SimilarEventDto[];
  createdAt: string;
}
```

### **Manejo de Errores**
```typescript
// Estados manejados
- Loading: Indicador visual con animación
- Error: Mensaje amigable con opción de reintento
- Empty: Estado vacío con mensaje informativo
- Success: Presentación de datos
```

## 📊 Componentes Principales

### **🏠 InicioComponent**
**Responsabilidad**: Componente principal que orquesta toda la experiencia de usuario

**Características:**
- **Gestión de estado** completa de la aplicación
- **Carrusel de workflow** con 4 pasos explicativos
- **Panel lateral deslizable** para análisis detallado
- **Sistema de carruseles** para eventos similares
- **Responsive design** con 3 breakpoints principales

**Métodos clave:**
```typescript
loadTodayEvents()              // Cargar eventos del día
selectEvent(event)             // Abrir panel de análisis
trackByEventId(index, event)   // Optimización de rendimiento
onImageError(event)            // Fallback para imágenes
getTimeAgo(date)              // Formateo de fechas relativas
```

### **🔧 EventsService**
**Responsabilidad**: Comunicación con la API backend

**Características:**
- **HTTP interceptors** para manejo centralizado de errores
- **Retry logic** para peticiones fallidas
- **Caching** de respuestas para mejor rendimiento
- **Type safety** completo con TypeScript

**Métodos principales:**
```typescript
getRecentEvents(): Observable<EventDto[]>
createEvent(event: CreateEventDto): Observable<EventDto>
private handleError<T>(operation: string, result?: T)
```

## 🎛️ Funcionalidades Interactivas

### **🎠 Sistema de Carruseles**

#### **Workflow Carousel**
- **4 pasos explicativos** del procesamiento de noticias
- **Navegación automática** con indicadores visuales
- **Controles adaptativos**: laterales en desktop, debajo en móvil
- **Transiciones suaves** con transform CSS

#### **Similar Events Carousel**
- **Navegación entre eventos históricos** relacionados
- **Controles responsivos** según el dispositivo
- **Indicadores de posición** interactivos

### **📱 Panel Lateral Deslizable**
```typescript
// Estados del panel
selectedEvent: EventDto | null = null;
showSimilarEvents: boolean = false;
currentSimilarIndex: number = 0;

// Métodos de control
selectEvent(event: EventDto): void
closeEventDetails(): void
toggleSimilarEvents(): void
```

### **🔄 Gestión de Estados**
```typescript
// Estados principales
loading: boolean = false;
error: string | null = null;
events: EventDto[] = [];
hasEvents: boolean = false;

// Estados de carruseles
currentWorkflowStep: number = 0;
currentSimilarIndex: number = 0;
```

## 📐 Responsive Design

### **Metodología Mobile-First**
```scss
// Base: Mobile styles
.component {
  // Mobile styles por defecto
}

// Tablet
@media (max-width: 768px) {
  .component {
    // Adaptaciones para tablet
  }
}

// Mobile pequeño
@media (max-width: 480px) {
  .component {
    // Adaptaciones para móvil
  }
}
```

### **Optimizaciones por Dispositivo**

#### **Mobile (≤480px)**
- **Touch targets** aumentados (44px mínimo)
- **Carruseles** con controles debajo
- **Cards más anchas** para mejor legibilidad
- **Navegación simplificada**

#### **Tablet (≤768px)**
- **Featured story** con imagen arriba
- **Grid adaptativo** a 1 columna
- **Espaciado optimizado** entre secciones

#### **Desktop (>768px)**
- **Layout completo** con navegación lateral
- **Grid de 2 columnas** optimizado
- **Hover effects** mejorados

## 🧪 Testing

### **Configuración de Tests**
```typescript
// karma.conf.js configurado para:
- Chrome Headless
- Code coverage reports
- Spec reporter
- Angular testing utilities
```

### **Estrategia de Testing**
```bash
# Unit Tests
ng test                          # Tests en watch mode
ng test --watch=false           # Single run
ng test --code-coverage         # Con reporte de cobertura

# E2E Tests (futuro)
ng e2e                          # Tests end-to-end
```

### **Estructura de Tests**
```typescript
describe('InicioComponent', () => {
  beforeEach(() => {
    // Setup del componente
  });

  it('should load events on init', () => {
    // Test de carga de eventos
  });

  it('should handle errors gracefully', () => {
    // Test de manejo de errores
  });
});
```

## 🚀 Deployment

### **Build de Producción**
```bash
# Build optimizado
ng build --configuration production

# Con SSR
ng build --configuration production --ssr

# Análisis de bundle
ng build --stats-json
npx webpack-bundle-analyzer dist/causality360/stats.json
```

### **Optimizaciones Aplicadas**
- **Tree shaking** automático
- **Code splitting** por rutas
- **Lazy loading** de módulos
- **Image optimization** automática
- **CSS minification**
- **Bundle compression**

### **Opciones de Deployment**

#### **Azure Static Web Apps** (Recomendado)
```bash
# Configuración automática con GitHub Actions
# Build: ng build --configuration production
# Output: dist/causality360
```

#### **Netlify**
```bash
# Build command: ng build --configuration production
# Publish directory: dist/causality360
```

#### **Vercel**
```bash
# Framework preset: Angular
# Build command: ng build --configuration production
```

### **Variables de Entorno de Producción**
```typescript
// environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.causality360.com',
  apiTimeout: 30000,
  enableAnalytics: true
};
```

## 🔧 Configuración Avanzada

### **Angular.json Highlights**
```json
{
  "outputMode": "server",           // SSR habilitado
  "inlineStyleLanguage": "scss",    // SCSS por defecto
  "budgets": [                      // Límites de bundle size
    {
      "type": "initial",
      "maximumWarning": "2mb",
      "maximumError": "5mb"
    }
  ]
}
```

### **TypeScript Configuration**
```json
{
  "compilerOptions": {
    "strict": true,                 // Tipado estricto
    "noImplicitReturns": true,     // Return explícitos
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

## 🤝 Contribución

### **Convenciones de Código**
- **Angular Style Guide** oficial
- **Prettier** para formateo automático
- **ESLint** para calidad de código
- **Conventional Commits** para mensajes

### **Proceso de Desarrollo**
1. **Fork** del repositorio
2. **Feature branch**: `git checkout -b feature/nueva-funcionalidad`
3. **Commits semánticos**: `feat: add event filtering`
4. **Pull Request** con descripción detallada

### **Scripts de Calidad**
```bash
npm run lint                     # ESLint
npm run format                   # Prettier
npm run test:coverage           # Coverage report
```

---

## 📈 Métricas y Performance

### **Lighthouse Score Objetivo**
- **Performance**: >90
- **Accessibility**: >95
- **Best Practices**: >90
- **SEO**: >90

### **Bundle Size**
- **Initial bundle**: <2MB
- **Lazy chunks**: <500KB cada uno
- **Vendor bundle**: <1MB

---

## 📝 Changelog

### **v1.0.0** (Actual)
- ✅ Componente principal con carruseles interactivos
- ✅ Panel lateral deslizable para análisis detallado  
- ✅ Diseño responsivo completo (3 breakpoints)
- ✅ Integración completa con API backend
- ✅ Sistema de categorización visual
- ✅ Estados de carga y error manejados
- ✅ SSR configurado y funcional

---

## 🆘 Soporte y Documentación

### **Recursos Adicionales**
- **Angular Docs**: [angular.io](https://angular.io)
- **TypeScript Handbook**: [typescriptlang.org](https://www.typescriptlang.org)
- **SCSS Guide**: [sass-lang.com](https://sass-lang.com)

### **Contacto**
- **Desarrollador**: [Tu nombre]
- **Email**: [tu-email@ejemplo.com]
- **GitHub**: [tu-usuario]

---

**🚀 Causality360 Frontend - Transformando noticias en insights inteligentes**
