'use client';

import { RiArrowRightUpLine, RiBookOpenLine, RiFileChartLine, RiFileTextLine, RiGlobalLine, RiMap2Line, RiPresentationLine, RiSendPlaneLine } from 'react-icons/ri';
import styles from './styles.module.css';
import { motion } from 'framer-motion';

const links = [
  ['Ver informe final de pasantía', '[URL_INFORME_FINAL]', RiFileTextLine],
  ['Ver resumen Coloquio', 'https://unaledu-my.sharepoint.com/:b:/g/personal/jflancherosm_unal_edu_co/IQBqvG5SBxSAQZwRDM4kORzyARphMH4JvT1fxhUo1UVGJp0?e=O0Esa7', RiFileTextLine],
  ['Ver póster de sustentación', 'https://unaledu-my.sharepoint.com/:b:/g/personal/jflancherosm_unal_edu_co/IQDe3Up2wG_HSLC-S0l9yqJ3AVreexG2WNAb0Tj2Ydg5pnw', RiFileChartLine],
  ['Acceder al sitio web del proyecto', 'https://agricola-piedemonte.vercel.app/', RiGlobalLine],
  ['Ver repositorio de código', 'https://github.com/julianflancheros/AgricolaPiedemonte', RiPresentationLine],
  ['Abrir hub completo de la pasantía', 'https://app.notion.com/p/julianflancheros/Pasant-a-Agr-cola-Piedemonte-3244fbf462dc80f88fd7d8cd536dc455', RiBookOpenLine],
  ['Consultar matriz de soporte bibliográfico', 'https://docs.google.com/spreadsheets/d/1cl5-EDZka7tFukexuG5NRRqVUk2QLAqn/edit', RiBookOpenLine],
  ['Ver mapas e índices agronómicos', '[URL_MAPAS]', RiMap2Line],
  ['Contactar al autor', 'https://julianflancheros.com/es#contact', RiSendPlaneLine],
] as const;


function LinkCard({ label, href, Icon }: { label: string; href: string; Icon: any }) {
  return (
    <a className={styles.linkCard} href={href} target="_blank" rel="noreferrer">
      <span className={styles.linkIcon}><Icon aria-hidden /></span>
      <b>{label}</b>
      <RiArrowRightUpLine aria-hidden />
    </a>
  );
}

function Hero() {
  return (
    <header className={styles.hero}>
      <p className={styles.eyebrow}>Repositorio digital · 2026</p>
      <h1 className={styles.heading}>Pasantía Agrícola Piedemonte</h1>
      <p className={styles.category}>Drones Piedemonte · Agricultura de precisión · Palma de aceite</p>
      <p className={styles.intro}>Análisis estadístico de imágenes multiespectrales con drones en cultivos de palma de aceite.</p>
      <p className={styles.author}>Julian Felipe Lancheros Macias</p>
      <p className={styles.institution}>Universidad Nacional de Colombia · Facultad de Ingeniería</p>
    </header>
  );
}

export default function InternshipInfoPage() {
  return (
    <main className={styles.page}>
      <motion.div
        className={styles.animatedBackground}
        aria-hidden="true"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
        transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity }}
      />
      <div className={styles.glowOne} />
      <div className={styles.glowTwo} />
      <div className={styles.content}>
        <Hero />

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sobre el proyecto</h2>
          <p>
            Esta pasantía integra herramientas de fotogrametría, teledetección, análisis estadístico y
            agricultura de precisión para apoyar la interpretación de imágenes multiespectrales obtenidas
            con drones en cultivos de palma de aceite. El proyecto busca generar productos visuales y
            analíticos que faciliten la evaluación del estado del cultivo y la toma de decisiones agronómicas.
          </p>
        </section>

        <section className={styles.links} aria-label="Productos y recursos de la pasantía">
          {links.map(([label, href, Icon]) => (
            <LinkCard key={label} label={label} href={href} Icon={Icon} />
          ))}
        </section>

        <footer className={styles.footer}>
          Proyecto desarrollado como modalidad de pasantía para optar al título de Ingeniero Agrícola.
          <br />Universidad Nacional de Colombia · Empresa: Agrícola Piedemonte – Drones Piedemonte.
          <br />2026
        </footer>
      </div>
    </main>
  );
}




