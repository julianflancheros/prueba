'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiArrowUpRight, FiArrowLeft } from 'react-icons/fi';
import { content as contentEs } from '@/data/content-es';
import { content as contentEn } from '@/data/content-en';

// type ProjectArchiveProps = {
//   locale: 'es' | 'en';
//   projects: Array<{
//     id: string;
//     title: string;
//     date: string;
//     category: string;
//     image: string;
//     url?: string;
//     owner: string;
//     ownerRole: string;
//     description?: string;
//   }>;
// };

export default function ProjectArchive() {
  // const [activeFilter, setActiveFilter] = useState('all');
  // const [hoveredId, setHoveredId] = useState<string | null>(null);
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'es';
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const content = locale === 'es' ? contentEs : contentEn;

  // const content = {
  //   es: {
  //     title: 'Archivo de Proyectos',
  //     subtitle: 'Colección completa de trabajos en desarrollo, diseño y agricultura',
  //     back: 'Volver al inicio',
  //     filters: {
  //       all: 'Todos',
  //       programming: 'Programación',
  //       design: 'Diseño',
  //       crops: 'Cultivos',
  //     },
  //     viewCase: 'Ver caso',
  //     visit: 'Visitar',
  //     projectCount: (count: number) => `${count} proyecto${count !== 1 ? 's' : ''}`,
  //   },
  //   en: {
  //     title: 'Project Archive',
  //     subtitle: 'Complete collection of works in development, design and agriculture',
  //     back: 'Back to home',
  //     filters: {
  //       all: 'All',
  //       programming: 'Programming',
  //       design: 'Design',
  //       crops: 'Crops',
  //     },
  //     viewCase: 'View case',
  //     visit: 'Visit',
  //     projectCount: (count: number) => `${count} project${count !== 1 ? 's' : ''}`,
  //   },
  // };

  const filteredProjects =
    activeFilter === 'all'
      ? content.portfolio.projects
      : content.portfolio.projects.filter((p) => p.category === activeFilter);

  const categoryLabels: Record<string, string> = {
    programming: content.portfolio.filters.programming,
    design: content.portfolio.filters.design,
    crops: content.portfolio.filters.crops,
  };

  // const t = content[locale];

  // const filteredProjects =
  //   activeFilter === 'all'
  //     ? projects
  //     : projects.filter((p) => p.category === activeFilter);

  const filters = [
    { key: 'all', label: content.portfolio.filters.all },
    { key: 'programming', label: content.portfolio.filters.programming.toUpperCase() },
    { key: 'design', label: content.portfolio.filters.design.toUpperCase() },
    { key: 'crops', label: content.portfolio.filters.crops.toUpperCase() },
    { key: 'eduDev', label: content.portfolio.filters.eduDev.toUpperCase() },
  ];

  const categoryColors: Record<string, string> = {
    programming: '#3b82f6',
    design: '#f97316',
    crops: '#22c55e',
    eduDev: '#8b5cf6',
    all: '#19d26f'
  };

  return (
    // <section className="min-h-screen bg-black py-24 px-4">
    //   <div className="max-w-7xl mx-auto">
    //     {/* Header */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //       className="mb-16"
    //     >
    //       {/* Back Button */}
    //       <Link
    //         href={`/${locale}#portfolio`}
    //         className="inline-flex items-center gap-2 text-white/60 hover:text-[#18F07D] transition-colors mb-8 group"
    //       >
    //         <FiArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
    //         {t.back}
    //       </Link>

    //       {/* Title */}
    //       <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
    //         {t.title}
    //       </h1>
    //       <p className="text-lg text-white/60 max-w-2xl">
    //         {t.subtitle}
    //       </p>
    //     </motion.div>

    //     {/* Filters */}
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6, delay: 0.1 }}
    //       className="flex flex-wrap gap-3 mb-8"
    //     >
    //       {filters.map((filter) => (
    //         <button
    //           key={filter.key}
    //           onClick={() => setActiveFilter(filter.key)}
    //           className="relative px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300"
    //           style={{
    //             backgroundColor:
    //               activeFilter === filter.key
    //                 ? `${categoryColors[filter.key]}20`
    //                 : 'transparent',
    //             color:
    //               activeFilter === filter.key
    //                 ? categoryColors[filter.key]
    //                 : 'rgba(255, 255, 255, 0.6)',
    //             border: `2px solid ${
    //               activeFilter === filter.key
    //                 ? categoryColors[filter.key]
    //                 : 'rgba(255, 255, 255, 0.1)'
    //             }`,
    //           }}
    //         >
    //           {filter.label}
    //         </button>
    //       ))}
    //     </motion.div>

    //     {/* Project Count */}
    //     <motion.p
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 0.4, delay: 0.2 }}
    //       className="text-white/40 text-sm mb-12"
    //     >
    //       {t.projectCount(filteredProjects.length)}
    //     </motion.p>

    //     {/* Projects Grid */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //       <AnimatePresence mode="popLayout">
    //         {filteredProjects.map((project, index) => {
    //           const categoryColor =
    //             categoryColors[project.category] ?? categoryColors.all;
    //           const isHovered = hoveredId === project.id;

    //           return (
    //             <motion.div
    //               key={project.id}
    //               layout
    //               initial={{ opacity: 0, scale: 0.9 }}
    //               animate={{ opacity: 1, scale: 1 }}
    //               exit={{ opacity: 0, scale: 0.9 }}
    //               transition={{ duration: 0.4, delay: index * 0.05 }}
    //               onMouseEnter={() => setHoveredId(project.id)}
    //               onMouseLeave={() => setHoveredId(null)}
    //               className="group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-sm"
    //             >
    //               {/* Image Container */}
    //               <div className="relative aspect-[4/3] overflow-hidden">
    //                 <Image
    //                   src={project.image}
    //                   alt={project.title}
    //                   fill
    //                   className="object-cover transition-transform duration-700"
    //                   style={{
    //                     transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    //                   }}
    //                 />

    //                 {/* Dark overlay */}
    //                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

    //                 {/* Hover glow */}
    //                 <div
    //                   className="absolute inset-0 transition-opacity duration-500"
    //                   style={{
    //                     background: `radial-gradient(circle at 50% 100%, ${categoryColor}30 0%, transparent 70%)`,
    //                     opacity: isHovered ? 1 : 0,
    //                   }}
    //                 />

    //                 {/* Category Badge */}
    //                 <div className="absolute top-4 right-4">
    //                   <span
    //                     className="px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm"
    //                     style={{
    //                       backgroundColor: `${categoryColor}ee`,
    //                       color: 'white',
    //                     }}
    //                   >
    //                     {t.filters[project.category as keyof typeof t.filters]?.toUpperCase()}
    //                   </span>
    //                 </div>

    //                 {/* Hover Actions */}
    //                 <motion.div
    //                   initial={{ opacity: 0, y: 20 }}
    //                   animate={{
    //                     opacity: isHovered ? 1 : 0,
    //                     y: isHovered ? 0 : 20,
    //                   }}
    //                   transition={{ duration: 0.3 }}
    //                   className="absolute bottom-4 left-4 right-4 flex gap-2"
    //                 >
    //                   <Link
    //                     href={`/${locale}/projects/${project.id}`}
    //                     className="flex-1 px-4 py-2.5 bg-white text-black rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 hover:bg-[#18F07D] transition-colors"
    //                   >
    //                     {t.viewCase}
    //                     <FiArrowUpRight className="w-4 h-4" />
    //                   </Link>
    //                   {project.url && (
    //                     <a
    //                       href={project.url}
    //                       target="_blank"
    //                       rel="noopener noreferrer"
    //                       className="px-4 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white/30 transition-all"
    //                     >
    //                       <FiExternalLink className="w-4 h-4" />
    //                     </a>
    //                   )}
    //                 </motion.div>
    //               </div>

    //               {/* Content */}
    //               <div className="p-6">
    //                 <h3
    //                   className="text-xl font-bold mb-2 line-clamp-2 text-white"
    //                 >
    //                   {project.title}
    //                 </h3>

    //                 <p className="text-sm text-white/50 mb-3">{project.date}</p>

    //                 <div className="pt-3 border-t border-white/10">
    //                   <p
    //                     className="text-sm font-semibold mb-1"
    //                     style={{ color: categoryColor }}
    //                   >
    //                     {project.owner}
    //                   </p>
    //                   <p className="text-xs text-white/40 line-clamp-2">
    //                     {project.ownerRole}
    //                   </p>
    //                 </div>
    //               </div>

    //               {/* Hover Border */}
    //               <div
    //                 className="absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none"
    //                 style={{
    //                   boxShadow: isHovered
    //                     ? `0 0 0 1px ${categoryColor}80, 0 0 30px ${categoryColor}40`
    //                     : 'none',
    //                 }}
    //               />
    //             </motion.div>
    //           );
    //         })}
    //       </AnimatePresence>
    //     </div>

    //     {/* Empty State */}
    //     {filteredProjects.length === 0 && (
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         className="text-center py-20"
    //       >
    //         <p className="text-white/40 text-lg">
    //           {locale === 'es'
    //             ? 'No se encontraron proyectos en esta categoría'
    //             : 'No projects found in this category'}
    //         </p>
    //       </motion.div>
    //     )}
    //   </div>
    // </section>

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
              const categoryColor = categoryColors[project.category] ?? categoryColors.all;
              const isHovered = hoveredId === project.id;
              const categoryLabel = categoryLabels[project.category] ?? project.category.toUpperCase();

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
                          {categoryLabel.toUpperCase()}
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
