'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import { content as contentEs } from '@/data/content-es';
import { content as contentEn } from '@/data/content-en';

export default function PortfolioCleanGrid() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'es';
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const content = locale === 'es' ? contentEs : contentEn;

  const getCategoryKey = (project: (typeof content.portfolio.projects)[number]) => {
    if (project.id === 'dynamic-maps') return 'gis';
    if (project.category === 'crops') return 'agtech';
    if (project.category === 'design') return 'enterprise';
    if (project.category === 'programming') return 'full-stack';
    return 'full-stack';
  };

  const filteredProjects = activeFilter === 'all'
    ? content.portfolio.projects
    : content.portfolio.projects.filter((p) => getCategoryKey(p) === activeFilter);

  const filters = [
    { key: 'all', label: content.portfolio.filters.all },
    { key: 'gis', label: 'GIS & DATA' },
    { key: 'enterprise', label: 'ENTERPRISE' },
    { key: 'agtech', label: 'AGTECH' },
    { key: 'full-stack', label: 'FULL-STACK' },
  ];

  const categoryColors: Record<string, string> = {
    gis: '#10b981',
    enterprise: '#f97316',
    agtech: '#22c55e',
    'full-stack': '#3b82f6',
    all: '#19d26f'
  };

  return (
    <section id="portfolio" className="section-container relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{content.portfolio.title}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">{content.portfolio.subtitle}</p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className="relative px-8 py-3 rounded-full font-bold text-sm overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: activeFilter === filter.key
                  ? `${categoryColors[filter.key]}dd`
                  : 'var(--color-green-alpha)',
                color: activeFilter === filter.key
                  ? 'var(--color-body)'
                  : 'var(--color-text)',
                border: `2px solid ${activeFilter === filter.key ? 'transparent' : 'var(--color-green)'}`,
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter.key) {
                  e.currentTarget.style.backgroundColor = 'var(--color-green)';
                  e.currentTarget.style.color = 'var(--color-body)';
                  e.currentTarget.style.borderColor = 'transparent';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter.key) {
                  e.currentTarget.style.backgroundColor = 'var(--color-green-alpha)';
                  e.currentTarget.style.color = 'var(--color-text)';
                  e.currentTarget.style.borderColor = 'var(--color-green)';
                }
              }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Clean Grid - 3 columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const categoryKey = getCategoryKey(project);
              const categoryColor = categoryColors[categoryKey];
              const isHovered = hoveredId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group cursor-pointer"
                >
                  <div className="rounded-2xl overflow-hidden transition-all duration-300"
                       style={{ 
                         backgroundColor: 'var(--color-container)',
                         transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                         boxShadow: isHovered 
                           ? `0 20px 40px ${categoryColor}40`
                           : '0 4px 6px rgba(0,0,0,0.1)'
                       }}>
                    
                    {/* Image Container - Fixed 4:3 */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700"
                        style={{
                          transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                        }}
                      />

                      {/* Gradient Overlay on Hover */}
                      <div 
                        className="absolute inset-0 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(to top, ${categoryColor}dd 0%, transparent 60%)`,
                          opacity: isHovered ? 1 : 0
                        }}
                      />

                      {/* Hover Actions */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: isHovered ? 1 : 0,
                          y: isHovered ? 0 : 20
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-6 left-6 right-6 flex gap-3"
                      >
                        <Link
                          href={`/${locale}/projects/${project.id}`}
                          className="flex-1 px-4 py-3 bg-white text-black rounded-xl font-bold text-center flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                        >
                          Ver Caso
                          <FiArrowUpRight />
                        </Link>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all"
                          >
                            <FiExternalLink size={20} />
                          </a>
                        )}
                      </motion.div>

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm"
                          style={{
                            backgroundColor: `${categoryColor}ee`,
                            color: 'white'
                          }}
                        >
                          {categoryKey.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 line-clamp-2"
                          style={{ color: 'var(--color-text)' }}>
                        {project.title}
                      </h3>

                      <p className="text-sm mb-3"
                         style={{ color: 'var(--color-text-secondary)' }}>
                        {project.date}
                      </p>

                      <div className="pt-3 border-t"
                           style={{ borderColor: 'var(--color-container-light)' }}>
                        <p className="text-sm font-semibold mb-1"
                           style={{ color: categoryColor }}>
                          {project.owner}
                        </p>
                        <p className="text-xs line-clamp-2"
                           style={{ color: 'var(--color-text-secondary)' }}>
                          {project.ownerRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Counter */}
      </div>
    </section>
  );
}
  
