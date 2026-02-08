# Guía de Migración - HTML a Next.js

Esta guía te ayuda a migrar tu portafolio HTML al proyecto Next.js.

## 📋 Checklist de Migración

### 1. Preparación
- [ ] Hacer backup del sitio actual
- [ ] Instalar Node.js 18+
- [ ] Instalar dependencias del proyecto

### 2. Contenido

#### Textos e Información
- [ ] Revisar y actualizar textos en `src/data/content-es.ts`
- [ ] Revisar y actualizar textos en `src/data/content-en.ts`
- [ ] Verificar que toda la información personal esté actualizada
- [ ] Actualizar enlaces de redes sociales

#### Proyectos
- [ ] Agregar o actualizar proyectos en `content.portfolio.projects`
- [ ] Verificar URLs de proyectos
- [ ] Actualizar fechas de proyectos

#### Experiencia y Educación
- [ ] Revisar experiencia profesional en `content.qualification.experiences`
- [ ] Revisar educación en `content.qualification.educations`
- [ ] Actualizar fechas y descripciones

### 3. Imágenes

#### Imágenes Requeridas
```
public/
├── me.jpg                    # Tu foto principal (800x800px recomendado)
├── favicon.jpg               # Favicon (32x32px)
├── apple-touch-icon.jpg      # Icono Apple (180x180px)
└── portfolio/
    ├── portfolio-1.jpg       # Proyecto ITAWA
    ├── portfolio-2.jpg       # Cultivo de Cilantro
    ├── portfolio-3.jpg       # Tejidos C&S
    ├── portfolio-5.jpg       # Pacman Game
    ├── portfolio-7.jpg       # TPi
    ├── portfolio-13.jpg      # Deleite
    ├── portfolio-14.jpg      # Innovate
    ├── portfolio-15.jpg      # Cátedra JEG
    ├── portfolio-16.jpg      # IEEE
    ├── portfolio-17.jpg      # Dynamic Maps
    ├── portfolio-18.jpg      # Teatro Tierra
    └── portfolio-19.jpg      # Amaderarte
```

#### Optimización de Imágenes

- TinyPNG - Comprimir imágenes
- Squoosh - Convertir a WebP
- ImageOptim - Optimización general

Tamaños recomendados:
- Foto personal: 800x800px, WebP, <200KB
- Proyectos: 1200x800px, WebP, <300KB cada una
- Favicon: 32x32px, PNG o ICO

### 4. Configuración SEO

Actualiza en `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Tu Título Completo',
  description: 'Tu descripción optimizada para SEO',
  keywords: ['tus', 'palabras', 'clave'],
  // ...
};
```

### 5. Personalización de Diseño

#### Colores
Edita `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#22c55e',
    600: '#16a34a',
  },
  accent: {
    500: '#f97316',
    600: '#ea580c',
  }
}
```

#### Fuentes
Si quieres cambiar las fuentes, edita `src/app/layout.tsx`:

```typescript
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});
```

### 6. Funcionalidades del Sitio Original

| Funcionalidad | Estado | Implementación |
| --- | --- | --- |
| Navegación fija | ✅ Implementado | Navbar.tsx |
| Tema claro/oscuro | ✅ Implementado | ThemeProvider.tsx |
| Cambio de idioma | ✅ Implementado | Navbar.tsx + data files |
| Animaciones | ✅ Mejorado | Framer Motion |
| Formulario contacto | ✅ Implementado | Contact.tsx |
| Galería proyectos | ✅ Mejorado | Portfolio.tsx con filtros |
| Redes sociales | ✅ Implementado | Hero.tsx + Contact.tsx |
| SEO | ✅ Mejorado | layout.tsx metadata |
| Responsive | ✅ Mejorado | Tailwind CSS |

### 7. Migración de Assets

#### Desde el HTML original
1. Copia todas las imágenes de `assets/img/` a `public/`
2. Actualiza las rutas en los archivos de contenido
3. Verifica que todas las imágenes carguen correctamente

#### Estructura de carpetas
```
public/
├── me.jpg
├── favicon.jpg
├── apple-touch-icon.jpg
├── portfolio/
└── testimonials/             # Si usas testimonios
```

### 8. Testing

#### Checklist de Pruebas
- [ ] Navegación: Todos los enlaces funcionan
- [ ] Responsive: Se ve bien en móvil, tablet y desktop
- [ ] Imágenes: Todas las imágenes cargan
- [ ] Animaciones: Las animaciones son suaves
- [ ] Tema: El cambio de tema funciona
- [ ] Idioma: El cambio de idioma funciona
- [ ] Formulario: El formulario se envía (configurar backend si es necesario)
- [ ] SEO: Meta tags presentes
- [ ] Performance: Lighthouse score >90

#### Dispositivos a probar
- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Tablet (iPad, Android)
- [ ] Móvil (iPhone, Android)

### 9. Deployment

#### Preparación
1. Crear repositorio en GitHub
2. Subir código
3. Conectar con Vercel

#### Pasos en Vercel
```bash
npm i -g vercel
vercel
vercel --prod
```

#### Configuración de Dominio
1. En Vercel Dashboard > Settings > Domains
2. Agregar tu dominio
3. Configurar DNS según instrucciones

### 10. Configuración del Formulario de Contacto

El formulario actual es de demostración. Para hacerlo funcional:

#### Opción 1: Formspree (Gratis)
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formState)
  });

  if (response.ok) {
    alert(content.contact.form.success);
    setFormState({ name: '', email: '', subject: '', message: '' });
  }
};
```

#### Opción 2: API Route de Next.js
Crear `src/app/api/contact/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ success: true });
}
```

#### Opción 3: Google Apps Script
Mantener el mismo endpoint que usabas antes.

### 11. Optimizaciones Finales

#### Performance
- [ ] Comprimir imágenes
- [ ] Habilitar caché en Vercel
- [ ] Verificar bundle size

#### SEO
- [ ] Crear `sitemap.xml`
- [ ] Crear `robots.txt`
- [ ] Configurar Google Analytics
- [ ] Configurar Google Search Console

#### Accesibilidad
- [ ] Verificar contraste de colores
- [ ] Agregar alt text a todas las imágenes
- [ ] Probar navegación con teclado

### 12. Post-Deployment

- [ ] Verificar que el sitio carga correctamente
- [ ] Probar todas las funcionalidades
- [ ] Verificar en diferentes navegadores
- [ ] Compartir en redes sociales
- [ ] Actualizar LinkedIn con nuevo portfolio

## 🚨 Problemas Comunes

### Imágenes no cargan
- Verifica que estén en `public/`
- Usa rutas absolutas: `/imagen.jpg`
- Revisa nombres de archivo (case-sensitive)

### Tema oscuro no funciona
- Verifica que `ThemeProvider` esté en layout
- Limpia localStorage
- Recarga página

### Animaciones lentas
- Reduce cantidad de animaciones
- Usa `will-change` en CSS
- Optimiza imágenes

### Build falla
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📞 Necesitas Ayuda

1. Revisa la documentación de Next.js
2. Verifica los logs de error
3. Busca en Stack Overflow
4. Contacta al desarrollador

---

¡Éxito con tu migración! 🚀
