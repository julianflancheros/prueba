// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useTheme } from './ThemeProvider';
// import { FiSun, FiMoon, FiMenu, FiX, FiGlobe } from 'react-icons/fi';
// import { content as contentEs } from '@/data/content-es';
// import { content as contentEn } from '@/data/content-en';
// import { motion, AnimatePresence } from 'framer-motion';
// import { AnimatedLogo } from "@/components/AnimatedLogo";
// import { throttle } from '@/utils/throttle';

// interface NavbarProps {
//   locale: string;
// }

// export default function Navbar({ locale }: NavbarProps) {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [logoCycle, setLogoCycle] = useState(0);
//   const { theme, toggleTheme } = useTheme();
  
//   const content = locale === 'es' ? contentEs : contentEn;

//   // Handle scroll for navbar background
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     const throttledScroll = throttle(handleScroll, 100);

//     window.addEventListener('scroll', throttledScroll);
//     return () => window.removeEventListener('scroll', throttledScroll);
//   }, []);

//   // Use IntersectionObserver for active section detection
//   useEffect(() => {
//     const sections = ['home', 'about', 'qualification', 'portfolio', 'contact'];
//     const observerOptions = {
//       root: null,
//       rootMargin: '-100px 0px -66%',
//       threshold: 0
//     };

//     const observerCallback = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, observerOptions);

//     sections.forEach((sectionId) => {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         observer.observe(element);
//       }
//     });

//     return () => {
//       sections.forEach((sectionId) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           observer.unobserve(element);
//         }
//       });
//     };
//   }, []);

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'Escape' && isMobileMenuOpen) {
//         setIsMobileMenuOpen(false);
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, [isMobileMenuOpen]);

//   // Re-trigger logo animation every 60s
//   useEffect(() => {
//     const intervalId = window.setInterval(() => {
//       setLogoCycle((prev) => prev + 1);
//     }, 60000);

//     return () => window.clearInterval(intervalId);
//   }, []);

//   const navItems = [
//     { href: '#home', label: content.nav.home },
//     { href: '#about', label: content.nav.about },
//     { href: '#qualification', label: content.nav.qualification },
//     { href: '#portfolio', label: content.nav.portfolio },
//     { href: '#contact', label: content.nav.contact },
//   ];

//   const toggleLanguage = () => {
//     const newLocale = locale === 'es' ? 'en' : 'es';
//     window.location.href = `/${newLocale}`;
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'backdrop-blur-lg shadow-lg'
//           : 'bg-transparent'
//       }`}
//       style={{
//         backgroundColor: isScrolled ? 'var(--color-container)' : 'transparent'
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16 lg:h-20">
//           {/* Logo */}
//           <Link
//             href="#home"
//             className="flex items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
//             style={{
//               ['--tw-ring-color' as any]: 'var(--color-green)'
//             }}
//           >
//             <AnimatedLogo key={logoCycle} />
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="relative font-medium transition-colors duration-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
//                 style={{
//                   color: activeSection === item.href.slice(1) ? 'var(--color-text)' : 'var(--color-text-secondary)',
//                   ['--tw-ring-color' as any]: 'var(--color-green)'
//                 }}
//               >
//                 {item.label}
//                 {activeSection === item.href.slice(1) && (
//                   <motion.div
//                     layoutId="activeSection"
//                     className="absolute -bottom-1 left-0 right-0 h-0.5"
//                     style={{ backgroundColor: 'var(--color-green)' }}
//                   />
//                 )}
//               </Link>
//             ))}
//           </div>

//           {/* Actions */}
//           <div className="flex items-center space-x-4">
//             {/* Theme Toggle */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={toggleTheme}
//               className="p-2 rounded-full text-white hover:bg-gray-800 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
//               style={{
//                 backgroundColor: 'var(--color-container-light)',
//                 ['--tw-ring-color' as any]: 'var(--color-green)'
//               }}
//               aria-label="Toggle theme"
//             >
//               {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
//             </motion.button>

//             {/* Language Toggle */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={toggleLanguage}
//               className="p-2 rounded-full text-white hover:bg-gray-800 transition-colors flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
//               style={{
//                 backgroundColor: 'var(--color-container-light)',
//                 ['--tw-ring-color' as any]: 'var(--color-green)'
//               }}
//               aria-label="Toggle language"
//             >
//               <FiGlobe size={20} />
//               <span className="text-xs font-semibold">{locale.toUpperCase()}</span>
//             </motion.button>

//             {/* Mobile Menu Button */}
//             <motion.button
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden p-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
//               style={{
//                 backgroundColor: 'var(--color-container-light)',
//                 ['--tw-ring-color' as any]: 'var(--color-green)'
//               }}
//               aria-label="Toggle menu"
//               aria-expanded={isMobileMenuOpen}
//             >
//               {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden border-t"
//             style={{
//               backgroundColor: 'var(--color-container)',
//               borderColor: 'rgba(255, 255, 255, 0.12)'
//             }}
//           >
//             <div className="px-4 py-4 space-y-2">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                   className="block px-4 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
//                   style={{
//                     backgroundColor: activeSection === item.href.slice(1)
//                       ? 'var(--color-green-alpha)'
//                       : undefined,
//                     color: activeSection === item.href.slice(1)
//                       ? 'var(--color-text)'
//                       : 'var(--color-text-secondary)',
//                     ['--tw-ring-color' as any]: 'var(--color-green)'
//                   }}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';
import { FiSun, FiMoon, FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { content as contentEs } from '@/data/content-es';
import { content as contentEn } from '@/data/content-en';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedLogo } from "@/components/AnimatedLogo";
import { throttle } from '@/utils/throttle';

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [logoCycle, setLogoCycle] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const currentLocale = pathname?.startsWith('/en')
    ? 'en'
    : pathname?.startsWith('/es')
      ? 'es'
      : locale;

  const content = currentLocale === 'es' ? contentEs : contentEn;

  /*
   * Detect if we're on a sub-page (e.g. /es/proyecto/amaderarte).
   * On the homepage the pathname is just "/" or "/es" or "/en".
   * On any deeper page we need to prefix links with the base path.
   */
  const basePath = `/${currentLocale}`;
  const isHomePage =
    pathname === '/' ||
    pathname === basePath ||
    pathname === `${basePath}/`;

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const throttledScroll = throttle(handleScroll, 100);

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  // Use IntersectionObserver for active section detection — only on homepage
  useEffect(() => {
    if (!isHomePage) return;

    const sections = ['home', 'about', 'qualification', 'portfolio', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -66%',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [isHomePage]);

  // Clear active section highlight when on a sub-page
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('');
    }
  }, [isHomePage]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Re-trigger logo animation every 60s
  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setLogoCycle((prev) => prev + 1);
    }, 60000);

    return () => window.clearInterval(intervalId);
  }, []);

  /*
   * Build nav items with correct hrefs:
   * - Homepage: "#home", "#about", etc. (smooth scroll)
   * - Sub-pages: "/es#home", "/es#about", etc. (navigate back + scroll)
   */
  const navItems = [
    { section: 'home', label: content.nav.home },
    { section: 'about', label: content.nav.about },
    { section: 'qualification', label: content.nav.qualification },
    { section: 'portfolio', label: content.nav.portfolio },
    { section: 'contact', label: content.nav.contact },
  ].map((item) => ({
    ...item,
    href: isHomePage ? `#${item.section}` : `${basePath}#${item.section}`,
  }));

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'es' ? 'en' : 'es';
    const hasLocalePrefix =
      pathname === '/en' ||
      pathname?.startsWith('/en/') ||
      pathname === '/es' ||
      pathname?.startsWith('/es/');
    const nextPath = hasLocalePrefix
      ? pathname.replace(/^\/(en|es)(?=\/|$)/, `/${newLocale}`)
      : `/${newLocale}`;
    const hash = window.location.hash || '';
    window.location.href = `${nextPath}${hash}`;
  };

  if (['/internship-info', '/business-card'].some((path) => pathname?.endsWith(path))) {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
      style={{
        backgroundColor: isScrolled ? 'var(--color-container)' : 'transparent'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo — always links back to homepage */}
          <Link
            href={isHomePage ? '#home' : basePath}
            className="flex items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
            style={{
              ['--tw-ring-color' as any]: 'var(--color-green)'
            }}
          >
            <AnimatedLogo key={logoCycle} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.section}
                href={item.href}
                className="relative font-medium transition-colors duration-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
                style={{
                  color: activeSection === item.section ? 'var(--color-text)' : 'var(--color-text-secondary)',
                  ['--tw-ring-color' as any]: 'var(--color-green)'
                }}
              >
                {item.label}
                {activeSection === item.section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5"
                    style={{ backgroundColor: 'var(--color-green)' }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full text-white hover:bg-gray-800 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
              style={{
                backgroundColor: 'var(--color-container-light)',
                ['--tw-ring-color' as any]: 'var(--color-green)'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="p-2 rounded-full text-white hover:bg-gray-800 transition-colors flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
              style={{
                backgroundColor: 'var(--color-container-light)',
                ['--tw-ring-color' as any]: 'var(--color-green)'
              }}
              aria-label="Toggle language"
            >
              <FiGlobe size={20} />
              <span className="text-xs font-semibold">{currentLocale.toUpperCase()}</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
              style={{
                backgroundColor: 'var(--color-container-light)',
                ['--tw-ring-color' as any]: 'var(--color-green)'
              }}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t"
            style={{
              backgroundColor: 'var(--color-container)',
              borderColor: 'rgba(255, 255, 255, 0.12)'
            }}
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.section}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent"
                  style={{
                    backgroundColor: activeSection === item.section
                      ? 'var(--color-green-alpha)'
                      : undefined,
                    color: activeSection === item.section
                      ? 'var(--color-text)'
                      : 'var(--color-text-secondary)',
                    ['--tw-ring-color' as any]: 'var(--color-green)'
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
