import { notFound } from 'next/navigation';
import ProjectLayout from '@/components/ProjectLayout';
import { content as contentEs } from '@/data/content-es';
import { content as contentEn } from '@/data/content-en';

type PageProps = {
  params: { locale: 'es' | 'en'; id: string };
};

const journeyByIdEn: Record<string, { title: string; body: string }[]> = {
  SaludVault: [
    {
      title: 'Call',
      body: 'To be defined.',
    },
    {
      title: 'Conflict',
      body: 'To be defined.',
    },
    {
      title: 'Transformation',
      body: 'To be defined.',
    },
    {
      title: 'Result',
      body: 'To be defined.',
    },
    {
      title: 'Return',
      body: 'To be defined.',
    },
  ],
  amaderarte: [
    {
      title: 'Call',
      body: "Artisans needed a digital channel that could turn unique pieces into real sales without losing the craft's essence.",
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
  
  // Buscar el proyecto directamente en el array
  const project = content.portfolio.projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  // Obtener el journey del proyecto
  const journeyById = locale === 'es' 
    ? project.projectJourneys 
    : journeyByIdEn[params.id];

  const sections =
    journeyById ?? [
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
      maps={project.maps}
      locale={locale}
    />
  );
}
