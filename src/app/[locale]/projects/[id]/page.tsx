import { notFound } from 'next/navigation';
import ProjectLayout from '@/components/ProjectLayout';
import { content as contentEs } from '@/data/content-es';
import { content as contentEn } from '@/data/content-en';

type PageProps = {
  params: { locale: 'es' | 'en'; id: string };
};

const journeyByIdEs: Record<string, { title: string; body: string }[]> = {
  amaderarte: [
    {
      title: 'Llamado',
      body: 'Los artesanos necesitaban un canal digital que transformara piezas únicas en ventas reales sin perder la esencia del oficio.',
    },
    {
      title: 'Conflicto',
      body: 'La visibilidad era limitada y el catálogo físico generaba fricción para compradores fuera del alcance local.',
    },
    {
      title: 'Transformación',
      body: 'Se construyó una plataforma centrada en descubrimiento visual, navegación rápida y un flujo de compra simple.',
    },
    {
      title: 'Resultado',
      body: 'La experiencia redujo la fricción y aumentó el alcance, logrando más de 500 visitantes en el primer mes.',
    },
    {
      title: 'Regreso',
      body: 'El taller quedó con una vitrina escalable que permite crecer la oferta y medir el impacto comercial.',
    },
  ],
};

const journeyByIdEn: Record<string, { title: string; body: string }[]> = {
  amaderarte: [
    {
      title: 'Call',
      body: 'Artisans needed a digital channel that could turn unique pieces into real sales without losing the craft’s essence.',
    },
    {
      title: 'Conflict',
      body: 'Visibility was limited and the physical catalog created friction for buyers outside the local reach.',
    },
    {
      title: 'Transformation',
      body: 'A platform was built around visual discovery, fast navigation, and a simple purchase flow.',
    },
    {
      title: 'Result',
      body: 'The experience reduced friction and expanded reach, achieving 500+ visitors in the first month.',
    },
    {
      title: 'Return',
      body: 'The workshop now has a scalable showcase to grow the offer and measure commercial impact.',
    },
  ],
};

export default function ProjectPage({ params }: PageProps) {
  const locale = params.locale === 'en' ? 'en' : 'es';
  const content = locale === 'es' ? contentEs : contentEn;
  const project = content.portfolio.projects.find((item) => item.id === params.id);

  if (!project) {
    notFound();
  }

  const journeyById = locale === 'es' ? journeyByIdEs : journeyByIdEn;
  const sections =
    journeyById[project.id] ?? [
      {
        title: locale === 'es' ? 'Conflicto' : 'Conflict',
        body: locale === 'es' ? 'Desafío operativo por definir.' : 'Operational challenge to be defined.',
      },
      {
        title: locale === 'es' ? 'Transformación' : 'Transformation',
        body: locale === 'es' ? 'Solución técnica en construcción.' : 'Technical solution in progress.',
      },
      {
        title: locale === 'es' ? 'Resultado' : 'Result',
        body: locale === 'es' ? 'Impacto por documentar.' : 'Impact to be documented.',
      },
    ];

  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.description}
      metric={project.metric}
      techStack={project.techStack}
      heroImage={project.image}
      heroAlt={project.title}
      sections={sections}
      url={project.url}
      locale={locale}
    />
  );
}
