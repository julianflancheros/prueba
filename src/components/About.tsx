'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiMapPin, FiAward, FiCode, FiTrendingUp } from 'react-icons/fi';
import { content as contentEs } from '@/data/content-es';
import { content as contentEn } from '@/data/content-en';

export default function About() {
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'es';
  const content = locale === 'es' ? contentEs : contentEn;

  const stats = [
    {
      icon: FiCode,
      value: '10+',
      label: locale === 'es' ? 'Proyectos' : 'Projects',
      color: 'var(--color-green)'
    },
    {
      icon: FiTrendingUp,
      value: '5+',
      label: locale === 'es' ? 'Años exp.' : 'Years exp.',
      color: 'var(--color-second-green)'
    },
    {
      icon: FiAward,
      value: '15+',
      label: locale === 'es' ? 'Tecnologías' : 'Technologies',
      color: 'var(--color-green)'
    },
  ];

  return (
    <section
      id="about"
      className="section-container relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
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
          <h2 className="section-title">{content.about.title}</h2>
          <p className="section-subtitle">{content.about.subtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative"
          >
            <div className="relative">
              {/* Glowing background effect */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-3xl blur-3xl"
                style={{
                  background: `linear-gradient(45deg, var(--color-green), var(--color-second-green))`,
                }}
              />

              {/* Main image */}
              <div
                className="relative aspect-[4/5] rounded-3xl overflow-hidden border-4"
                style={{ borderColor: 'var(--color-green)' }}
              >
                <Image
                  src="/me.jpg"
                  alt="Julian F. Lancheros"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Image overlay gradient */}
                <motion.div
                  whileHover={{ opacity: 0 }}
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to bottom, transparent 70%, var(--color-green-alpha))`,
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6  left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-right-6 p-6 rounded-2xl shadow-2xl backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--color-container)',
                  border: '2px solid var(--color-green)'
                }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'var(--color-green)' }}
                  >
                    <FiMapPin size={24} style={{ color: 'var(--color-body)' }} />
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                      {content.about.city}
                    </p>
                    <p className="font-bold" style={{ color: 'var(--color-text)' }}>
                      {content.about.cityValue}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative orbiting circles */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-4 -left-4 w-24 h-24 border-4 rounded-full"
                style={{ borderColor: 'var(--color-green)', opacity: 0.4 }}
              >
                <motion.div
                  className="absolute top-0 left-1/2 w-3 h-3 rounded-full -ml-1.5"
                  style={{ backgroundColor: 'var(--color-green)' }}
                />
              </motion.div>

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -bottom-8 -left-8 w-32 h-32 border-4 rounded-full"
                style={{ borderColor: 'var(--color-second-green)', opacity: 0.3 }}
              >
                <motion.div
                  className="absolute top-0 left-1/2 w-4 h-4 rounded-full -ml-2"
                  style={{ backgroundColor: 'var(--color-second-green)' }}
                />
              </motion.div>

              {/* Corner accents */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-10 right-10 w-20 h-20 rounded-full blur-xl"
                style={{
                  background: `radial-gradient(circle, var(--color-green), transparent)`,
                }}
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Title */}
            <div>
              <h3
                className="text-3xl lg:text-4xl font-display font-bold mb-4"
                style={{ color: 'var(--color-text)' }}
              >
                {content.about.profileTitle}
              </h3>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 rounded-full"
                style={{ backgroundColor: 'var(--color-green)' }}
              />
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
              dangerouslySetInnerHTML={{ __html: content.about.profileDescription }}
            />

            {/* Stats Grid */}
            {/* <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.4 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="relative text-center p-6 rounded-2xl overflow-hidden group"
                  style={{
                    backgroundColor: 'var(--color-container)',
                    border: '2px solid var(--color-container-light)'
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, var(--color-green-alpha), transparent)`,
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon
                        className="w-8 h-8 mx-auto mb-3"
                        style={{ color: stat.color }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 * index + 0.6 }}
                      className="text-3xl font-bold mb-2"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {stat.value}
                    </motion.div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div> */}

            {/* Final phrase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative mt-8"
            >
              {/* Decorative quote mark */}
              <div
                className="absolute -top-4 -left-2 text-6xl font-bold opacity-20"
                style={{ color: 'var(--color-green)' }}
              >
                &ldquo;
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-lg font-medium italic text-center pt-6 pb-8 px-8 rounded-2xl relative overflow-hidden"
                style={{
                  color: 'var(--color-text)',
                  backgroundColor: 'var(--color-container)',
                  border: '2px solid var(--color-green)'
                }}
              >
                {/* Animated background shimmer */}
                <motion.div
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `linear-gradient(90deg, transparent, var(--color-green), transparent)`,
                  }}
                />
                <span className="relative z-10">{content.about.finalPhrase}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
