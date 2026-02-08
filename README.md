# Portfolio Julian F. Lancheros - Next.js

Portafolio profesional moderno desarrollado con Next.js 14, React, TypeScript y Tailwind CSS.

## 🚀 Características

- ✅ **Next.js 14** con App Router
- ✅ **TypeScript** para type-safety
- ✅ **Tailwind CSS** para estilos modernos y responsivos
- ✅ **Framer Motion** para animaciones fluidas
- ✅ **Tema claro/oscuro** con persistencia
- ✅ **Internacionalización** (Español/Inglés) con `next-intl`
- ✅ **SEO optimizado** con metadata
- ✅ **Componentes reutilizables**
- ✅ **Diseño responsive** mobile-first
- ✅ **Animaciones y transiciones** suaves
- ✅ **Performance optimizado**

## 📁 Estructura del Proyecto

```
julian-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   └── page.tsx            # Página home
│   ├── components/
│   │   ├── About.tsx           # Sección sobre mí
│   │   ├── Contact.tsx         # Formulario de contacto
│   │   ├── Footer.tsx          # Footer
│   │   ├── Hero.tsx            # Sección hero
│   │   ├── Interests.tsx       # Intereses
│   │   ├── Navbar.tsx          # Navegación
│   │   ├── Portfolio.tsx       # Proyectos
│   │   ├── Qualification.tsx   # Experiencia y educación
│   │   ├── Skills.tsx          # Habilidades
│   │   └── ThemeProvider.tsx   # Proveedor de tema
│   ├── data/
│   │   ├── content-es.ts       # Contenido en español
│   │   └── content-en.ts       # Contenido en inglés
│   └── styles/
│       └── globals.css         # Estilos globales
├── public/                     # Archivos estáticos
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🛠️ Instalación

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Pasos

1. **Abrir la carpeta del proyecto**

```bash
cd julian-portfolio
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
```

3. **Configurar imágenes**

Coloca tus imágenes en `public/`, incluyendo `me.jpg`, `favicon.jpg`, `apple-touch-icon.jpg` y las imágenes de proyectos en `public/portfolio/portfolio-*.jpg`.

4. **Ejecutar en desarrollo**

```bash
npm run dev
# o
yarn dev
```

Abre `http://localhost:3000` en tu navegador.

## 🧩 Personalización

### 1. Contenido

Edita los archivos de contenido en `src/data/`:
- `content-es.ts` - Contenido en español
- `content-en.ts` - Contenido en inglés

### 2. Colores

Modifica los colores en `tailwind.config.js`:

```js
colors: {
  primary: {
    // Tus colores primarios
  },
  accent: {
    // Tus colores de acento
  }
}
```

### 3. Fuentes

Cambia las fuentes en `src/app/layout.tsx`:

```typescript
const inter = Inter({ ... });
const spaceGrotesk = Space_Grotesk({ ... });
```

### 4. SEO

Actualiza los metadatos en `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Tu Nombre | Tu Título',
  description: 'Tu descripción',
  // ...
};
```

## 🎨 Componentes

- **Hero**: Sección principal con animaciones y texto dinámico
- **About**: Información personal con foto y detalles
- **Interests**: Grid de intereses con iconos animados
- **Skills**: Barras de progreso animadas por categorías
- **Qualification**: Timeline de experiencia profesional y educación
- **Portfolio**: Galería de proyectos con filtros
- **Contact**: Formulario de contacto y enlaces sociales

## 🌐 Internacionalización

El sitio soporta dos idiomas:
- Español (`es`) - Por defecto
- Inglés (`en`)

Para agregar más idiomas:
1. Crea un nuevo archivo en `src/data/content-{locale}.ts`
2. Actualiza `next.config.js` con el nuevo locale
3. Copia la estructura de contenido existente

## 🧱 Fondo Global

El proyecto incluye un fondo animado global para toda la app. Para detalles técnicos y decisiones de diseño, revisa `BACKGROUND_FIX.md`.

## 🚀 Deployment

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Importa el proyecto en Vercel
3. Configura variables de entorno si es necesario
4. Despliega

```bash
npm run build
```

### Otros proveedores

El proyecto puede desplegarse en cualquier servicio que soporte Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## 📊 Performance

El sitio está optimizado para:
- ⚡ Carga rápida con Next.js 14
- 🖼️ Imágenes optimizadas con `next/image`
- 🎨 CSS optimizado con Tailwind
- 📱 Responsive en todos los dispositivos
- ♿ Accesibilidad WCAG

## 📄 Licencia

MIT License - Puedes usar este código libremente.

## 👤 Autor

**Julian F. Lancheros**
- LinkedIn: `julianflancheros`
- GitHub: `julianflancheros`
- Instagram: `@julianflancheros`

## 🛠️ Scripts disponibles

```bash
npm run dev      # Desarrollo
npm run build    # Construcción para producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

## 🧭 Soporte

Si encuentras problemas o tienes preguntas:
1. Revisa la documentación de Next.js
2. Verifica que todas las dependencias estén instaladas
3. Asegúrate de usar Node.js 18+
4. Contacta al autor
