import { RiArrowRightUpLine, RiBookOpenLine, RiFileChartLine, RiFileTextLine, RiFlightTakeoffLine, RiGlobalLine, RiMap2Line, RiPresentationLine, RiSendPlaneLine } from 'react-icons/ri';
import styles from './styles.module.css';

const links = [
  ['Ver informe final de pasantía', '[URL_INFORME_FINAL]', RiFileTextLine],
  ['Ver póster de sustentación', '[URL_POSTER]', RiFileChartLine],
  ['Ver presentación de sustentación', '[URL_PRESENTACION]', RiPresentationLine],
  ['Acceder al sitio web del proyecto', '[URL_SITIO_WEB]', RiGlobalLine],
  ['Abrir hub completo de la pasantía', '[URL_HUB_NOTION]', RiBookOpenLine],
  ['Consultar matriz de soporte bibliográfico', '[URL_MATRIZ_BIBLIOGRAFICA]', RiBookOpenLine],
  ['Ver mapas e índices agronómicos', '[URL_MAPAS]', RiMap2Line],
  ['Consultar anexos técnicos', '[URL_ANEXOS]', RiFileTextLine],
  ['Contactar al autor', '[URL_CONTACTO]', RiSendPlaneLine],
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
      <div className={styles.avatar} aria-hidden>
        <RiFlightTakeoffLine />
        <span>♧</span>
      </div>
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




