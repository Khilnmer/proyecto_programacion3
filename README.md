# Mi Proyecto — Ionic 8 Monolith

Aplicación móvil con estética **Monolith** basada en Ionic 8 y Angular con componentes standalone.

## Instalación

```bash
npm install
ionic serve
```

## Estructura del Proyecto

```
src/
├── app/
│   ├── contacto/          # Formulario de contacto con EmailJS
│   ├── home/              # Página de inicio con panel de control
│   ├── personal/          # Información personal en formato grid
│   ├── services/
│   │   └── theme.service.ts  # Servicio de modo oscuro con Signals
│   ├── app.component.ts/html/scss  # Componente principal con menú push
│   └── app.routes.ts      # Configuración de rutas lazy-loaded
├── theme/variables.scss   # Paleta de colores Monolith
├── global.scss            # Estilos globales
├── main.ts                # Punto de entrada
└── index.html             # Documento base
```

## Navegación

Menú lateral tipo `push` con 3 rutas lazy-loaded:

| Ruta | Página | Icono |
|------|--------|-------|
| `/home` | Inicio | home-outline |
| `/personal` | Información Personal | person-outline |
| `/contact` | Contacto | mail-outline |

En desktop los enlaces se muestran en la barra superior. En móvil se acceden mediante el botón de menú hamburguesa.

## EmailJS

| Parámetro | Valor |
|-----------|-------|
| Public Key | `YOUR_PUBLIC_KEY` |
| Service ID | `YOUR_SERVICE_ID` |
| Template ID | `YOUR_TEMPLATE_ID` |

## Paleta de Colores Monolith

| Variable | Hex | Descripción |
|----------|-----|-------------|
| `--ion-color-primary` | `#6366F1` | Indigo — color de acento principal |
| `--ion-background-color` | `#0C0F15` | Fondo oscuro slate |
| `--ion-item-background` | `#1A1D24` | Fondo de tarjetas y elementos |
| `--ion-text-color` | `#E2E8F0` | Color de texto principal |
| `--ion-border-color` | `#2A2D35` | Color de bordes |

## Modo Oscuro

Implementado con Angular Signals para el estado, `localStorage` para persistencia y `prefers-color-scheme` para la detección inicial. El toggle está disponible en el menú lateral y en la barra superior.

## Stack Tecnológico

Ionic 8, Angular 20, TypeScript 5.9, EmailJS, ReactiveForms, Angular Signals.