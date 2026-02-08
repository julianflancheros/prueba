# 🚀 Inicio Rápido

## Pasos para empezar en 5 minutos

### 1. Instalar Node.js
Si no lo tienes, descarga desde `https://nodejs.org/` (versión 18+).

### 2. Abrir terminal en el proyecto
```bash
cd julian-portfolio
```

### 3. Instalar dependencias
```bash
npm install
```

### 4. Agregar tus imágenes
Copia tus imágenes a `public/`, incluyendo `me.jpg`, `favicon.jpg`, `apple-touch-icon.jpg` y la carpeta `portfolio/` con imágenes de proyectos.

### 5. Ejecutar en desarrollo
```bash
npm run dev
```

Abre `http://localhost:3000` en tu navegador.

### 6. Personalizar contenido
Edita estos archivos:
- `src/data/content-es.ts` - Contenido en español
- `src/data/content-en.ts` - Contenido en inglés

### 7. Construir para producción
```bash
npm run build
npm run start
```

## ✅ Verificación Rápida

Deberías ver:
- ✅ Página carga sin errores
- ✅ Navegación funciona
- ✅ Tema oscuro/claro cambia
- ✅ Idioma cambia entre ES/EN
- ✅ Animaciones se ven suaves
- ✅ Responsive en móvil

## 🎨 Personalización Básica

### Cambiar colores
Edita `tailwind.config.js` (sección de `colors`).

### Cambiar foto
Reemplaza `public/me.jpg`.

### Cambiar textos
Edita archivos en `src/data/`.

### Agregar proyecto
Agrega un objeto en `content.portfolio.projects[]`.

## 🚀 Deployment

### Opción 1: Vercel (Recomendado)
1. Sube código a GitHub
2. Importa en Vercel
3. Listo

### Opción 2: Netlify
1. Conecta con GitHub
2. Build command: `npm run build`
3. Publish directory: `.next`

## 📚 Documentación Completa

- Ver `README.md` para documentación completa
- Ver `MIGRATION.md` para guía de migración

## ❓ Problemas Comunes

**Error al instalar:**
```bash
npm cache clean --force
npm install
```

**Puerto 3000 ocupado:**
```bash
npm run dev -- -p 3001
```

**Build falla:**
```bash
rm -rf .next
npm run build
```

## 🎯 Siguiente Paso
Lee `MIGRATION.md` para migrar completamente tu sitio.
