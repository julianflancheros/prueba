'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useAnimation } from 'framer-motion';
import { FiMap, FiCpu, FiCloud } from 'react-icons/fi';
import { content as contentEs } from '@/data/content-es';
import { content as contentEn } from '@/data/content-en';

type MarqueeRowProps = {
  items: string[];
  duration: number;
};

function MarqueeRow({ items, duration }: MarqueeRowProps) {
  const marqueeControls = useAnimation();
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!paused) {
      marqueeControls.start({
        x: ['0%', '-50%'],
        transition: { duration, ease: 'linear', repeat: Infinity },
      });
    }
    return () => {
      marqueeControls.stop();
    };
  }, [paused, isMobile, marqueeControls, duration]);

  return (
    <div
      className="relative overflow-hidden rounded-full max-w-full"
      style={{
        border: '1px solid var(--color-container-light)'
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        animate={marqueeControls}
        className="flex w-max flex-nowrap gap-1.5 px-2 py-1.5 text-[10px] uppercase tracking-wide sm:gap-3 sm:px-4 sm:py-2 sm:text-sm"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {[...items, ...items].map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="rounded-full px-2 py-0.5 sm:px-3 sm:py-1 transition-colors duration-300 hover:scale-105 whitespace-nowrap"
            style={{
              border: '1px solid var(--color-container-light)',
              backgroundColor: 'var(--color-container-light)'
            }}
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'es';
  const content = locale === 'es' ? contentEs : contentEn;

  const cards = [
    {
      title: 'AgTech & Geospatial',
      skills: ['QGIS', 'PostGIS', 'GeoPandas', 'Python', 'IoT'],
      icon: FiMap,
    },
    {
      title: 'Full-Stack Development',
      skills: ['React', 'Next.js', 'Node.js', 'Tailwind CSS'],
      icon: FiCpu,
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['GCP', 'Azure', 'Terraform', 'Docker', 'Kubernetes'],
      icon: FiCloud,
    },
  ];

  return (
    <section
      className="section-container relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative px-4 sm:px-6 lg:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div
              className="w-16 h-1 rounded-full mx-auto"
              style={{ backgroundColor: 'var(--color-green)' }}
            />
          </motion.div>
          <h2 className="section-title">{content.skills.title}</h2>
        </motion.div>

        {/* Skills Cards */}
        <div className="grid gap-4 sm:gap-8 md:grid-cols-3">
          {cards.map((card, cardIndex) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: cardIndex * 0.1 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-8 group overflow-hidden"
                style={{
                  backgroundColor: 'var(--color-container)',
                  border: '2px solid var(--color-green)',
                  boxShadow: `0 10px 30px var(--color-green-alpha)`
                }}
              >
                {/* Decorative corner gradient */}
                <div
                  className="absolute top-0 left-0 w-32 h-32 rounded-tl-2xl sm:rounded-tl-3xl opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                  style={{
                    background: `radial-gradient(circle at top left, var(--color-green), transparent)`
                  }}
                />

                {/* Animated border glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, var(--color-green), var(--color-second-green))`,
                    padding: '2px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                <div className="relative z-10 min-w-0">
                  {/* Card Header */}
                  <div className="flex flex-col items-start gap-3 mb-5 sm:mb-6 sm:flex-row sm:items-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className="p-3 rounded-xl"
                      style={{
                        backgroundColor: 'var(--color-green-alpha)',
                        border: '1px solid var(--color-green)'
                      }}
                    >
                      <Icon
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        style={{ color: 'var(--color-green)' }}
                      />
                    </motion.div>
                    <h3
                      className="text-lg font-display font-bold tracking-tight sm:text-2xl"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Skills Marquee */}
                  <MarqueeRow items={card.skills} duration={18 + cardIndex * 2} />

                  {/* Card Footer - Skill Count */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: cardIndex * 0.1 + 0.3 }}
                    className="mt-4 pt-4 sm:mt-6 sm:pt-6"
                    style={{
                      borderTop: '1px solid var(--color-container-light)'
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className="text-sm font-medium"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {card.skills.length} tecnologías
                      </span>
                      <motion.div
                        className="flex gap-1"
                        initial={{ width: 0 }}
                        whileInView={{ width: 'auto' }}
                        transition={{ delay: cardIndex * 0.1 + 0.5, duration: 0.5 }}
                      >
                        {card.skills.map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: cardIndex * 0.1 + 0.5 + i * 0.05 }}
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: 'var(--color-green)' }}
                          />
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl"
            style={{
              backgroundColor: 'var(--color-container)',
              border: '1px solid var(--color-container-light)'
            }}
          >
            <div>
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: 'var(--color-green)' }}
              >
                {cards.reduce((acc, card) => acc + card.skills.length, 0)}+
              </div>
              <div
                className="text-sm"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Tecnologías
              </div>
            </div>
            <div
              className="w-px h-12"
              style={{ backgroundColor: 'var(--color-container-light)' }}
            />
            <div>
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: 'var(--color-green)' }}
              >
                {cards.length}
              </div>
              <div
                className="text-sm"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Especialidades
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
