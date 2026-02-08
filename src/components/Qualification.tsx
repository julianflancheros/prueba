'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiAward, FiTrendingUp } from 'react-icons/fi';
import { content as contentEs } from '@/data/content-es';
import { content as contentEn } from '@/data/content-en';

export default function QualificationOption2() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'es';
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const content = locale === 'es' ? contentEs : contentEn;

  const experienceYears = content.qualification.experiences.length;
  const educationCount = content.qualification.educations.length;

  return (
    <section id="qualification" className="section-container relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{content.qualification.title}</h2>
          <p className="section-subtitle mb-8">{content.qualification.subtitle}</p>

          {/* Stats */}
          <div className="flex justify-center gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" style={{ color: 'var(--color-green)' }}>
                5+
              </div>
              <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                {locale === 'es' ? 'Años de experiencia' : 'Years of experience'}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2" style={{ color: 'var(--color-green)' }}>
                {educationCount}
              </div>
              <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                {locale === 'es' ? 'Títulos' : 'Degrees'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="grid grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('experience')}
            className="p-6 rounded-2xl transition-all border-2"
            style={{
              backgroundColor: activeTab === 'experience' ? 'var(--color-container)' : 'transparent',
              borderColor: activeTab === 'experience' ? 'var(--color-green)' : 'var(--color-container-light)'
            }}
          >
            <FiBriefcase 
              size={32} 
              className="mx-auto mb-3" 
              style={{ color: activeTab === 'experience' ? 'var(--color-green)' : 'var(--color-text-secondary)' }}
            />
            <div className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>
              {content.qualification.experience}
            </div>
            <div className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
              {experienceYears} posiciones
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('education')}
            className="p-6 rounded-2xl transition-all border-2"
            style={{
              backgroundColor: activeTab === 'education' ? 'var(--color-container)' : 'transparent',
              borderColor: activeTab === 'education' ? 'var(--color-green)' : 'var(--color-container-light)'
            }}
          >
            <FiBook 
              size={32} 
              className="mx-auto mb-3" 
              style={{ color: activeTab === 'education' ? 'var(--color-green)' : 'var(--color-text-secondary)' }}
            />
            <div className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>
              {content.qualification.education}
            </div>
            <div className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
              {educationCount} títulos
            </div>
          </motion.button>
        </div>

        {/* Content */}
        {activeTab === 'experience' && (
          <div className="space-y-8">
            {content.qualification.experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="group"
              >
                <div className="rounded-3xl overflow-hidden border-2 transition-all"
                     style={{ 
                       backgroundColor: 'var(--color-container)',
                       borderColor: 'var(--color-container-light)'
                     }}
                     onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-green)'}
                     onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-container-light)'}
                >
                  {/* Progress Bar */}
                  <div className="h-1.5" style={{ backgroundColor: 'var(--color-body)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full"
                      style={{ backgroundColor: 'var(--color-green)' }}
                    />
                  </div>

                  <div className="p-8">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                      {/* Left: Info */}
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                             style={{ 
                               backgroundColor: 'var(--color-green)',
                               color: 'var(--color-text)'
                             }}>
                          #{index + 1}
                        </div>

                        <h3 className="text-2xl font-bold mb-3"
                            style={{ color: 'var(--color-text)' }}>
                          {exp.title}
                        </h3>

                        <p className="text-lg font-semibold mb-2"
                           style={{ color: 'var(--color-green)' }}>
                          {exp.date}
                        </p>

                        <p className="text-sm mb-6"
                           style={{ color: 'var(--color-text-secondary)' }}>
                          {exp.place}
                        </p>

                        <div className="flex items-center gap-2 text-sm"
                             style={{ color: 'var(--color-text-secondary)' }}>
                          <FiTrendingUp size={16} style={{ color: 'var(--color-green)' }} />
                          <span>{exp.activities.length} responsabilidades</span>
                        </div>
                      </div>

                      {/* Right: Details */}
                      <div className="space-y-6">
                        {/* Activities */}
                        <div>
                          <h4 className="text-sm font-bold mb-3 flex items-center gap-2"
                              style={{ color: 'var(--color-text)' }}>
                            <FiAward size={16} style={{ color: 'var(--color-green)' }} />
                            RESPONSABILIDADES
                          </h4>
                          <ul className="space-y-2">
                            {exp.activities.map((activity, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm"
                                  style={{ color: 'var(--color-text-secondary)' }}>
                                <span className="w-1 h-1 rounded-full mt-2"
                                      style={{ backgroundColor: 'var(--color-green)' }} />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Stack */}
                        {(exp as any).stack && (exp as any).stack.length > 0 && (
                          <div>
                            <h4 className="text-sm font-bold mb-3"
                                style={{ color: 'var(--color-text)' }}>
                              TECNOLOGÍAS
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {(exp as any).stack.map((tech: string) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                                  style={{
                                    backgroundColor: 'var(--color-body)',
                                    color: 'var(--color-text)'
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-8">
            {content.qualification.educations.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="group"
              >
                <div className="rounded-3xl overflow-hidden border-2 transition-all"
                     style={{ 
                       backgroundColor: 'var(--color-container)',
                       borderColor: 'var(--color-container-light)'
                     }}
                     onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-green)'}
                     onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--color-container-light)'}
                >
                  {/* Progress Bar */}
                  <div className="h-1.5" style={{ backgroundColor: 'var(--color-body)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full"
                      style={{ backgroundColor: 'var(--color-green)' }}
                    />
                  </div>

                  <div className="p-8">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-8">
                      {/* Left: Info */}
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                             style={{ 
                               backgroundColor: 'var(--color-green)',
                               color: 'var(--color-text)'
                             }}>
                          #{index + 1}
                        </div>

                        <h3 className="text-2xl font-bold mb-3"
                            style={{ color: 'var(--color-text)' }}>
                          {edu.title}
                        </h3>

                        <p className="text-lg font-semibold mb-2"
                           style={{ color: 'var(--color-green)' }}>
                          {edu.date}
                        </p>

                        <p className="text-sm"
                           style={{ color: 'var(--color-text-secondary)' }}>
                          {edu.place}
                        </p>
                      </div>

                      {/* Right: Description */}
                      <div>
                        <p className="text-sm leading-relaxed"
                           style={{ color: 'var(--color-text-secondary)' }}>
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
