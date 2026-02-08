'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { content as contentEs } from '@/data/content-es';
import { content as contentEn } from '@/data/content-en';

/* ───────────── Types ───────────── */
type JourneySection = {
  title: string;
  body: string;
};

type MetricItem = {
  value: number;
  suffix: string;
  label: string;
  sub: string;
};

type MapItem = {
  title: string;
  src: string;
  description?: string;
};

type ProjectLayoutProps = {
  title: string;
  subtitle?: string;
  metric?: string;
  techStack?: string[];
  heroImage: string;
  heroAlt: string;
  sections: JourneySection[];
  url?: string;
  locale: 'es' | 'en';
  /** Optional metrics to show in the metrics row. Defaults provided. */
  metrics?: MetricItem[];
  /** Optional testimonial quote */
  testimonial?: { quote: string; author: string };
  /** Optional embedded maps */
  maps?: MapItem[];
};

/* ───────────── Animated counter ───────────── */
function Counter({
  target,
  suffix,
  delay = 0,
}: {
  target: number;
  suffix: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const timeout = setTimeout(() => {
      let current = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(current);
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [started, target, delay]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ───────────── Bento card for journey ───────────── */
function BentoCard({
  item,
  index,
  total,
}: {
  item: JourneySection & { size?: string };
  index: number;
  total: number;
}) {
  /* Determine size: first and 4th are large, last is full, rest small */
  const size =
    (item as any).size ??
    (index === 0 || index === 3
      ? 'large'
      : index === total - 1
        ? 'full'
        : 'small');

  const gridClass =
    size === 'large'
      ? 'md:col-span-2'
      : size === 'full'
        ? 'md:col-span-3'
        : 'md:col-span-1';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 cursor-default ${gridClass}`}
      style={{
        borderColor: 'var(--color-container-light)',
      }}
    >
      {/* Hover border highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ borderColor: 'var(--color-green-alpha)' }}
      />

      {/* Step number + title */}
      <div className="mb-3 flex items-center gap-3">
        <span
          className="inline-flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-bold"
          style={{
            backgroundColor: 'var(--color-green-alpha)',
            border: '1px solid var(--color-green)',
            color: 'var(--color-green)',
          }}
        >
          {index + 1}
        </span>
        <span
          className="font-mono text-xs uppercase tracking-[0.2em] font-bold"
          style={{ color: 'var(--color-green)' }}
        >
          {item.title}
        </span>
      </div>

      {/* Body */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {item.body}
      </p>

      {/* Bottom accent line on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{
          background: 'linear-gradient(90deg, var(--color-green), transparent)',
        }}
      />
    </motion.div>
  );
}

/* ───────────── Main layout ───────────── */
export default function ProjectLayout({
  title,
  subtitle,
  metric,
  techStack = [],
  heroImage,
  heroAlt,
  sections,
  url,
  locale,
  metrics,
  testimonial,
  maps,
}: ProjectLayoutProps) {
  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };
  const fillVariants = {
    rest: { scaleX: 0 },
    hover: { scaleX: 1 },
  };

  const content = locale === 'es' ? contentEs : contentEn;
  const copy = content.projectLayout;

  /* Default metrics if none provided */
  const displayMetrics: MetricItem[] = metrics ?? (copy.metrics as MetricItem[]);
  const displayTestimonial = testimonial ?? copy.testimonial;
  const basePath = `/${locale}`;
  const mapLabel = locale === 'es' ? 'Mapas interactivos' : 'Interactive maps';
  const mapHint =
    locale === 'es'
      ? 'Modelos 3D generados con QGIS y Three.js.'
      : '3D models generated with QGIS and Three.js.';

  return (
    <section
      className="section-container relative overflow-hidden"
      style={{ color: 'var(--color-text)' }}
    >
      {/* ── Background dot pattern ── */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="h-full w-full"
          style={{
            background:
              'radial-gradient(circle, var(--color-green-alpha) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* ══════════════════════════════════════════════
            HERO CARD — image + project info (preserved)
           ══════════════════════════════════════════════ */}
        <div
          className="mb-10 rounded-3xl border p-8"
          style={{
            borderColor: 'var(--color-green)',
            backgroundColor: 'var(--color-container)',
            opacity: 0.9,
          }}
        >
          {/* Hero image */}
          <div
            className="relative aspect-video w-full overflow-hidden rounded-2xl border"
            style={{
              borderColor: 'var(--color-green)',
              backgroundColor: 'var(--color-container)',
              opacity: 0.8,
            }}
          >
            <Image src={heroImage} alt={heroAlt} fill className="object-cover" priority />
          </div>

          {/* Project info row */}
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p
                  className="text-xs uppercase tracking-[0.35em] font-mono"
                  style={{ color: 'var(--color-green)' }}
                >
                  {copy.caseStudy}
                </p>
                <h1
                  className="text-3xl md:text-4xl font-bold tracking-tight"
                  style={{ color: 'var(--color-text)' }}
                >
                  {title}
                </h1>
                {subtitle && (
                  <p
                    className="mt-2 text-sm max-w-2xl"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {subtitle}
                  </p>
                )}
              </div>
              {url && (
                <motion.a
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden rounded-full border px-4 py-2 text-sm"
                  style={{
                    borderColor: 'var(--color-green)',
                    color: 'var(--color-green)',
                  }}
                >
                  <motion.span
                    variants={fillVariants}
                    className="absolute inset-0 origin-left"
                    style={{ backgroundColor: 'var(--color-green-alpha)' }}
                  />
                  <span className="relative">{copy.viewProject}</span>
                </motion.a>
              )}
            </div>

            {/* Metric pill + tech stack */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
              {metric && (
                <span
                  className="rounded-full border px-4 py-1 font-mono"
                  style={{
                    borderColor: 'var(--color-green)',
                    backgroundColor: 'var(--color-green-alpha)',
                    color: 'var(--color-green)',
                  }}
                >
                  {metric}
                </span>
              )}
              {techStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border px-3 py-1 text-[11px] font-semibold tracking-widest"
                  style={{
                    borderColor: 'var(--color-container-light)',
                    backgroundColor: 'var(--color-container)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {item.toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            METRICS ROW — animated counters
           ══════════════════════════════════════════════ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {displayMetrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.08 * i }}
              className="rounded-2xl border p-6 text-center"
              style={{
                backgroundColor: 'var(--color-container)',
                borderColor: 'var(--color-container-light)',
              }}
            >
              <div
                className="text-4xl md:text-[44px] font-black leading-none mb-2"
                style={{ color: 'var(--color-green)' }}
              >
                <Counter target={m.value} suffix={m.suffix} delay={300 + i * 180} />
              </div>
              <div
                className="text-sm font-semibold mb-0.5"
                style={{ color: 'var(--color-text)' }}
              >
                {m.label}
              </div>
              <div
                className="font-mono text-[10px] uppercase tracking-wider"
                style={{ color: 'var(--color-text-secondary)', opacity: 0.6 }}
              >
                {m.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════
            SECTION LABEL — "El proceso"
           ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <span
            className="font-mono text-[11px] uppercase tracking-[0.25em] whitespace-nowrap"
            style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}
          >
            {copy.process}
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: 'var(--color-container-light)' }}
          />
        </motion.div>

        {/* ══════════════════════════════════════════════
            BENTO GRID — journey sections
           ══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {sections.map((section, i) => (
            <BentoCard key={section.title} item={section as JourneySection & { size?: string }} index={i} total={sections.length} />
          ))}
        </div>

        {maps && maps.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <span
                className="font-mono text-[11px] uppercase tracking-[0.25em] whitespace-nowrap"
                style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}
              >
                {mapLabel}
              </span>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: 'var(--color-container-light)' }}
              />
            </motion.div>

            <div
              className="mb-4 text-sm"
              style={{ color: 'var(--color-text-secondary)', opacity: 0.7 }}
            >
              {mapHint}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
              {maps.map((item) => (
                <div
                  key={item.src}
                  className="rounded-2xl border p-4"
                  style={{
                    backgroundColor: 'var(--color-container)',
                    borderColor: 'var(--color-container-light)',
                  }}
                >
                  <div className="mb-3">
                    <div
                      className="text-sm font-semibold"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {item.title}
                    </div>
                    {item.description && (
                      <div
                        className="text-xs"
                        style={{ color: 'var(--color-text-secondary)', opacity: 0.7 }}
                      >
                        {item.description}
                      </div>
                    )}
                  </div>
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl border">
                    <iframe
                      src={item.src}
                      title={item.title}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ══════════════════════════════════════════════
            SOCIAL PROOF — testimonial
           ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border p-10 md:p-12 text-center mb-16"
          style={{
            background:
              'linear-gradient(135deg, var(--color-green-alpha) 0%, var(--color-container) 100%)',
            borderColor: 'var(--color-green-alpha)',
          }}
        >
          <div className="text-3xl mb-5 opacity-70">★★★★★</div>
          <p
            className="text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto mb-5 italic"
            style={{ color: 'var(--color-text)', opacity: 0.85 }}
          >
            &ldquo;{displayTestimonial.quote}&rdquo;
          </p>
          <span
            className="font-mono text-xs uppercase tracking-[0.2em]"
            style={{ color: 'var(--color-green)', opacity: 0.7 }}
          >
            — {displayTestimonial.author}
          </span>
        </motion.div>

        {/* ══════════════════════════════════════════════
            DUAL CTA — contact + portfolio
           ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {/* Left — Contact CTA */}
          <Link
            href={`${basePath}#contact`}
            className="group rounded-2xl border p-8 md:p-10 transition-all duration-500 hover:-translate-y-1"
            style={{
              backgroundColor: 'var(--color-container)',
              borderColor: 'var(--color-container-light)',
            }}
          >
            <span
              className="block font-mono text-[11px] uppercase tracking-[0.2em] mb-4"
              style={{ color: 'var(--color-green)' }}
            >
              {copy.ctaNeed}
            </span>
            <span
              className="block text-2xl md:text-[28px] font-extrabold tracking-tight mb-3"
              style={{ color: 'var(--color-text)' }}
            >
              {copy.ctaTitle}
            </span>
            <span
              className="block text-sm leading-relaxed mb-6"
              style={{ color: 'var(--color-text-secondary)', opacity: 0.6 }}
            >
              {copy.ctaDesc}
            </span>
            <span
              className="relative inline-flex items-center gap-2 rounded-xl border-2 px-6 py-3 text-sm font-bold transition-all duration-300 overflow-hidden"
              style={{
                borderColor: 'var(--color-green)',
                color: 'var(--color-green)',
                backgroundColor: 'transparent',
              }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--color-body)]">
                {copy.ctaButton}
              </span>
              <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
              {/* Fill on hover */}
              <span
                className="pointer-events-none absolute inset-0 z-0 rounded-xl origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: 'var(--color-green)' }}
              />
            </span>
          </Link>

          {/* Right — Portfolio CTA */}
          <Link
            href={`${basePath}#portfolio`}
            className="group rounded-2xl border p-8 md:p-10 transition-all duration-500 hover:-translate-y-1"
            style={{
              backgroundColor: 'var(--color-container)',
              borderColor: 'var(--color-container-light)',
            }}
          >
            <span
              className="block font-mono text-[11px] uppercase tracking-[0.2em] mb-4"
              style={{ color: 'var(--color-text-secondary)', opacity: 0.5 }}
            >
              {copy.ctaExploreLabel}
            </span>
            <span
              className="block text-2xl md:text-[28px] font-extrabold tracking-tight mb-3"
              style={{ color: 'var(--color-text)' }}
            >
              {copy.ctaExploreTitle}
            </span>
            <span
              className="block text-sm leading-relaxed mb-6"
              style={{ color: 'var(--color-text-secondary)', opacity: 0.6 }}
            >
              {copy.ctaExploreDesc}
            </span>
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300"
              style={{ color: 'var(--color-text-secondary)', opacity: 0.7 }}
            >
              {copy.ctaExploreButton}
              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </motion.div>

        {/* ══════════════════════════════════════════════
            TRUST BAR
           ══════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8 pt-8 border-t"
          style={{ borderColor: 'var(--color-container-light)' }}
        >
          {copy.trustBar.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider"
              style={{ color: 'var(--color-text-secondary)', opacity: 0.4 }}
            >
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: 'var(--color-green)', opacity: 0.5 }}
              />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
