'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiHeart, FiArrowUp, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { content as contentEs } from '@/data/content-es';
import { content as contentEn } from '@/data/content-en';
import { useEffect, useState } from 'react';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  // const content = locale === 'es' ? contentEs : contentEn;
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const currentLocale = pathname?.startsWith('/en')
    ? 'en'
    : pathname?.startsWith('/es')
      ? 'es'
      : 'es';
  const content = currentLocale === 'es' ? contentEs : contentEn;

  const basePath = `/${currentLocale}`;
  const isHomePage =
    pathname === '/' ||
    pathname === basePath ||
    pathname === `${basePath}/`;

  /** On homepage use #anchors; on sub-pages link back to homepage sections */
  const sectionHref = (hash: string) =>
    isHomePage ? `#${hash}` : `${basePath}#${hash}`;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isEs = currentLocale === 'es';

  const navLinks = [
    { label: content.nav.home, hash: 'home' },
    { label: content.nav.about, hash: 'about' },
    { label: content.nav.qualification, hash: 'qualification' },
    { label: content.nav.portfolio, hash: 'portfolio' },
    { label: content.nav.contact, hash: 'contact' },
  ];

  const socials = [
    {
      icon: FiGithub,
      href: 'https://github.com/julianflancheros',
      label: 'GitHub',
    },
    {
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/julianflancheros',
      label: 'LinkedIn',
    },
    {
      icon: FiMail,
      href: 'mailto:contacto@julianflancheros.com',
      label: 'Email',
    },
  ];

  if (['/internship-info', '/business-card'].some((path) => pathname?.endsWith(path))) {
    return null;
  }

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-container)' }}
    >
      {/* Top decorative line */}
      <div
        className="h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent, var(--color-green-alpha), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Main footer grid ── */}
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-3 md:gap-8">
          {/* Column 1: Branding */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3
              className="text-xl font-bold mb-2"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, var(--color-green), var(--color-second-green))',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Julian F. Lancheros
            </h3>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Full-Stack Developer & GIS Specialist
            </p>
            <div
              className="flex items-center gap-2 text-xs"
              style={{ color: 'var(--color-text-secondary)', opacity: 0.6 }}
            >
              <FiMapPin size={12} style={{ color: 'var(--color-green)' }} />
              <span>Bogotá, Colombia</span>
            </div>
          </motion.div>

          {/* Column 2: Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4
              className="font-mono text-[11px] uppercase tracking-[0.25em] mb-5"
              style={{ color: 'var(--color-green)' }}
            >
              {isEs ? 'Navegación' : 'Navigation'}
            </h4>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navLinks.map((item) => (
                <Link
                  key={item.hash}
                  href={sectionHref(item.hash)}
                  className="text-sm transition-colors duration-200 hover:translate-x-0.5 hover:transition-transform"
                  style={{ color: 'var(--color-text-secondary)' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = 'var(--color-green)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color =
                      'var(--color-text-secondary)';
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Column 3: Mini CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4
              className="font-mono text-[11px] uppercase tracking-[0.25em] mb-5"
              style={{ color: 'var(--color-green)' }}
            >
              {isEs ? '¿Trabajamos juntos?' : "Let's work together?"}
            </h4>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'var(--color-text-secondary)', opacity: 0.7 }}
            >
              {isEs
                ? 'Tengo disponibilidad para nuevos proyectos. Cuéntame tu idea y hagámosla realidad.'
                : "I'm available for new projects. Tell me your idea and let's make it happen."}
            </p>
            <Link
              href={sectionHref('contact')}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: 'var(--color-green)',
                color: 'var(--color-green)',
              }}
            >
              <span
                className="absolute inset-0 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: 'var(--color-green-alpha)' }}
              />
              <span className="relative">
                {isEs ? 'Contactar' : 'Get in touch'}
              </span>
              <span className="relative transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ── Social links row ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center gap-4 pb-8"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: 'var(--color-container-light)',
                color: 'var(--color-text-secondary)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--color-green)';
                el.style.color = 'var(--color-green)';
                el.style.backgroundColor = 'var(--color-green-alpha)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--color-container-light)';
                el.style.color = 'var(--color-text-secondary)';
                el.style.backgroundColor = 'transparent';
              }}
            >
              <social.icon size={18} />
            </a>
          ))}
        </motion.div>

        {/* ── Bottom bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="border-t py-6"
          style={{ borderColor: 'var(--color-container-light)' }}
        >
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p
              className="text-xs"
              style={{ color: 'var(--color-text-secondary)', opacity: 0.6 }}
            >
              © {currentYear} Julian F. Lancheros. {content.footer.rights}.
            </p>
            <p
              className="flex items-center gap-1 text-xs"
              style={{ color: 'var(--color-text-secondary)', opacity: 0.6 }}
            >
              {content.footer.designed}{' '}
              <span style={{ color: 'var(--color-green)' }}>
                Julian F. Lancheros
              </span>{' '}
              <FiHeart
                className="animate-pulse"
                size={12}
                style={{ color: '#ef4444' }}
              />
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Scroll to top ── */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full shadow-lg hover:shadow-xl transition-all z-50"
          style={{
            background:
              'linear-gradient(135deg, var(--color-green), var(--color-second-green))',
            color: 'var(--color-body)',
          }}
          aria-label="Scroll to top"
        >
          <FiArrowUp size={24} />
        </motion.button>
      )}
    </footer>
  );
}
