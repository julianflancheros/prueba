'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight, FiExternalLink } from 'react-icons/fi';
import { content as contentEs } from '@/data/content-es';
import { content as contentEn } from '@/data/content-en';

export default function PortfolioBentoGrid() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'es';
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const content = locale === 'es' ? contentEs : contentEn;
  const featuredProjects = content.portfolio.projects.filter(p => p.featured === true);

  return (
    <section id="portfolio" className="relative py-24 px-4 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#18F07D]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            {content.portfolio.title}
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            {content.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[300px] mb-12">
          {featuredProjects.map((project, index) => {
            const isHovered = hoveredId === project.id;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`${project.span} ${project.rows} group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-sm`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out"
                    style={{
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  {/* Neon glow effect on hover */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at 50% 100%, rgba(24, 240, 125, 0.15) 0%, transparent 70%)',
                      opacity: isHovered ? 1 : 0,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6 md:p-8 z-10">
                  {/* Tag */}
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#18F07D]/20 text-[#18F07D] border border-[#18F07D]/30 backdrop-blur-sm">
                      {/* {project.techStack[0]} */}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/70 mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <motion.div 
                      className="flex gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0.7,
                        y: isHovered ? 0 : 10 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link
                        href={`/${locale}/projects/${project.id}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl font-semibold text-sm hover:bg-[#18F07D] hover:scale-105 transition-all duration-300"
                      >
                        {content.portfolio.viewCase}
                        <FiArrowUpRight className="w-4 h-4" />
                      </Link>
                      
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-xl font-semibold text-sm backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                        >
                          {content.portfolio.visit}
                          <FiExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Hover Border Glow */}
                <div 
                  className="absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none"
                  style={{
                    boxShadow: isHovered 
                      ? '0 0 0 1px rgba(24, 240, 125, 0.5), 0 0 40px rgba(24, 240, 125, 0.2)' 
                      : 'none',
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Archive Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent text-white rounded-2xl font-semibold border-2 border-white/20 hover:border-[#18F07D] hover:bg-[#18F07D]/10 transition-all duration-300 group"
          >
            {content.portfolio.viewArchive}
            <FiArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
