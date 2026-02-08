import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ThemeProvider from '@/components/ThemeProvider';
import ClientLayout from '@/components/ClientLayout';
import GlobalBackground from '@/components/GlobalBackground';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#bfc5aa' },
    { media: '(prefers-color-scheme: dark)', color: '#040404' },
  ],
};

export const metadata: Metadata = {
  title: 'Julian F. Lancheros | Full-Stack Developer & GIS Specialist',
  description: 'Portafolio de Julian F. Lancheros: desarrollo web, SIG y análisis de datos en Bogotá, Colombia.',
  keywords: [
    'julian f. lancheros',
    'fullstack',
    'developer',
    'GIS',
    'web development',
    'Next.js',
    'React',
    'JavaScript',
    'portfolio'
  ],
  authors: [{ name: 'Julian F. Lancheros' }],
  creator: 'Julian F. Lancheros',
  metadataBase: new URL('https://julianflancheros.js.org'),
  alternates: {
    canonical: '/',
    languages: {
      'es-CO': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://julianflancheros.js.org',
    siteName: 'Julian F. Lancheros, Fullstack Developer',
    title: 'Julian F. Lancheros | Full-Stack Developer & GIS Specialist',
    description: 'Portafolio de Julian F. Lancheros: desarrollo web, SIG y análisis de datos en Bogotá, Colombia.',
    images: [
      {
        url: '/me.jpg',
        width: 800,
        height: 800,
        alt: 'Julian F. Lancheros',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julian F. Lancheros | Full-Stack Developer & GIS Specialist',
    description: 'Portafolio de Julian F. Lancheros: desarrollo web, SIG y análisis de datos en Bogotá, Colombia.',
    images: ['/me.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: 'es' | 'en' };
}) {
  const locale = params?.locale === 'en' ? 'en' : 'es';

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.jpg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <GlobalBackground />
          <ClientLayout>
            <div className="flex flex-col min-h-screen relative z-10">
              <Navbar locale={locale} />
              <main className="flex-grow">{children}</main>
              <Footer locale={locale} />
            </div>
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

export const GreenAtmosphere = () => (
  <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
    {/* Luz superior central (Hero) */}
    <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#18F07D]/20 rounded-full blur-[150px]" />
    
    {/* Luz inferior derecha (Contacto) */}
    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#18F07D]/10 rounded-full blur-[120px]" />
  </div>
);

// components/TopographyBackground.tsx
export const TopographyBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-black overflow-hidden">
      {/* Opacidad muy baja (0.05) para que sea sutil y elegante */}
      <svg
        className="absolute w-full h-full opacity-[0.08]" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="topo-pattern"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* Simulación de curvas de nivel (paths abstractos) */}
          <path
            d="M0 100 C 20 0 50 0 100 100 Z"
            fill="none"
            stroke="#18F07D"
            strokeWidth="0.5"
          />
          <path
             d="M0 50 Q 50 100 100 50" 
             fill="none" 
             stroke="#18F07D" 
             strokeWidth="0.5" 
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#topo-pattern)" />
      </svg>
      
      {/* Mantenemos tu "Glow" verde para que no se pierda el efecto neón */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#18F07D]/10 rounded-full blur-[120px]" />
    </div>
  );
};
