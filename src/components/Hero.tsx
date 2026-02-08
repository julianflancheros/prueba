'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiInstagram, FiFacebook, FiCode, FiDatabase, FiZap } from 'react-icons/fi';
import { content as contentEs } from '@/data/content-es';
import { content as contentEn } from '@/data/content-en';

export default function HeroImproved() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'es';
  
  const content = locale === 'es' ? contentEs : contentEn;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => 
        (prev + 1) % content.hero.dynamicTexts.length
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [content.hero.dynamicTexts.length]);

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/julianflancheros', label: 'GitHub' },
    { icon: FiLinkedin, href: 'http://www.linkedin.com/in/julianflancheros', label: 'LinkedIn' },
    { icon: FiInstagram, href: 'https://www.instagram.com/julianflancheros/', label: 'Instagram' },
    { icon: FiFacebook, href: 'https://www.facebook.com/julianflancheros/', label: 'Facebook' },
  ];

  const powerTags = [
    { 
      icon: FiCode,
      title: 'Full-Stack & Cloud', 
      items: ['React', 'Node.js', 'GCP/Azure'],
      color: '#3b82f6'
    },
    { 
      icon: FiDatabase,
      title: 'AgTech & GIS', 
      items: ['Python', 'QGIS', 'IoT'],
      color: '#10b981'
    },
    { 
      icon: FiZap,
      title: 'Impacto', 
      items: ["Makers Fellow '25"],
      color: '#f59e0b'
    },
  ];

  const titleWords = content.hero.title.split(' ');
  const staggerContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.06, delayChildren: 0.15 },
    },
  };
  const wordVariant = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                style={{ 
                  borderColor: 'var(--color-green)',
                  backgroundColor: 'var(--color-container-light)'
                }}
              >
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-green)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--color-green)' }}>
                  {locale === 'es' ? 'Disponible para proyectos' : 'Available for projects'}
                </span>
              </motion.div>

              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg font-medium"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {content.hero.greeting}
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-display font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 bg-clip-text text-transparent animate-gradient-x"
                      style={{
                        backgroundImage: `linear-gradient(90deg, var(--color-green), var(--color-second-green), var(--color-green))`,
                        backgroundSize: '200% auto',
                      }}>
                  {content.hero.name}
                </span>
              </motion.h1>

              {/* Animated Title */}
              <motion.h2
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="text-2xl lg:text-4xl font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                {titleWords.map((word, index) => (
                  <motion.span 
                    key={`${word}-${index}`} 
                    variants={wordVariant} 
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-lg leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {content.hero.description}
              </motion.p>

               {/* Power Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-3 justify-center lg:justify-start"
              >
                {powerTags.map((tag, index) => (
                  <motion.div
                    key={tag.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group relative overflow-hidden rounded-2xl border-2 p-4 cursor-pointer"
                    style={{
                      backgroundColor: 'var(--color-container)',
                      borderColor: 'var(--color-container-light)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = tag.color}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-container-light)'}
                  >
                    {/* Icon */}
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg"
                           style={{ backgroundColor: `${tag.color}20` }}>
                        <tag.icon size={20} style={{ color: tag.color }} />
                      </div>
                      
                      <div className="flex-1">
                        <div className="font-bold text-sm mb-1"
                             style={{ color: 'var(--color-text)' }}>
                          {tag.title}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {tag.items.map((item, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-0.5 rounded"
                              style={{
                                backgroundColor: 'var(--color-body)',
                                color: 'var(--color-text-secondary)'
                              }}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${tag.color}15 0%, transparent 70%)`
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#portfolio"
                  className="btn-primary inline-flex items-center gap-2 shadow-lg"
                >
                  {content.hero.cta}
                  <FiArrowDown />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  {content.hero.ctaSecondary}
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="flex items-center gap-4 pt-4 justify-center lg:justify-start"
              >
                <div className="h-px flex-1 max-w-[60px] hidden sm:block" style={{ backgroundColor: 'var(--color-container-light)' }} />
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      className="p-3 rounded-lg transition-all"
                      style={{ 
                        backgroundColor: 'var(--color-container)',
                        color: 'var(--color-text-secondary)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-green)';
                        e.currentTarget.style.color = 'var(--color-text)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-container)';
                        e.currentTarget.style.color = 'var(--color-text-secondary)';
                      }}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
                <div className="h-px flex-1 max-w-[60px] hidden sm:block" style={{ backgroundColor: 'var(--color-container-light)' }} />
              </motion.div>
            </div>

            {/* Right Content - Stats Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square">
                {/* Rotating rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed"
                  style={{ borderColor: 'var(--color-green)', opacity: 0.3 }}
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border-2 border-dashed"
                  style={{ borderColor: 'var(--color-second-green)', opacity: 0.2 }}
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-16 rounded-full border border-dashed"
                  style={{ borderColor: 'var(--color-green)', opacity: 0.15 }}
                />
                
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 rounded-3xl"
                       style={{ backgroundColor: 'var(--color-container)' }}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                      className="text-7xl font-bold mb-3"
                      style={{ color: 'var(--color-green)' }}
                    >
                      5+
                    </motion.div>
                    <div className="text-xl font-semibold mb-2"
                         style={{ color: 'var(--color-text)' }}>
                      {locale === 'es' ? 'Años de' : 'Years of'}
                    </div>
                    <div className="text-lg font-medium"
                         style={{ color: 'var(--color-text-secondary)' }}>
                      {locale === 'es' ? 'experiencia' : 'experience'}
                    </div>
                    
                    {/* Mini stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t"
                         style={{ borderColor: 'var(--color-container-light)' }}>
                      <div>
                        <div className="text-2xl font-bold"
                             style={{ color: 'var(--color-green)' }}>
                          10+
                        </div>
                        <div className="text-xs"
                             style={{ color: 'var(--color-text-secondary)' }}>
                          {locale === 'es' ? 'Proyectos' : 'Projects'}
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold"
                             style={{ color: 'var(--color-green)' }}>
                          15+
                        </div>
                        <div className="text-xs"
                             style={{ color: 'var(--color-text-secondary)' }}>
                          {locale === 'es' ? 'Tecnologías' : 'Technologies'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{ 
                      backgroundColor: 'var(--color-green)',
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 12}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
          >
            <motion.a
              href="#about"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
              style={{ color: 'var(--color-text-secondary)' }}
              aria-label="Scroll to about section"
            >
              <span className="text-sm font-medium">
                {locale === 'es' ? 'Desliza' : 'Scroll'}
              </span>
              <FiArrowDown size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
