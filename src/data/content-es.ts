export const content = {
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    qualification: 'Calificaciones',
    portfolio: 'Portafolio',
    contact: 'Contacto',
    loading: 'Cargando...'
  },
  hero: {
    greeting: 'Hola, soy',
    name: 'Julian F. Lancheros',
    title: 'AgTech Engineer & Developer',
    description: 'Transformo el ruido de los datos agrícolas en rentabilidad. Construyo la infraestructura digital que escala la industria agroindustrial mediante Código, GIS y Cloud.',
    cta: 'Ver Proyectos',
    ctaSecondary: 'Contáctame',
    dynamicTexts: [
      'la programación',
      'el diseño',
      'la naturaleza',
      'la ingeniería',
      'el diseño web',
      'la agricultura',
      'IoT y cloud',
      'aprender cosas nuevas...'
    ]
  },
  about: {
    title: 'Mi misión',
    subtitle: 'Conoce más sobre mi trayectoria',
    profileTitle: 'Ingeniero Agrícola: Digitalizando el campo con Infraestructura Escalable y GIS.',
    profileDescription: `No elijas entre un agrónomo y un desarrollador. Ten a ambos. <br><br>

Opero en la intersección exacta donde la <b>Ingeniería Agrícola</b> se encuentra con la <b>Nube</b>. A diferencia de un dev tradicional, entiendo la fisiología del cultivo y la variabilidad del suelo; y a diferencia de un ingeniero clásico, tengo la capacidad técnica para construir la <b>infraestructura digital</b> que escala el negocio. <br><br>

Mi obsesión es simple: Transformar los terabytes de "ruido" que genera el campo en <b>rentabilidad</b> y decisiones agronómicas precisas.`,
    city: 'Ciudad',
    cityValue: 'Bogotá, CO',
    degree: 'Grado',
    degreeValue: 'Estudiante de pregrado',
    finalPhrase: 'Busco oportunidades donde pueda ensuciarme las botas con datos de campo y limpiarlas escribiendo código eficiente'
  },
  interests: {
    title: 'Intereses',
    items: [
      { name: 'Geomática', icon: 'radar' },
      { name: 'Estadística', icon: 'chart' },
      { name: 'Programación', icon: 'code' },
      { name: 'Diseño', icon: 'brush' },
      { name: 'Bases de datos', icon: 'database' },
      { name: 'Logística y Maquinaria', icon: 'truck' },
      { name: 'Marketing Digital', icon: 'store' },
      { name: 'Naturaleza', icon: 'leaf' }
    ]
  },
  skills: {
    title: 'Habilidades',
    categories: [
      {
        name: 'Frontend',
        items: [
          { name: 'HTML5/CSS3', level: 90 },
          { name: 'JavaScript/TypeScript', level: 85 },
          { name: 'React/Next.js', level: 80 },
          { name: 'Tailwind CSS', level: 85 }
        ]
      },
      {
        name: 'Backend',
        items: [
          { name: 'Node.js', level: 75 },
          { name: 'Python', level: 80 },
          { name: 'Google Apps Script', level: 85 },
          { name: 'Bases de datos', level: 70 }
        ]
      },
      {
        name: 'GIS & Data',
        items: [
          { name: 'QGIS', level: 85 },
          { name: 'ArcGIS', level: 75 },
          { name: 'R', level: 70 },
          { name: 'Análisis de datos', level: 80 }
        ]
      },
      {
        name: 'Otros',
        items: [
          { name: 'Git/GitHub', level: 85 },
          { name: 'Joomla/WordPress', level: 75 },
          { name: 'IoT', level: 65 },
          { name: 'C++/Java', level: 70 }
        ]
      }
    ]
  },
  qualification: {
    title: 'Calificaciones',
    subtitle: 'Mi trayectoria personal',
    experience: 'Experiencia Profesional',
    education: 'Educación',
    experiences: [
      {
        title: 'Monitor de Tecnologías | Taller de Proyectos Interdisciplinarios (TPI)',
        date: 'Febrero 2021 - Marzo 2022',
        place: 'Facultad de Ingeniería, Universidad Nacional de Colombia',
        activities: [
          'Arquitectura de Información & SEO: Optimización de infraestructura digital reduciendo la redundancia de datos en un 25% (de 800 a 600 activos), mejorando velocidad de carga e indexación.',
          'Desarrollo de Soluciones Integrales: Diseño e implementación de interfaces interactivas de alto rendimiento y sistematización de retroalimentación mediante backend con Google Apps Script.',
          'Gestión de Talento & Colaboración: Integración técnica del equipo Quanticon Valley, despliegue de nueva identidad visual y manejo de grandes volúmenes de datos para grupos de más de 160 personas.'
        ],
        stack: ['React', 'Next.js', 'SEO', 'Google Apps Script', 'HTML/CSS']
      },
      {
        title: 'Estudiante Auxiliar de Cátedra | Sede Bogotá (UNAL)',
        date: 'Marzo 2022 - Julio 2022',
        place: 'Dirección Académica, Universidad Nacional de Colombia',
        activities: [
          'Ingeniería de Backend: Arquitectura y despliegue de infraestructura de servidor para gestión automatizada de calificaciones, eliminando procesamiento manual y asegurando integridad de datos.',
          'Continuidad Digital: Operación técnica de plataformas de aprendizaje virtual, administrando infraestructura de red y comunicaciones para entrega de contenido sin interrupciones.'
        ],
        stack: ['Node.js', 'Google Apps Script', 'Infraestructura', 'Automatización']
      },
      {
        title: 'Instructor Junior | Facultad de Ciencias Económicas (UNAL)',
        date: 'Febrero 2021 - Agosto 2021',
        place: 'UIFCE, Universidad Nacional de Colombia',
        activities: [
          'Capacitación de Alto Impacto: Formación técnica de 44 profesionales, diseñando sistemas de aprendizaje autónomo para adopción de software especializado.',
          'Liderazgo de Equipos: Coordinación de equipos técnicos de más de 30 personas, optimizando comunicación interna y cumplimiento de objetivos con herramientas de motivación y seguimiento.'
        ],
        stack: ['Formación', 'Sistemas de aprendizaje', 'Gestión de equipos']
      },
      {
        title: 'Desarrollador Frontend | Innovate',
        date: 'Septiembre 2021 - Diciembre 2021',
        place: 'Facultad de Ingeniería, Universidad Nacional de Colombia',
        activities: [
          'Refactorización de Interfaz: Rediseño visual bajo normativas institucionales, equilibrando estética moderna con usabilidad técnica optimizada.'
        ],
        stack: ['UI/UX', 'Frontend', 'Normativas institucionales']
      }
    ],
    educations: [
      {
        title: 'Ingeniería Agrícola',
        date: 'Agosto 2019 - Presente',
        place: 'Universidad Nacional de Colombia',
        description: `Enfoque: Especialización en la digitalización del sector agroindustrial, integrando diseño de infraestructura rural con automatización y control de procesos.

Diferenciador: Aplicación de principios de ingeniería para la gestión eficiente de recursos hídricos y maquinaria mediante el uso de datos.`
      },
      {
        title: 'Ingeniería Agronómica',
        date: 'Enero 2016 - Julio 2019',
        place: 'Universidad Nacional de Colombia',
        description: `Enfoque: Análisis profundo de sistemas de producción y transformación agroalimentaria, con énfasis en la optimización de rendimientos mediante factores bióticos y abióticos.

Diferenciador: Capacidad para interpretar el lenguaje biológico del campo y traducirlo a modelos técnicos escalables.`
      },
      {
        title: 'Programador Junior',
        date: 'Marzo 2021 - Diciembre 2021',
        place: 'Misión TIC 2022',
        description: `Enfoque: Formación intensiva en desarrollo de software orientada a la resolución de problemas reales y reactivación económica digital.

Diferenciador: Dominio de fundamentos de programación robustos para la construcción de herramientas de impacto inmediato en la industria.`
      }
    ]
  },
  portfolio: {
    title: 'Portafolio',
    subtitle: 'Mis proyectos destacados',
    filters: {
      all: 'Todos',
      crops: 'Cultivos',
      design: 'Diseño',
      programming: 'Programación'
    },
    projects: [
      {
        id: 'amaderarte',
        title: 'Web amaderarte',
        date: 'Enero 2026',
        category: 'programming',
        image: '/portfolio/portfolio-19.jpg',
        url: 'https://amaderarte.vercel.app',
        owner: 'Proyecto Personal',
        ownerRole: 'Product Owner · Web Developer · UX',
        description: `Amaderarte es una aplicación web que permite explorar y comprar piezas únicas de arte en madera creadas por artesanos. La plataforma exhibe una colección diversa de esculturas, mobiliario y objetos decorativos, ofreciendo una experiencia de compra fluida para entusiastas y coleccionistas.`,
        techStack: ['Next.js', 'Tailwind CSS', 'JavaScript', 'Vercel'],
        metric: '500+ visitantes en el primer mes'
      },
      {
        id: 'teatro-tierra',
        title: 'Web Page Teatro Tierra',
        date: 'Junio 2024',
        category: 'programming',
        image: '/portfolio/portfolio-18.jpg',
        url: 'https://teatrotierra.org/',
        owner: 'Claudia Sánchez',
        ownerRole: 'Productora ejecutiva'
      },
      {
        id: 'dynamic-maps',
        title: 'Mapas Dinámicos con QGIS y Three.js',
        date: 'Marzo 2023',
        category: 'programming',
        image: '/portfolio/portfolio-17.jpg',
        owner: 'Ingeniería de Riegos',
        ownerRole: 'Materia ofrecida por la Universidad',
        description:
          'Visualización 3D de modelos de terreno y mapas compuestos generados en QGIS, renderizados en Three.js para explorar capas y relieve en el navegador.',
        techStack: ['QGIS', 'Three.js', 'WebGL', 'JavaScript'],
        metric: '2 mapas 3D interactivos',
        maps: [
          {
            title: 'Mapa compuesto',
            description: 'Capas combinadas con textura y relieve.',
            src: '/Mapas%203D/Mapa%20Compuesto/Modelo3DNilo.html',
          },
          {
            title: 'Modelo de elevación del terreno',
            description: 'Relieve topográfico para análisis de pendientes.',
            src: '/Mapas%203D/Modelo%20de%20Elevaci%C3%B2n%20del%20terreno/Modelo3DNilo.html',
          },
        ],
      },
      {
        id: 'ieee-website',
        title: 'Sitio web Rama est. IEEE',
        date: 'Enero 2023',
        category: 'programming',
        image: '/portfolio/portfolio-16.jpg',
        url: 'https://ieeeunal.github.io/Pagina_Web/',
        owner: 'IEEE UNAL',
        ownerRole: 'Grupo estudiantil universitario'
      },
      {
        id: 'catedra-jeg',
        title: 'Sitio web Cátedra JEG',
        date: 'Julio 2022',
        category: 'programming',
        image: '/portfolio/portfolio-15.jpg',
        url: 'http://www.catedras-bogota.unal.edu.co/catedra-jorge-eliecer-gaitan/2022-1',
        owner: 'Universidad Nacional',
        ownerRole: 'Materia ofrecida por la Universidad'
      },
      {
        id: 'innovate',
        title: 'Sitio web Innovate',
        date: 'Diciembre 2021',
        category: 'programming',
        image: '/portfolio/portfolio-14.jpg',
        url: 'https://ingenieria.unal.edu.co/innovate',
        owner: 'Universidad Nacional',
        ownerRole: 'Grupo de investigación'
      },
      {
        id: 'deleite',
        title: 'Deleite Restaurante',
        date: 'Diciembre 2021',
        category: 'programming',
        image: '/portfolio/portfolio-13.jpg',
        url: 'https://restaurante-deleite.herokuapp.com/',
        owner: 'Misión TIC & UTP',
        ownerRole: 'Proyecto final'
      },
      {
        id: 'tpi',
        title: 'Sitio web TPi',
        date: 'Agosto 2021',
        category: 'programming',
        image: '/portfolio/portfolio-7.jpg',
        owner: 'Universidad Nacional',
        ownerRole: 'Materia ofrecida por la Universidad'
      },
      {
        id: 'tejidos',
        title: 'Tejidos C&S',
        date: 'Octubre 2020',
        category: 'design',
        image: '/portfolio/portfolio-3.jpg',
        owner: 'Juan Silva',
        ownerRole: 'Hijo del propietario del negocio'
      },
      {
        id: 'pacman',
        title: 'Juego Pacman',
        date: 'Noviembre 2019',
        category: 'programming',
        image: '/portfolio/portfolio-5.jpg',
        owner: 'Santiago Carvajal',
        ownerRole: 'Profesor'
      },
      {
        id: 'itawa',
        title: 'Página ITAWA Band',
        date: 'Noviembre 2017',
        category: 'programming',
        image: '/portfolio/portfolio-1.jpg',
        url: 'https://www.instagram.com/itawa.co/',
        owner: 'Juan Ramírez',
        ownerRole: 'Guitarrista'
      },
      {
        id: 'cilantro',
        title: 'Cultivo de Cilantro',
        date: 'Junio 2016',
        category: 'crops',
        image: '/portfolio/portfolio-2.jpg',
        owner: 'Jairo Cuervo',
        ownerRole: 'Profesor'
      }
    ]
  },
  projectLayout: {
    caseStudy: 'Caso de estudio',
    viewProject: 'Ver proyecto',
    process: 'El proceso',
    trustBar: [
      'Entrega a tiempo',
      'Comunicación directa',
      'Código limpio',
      'Soporte post-lanzamiento'
    ],
    ctaNeed: '¿Necesitas algo similar?',
    ctaTitle: 'Agenda una consulta gratuita',
    ctaDesc:
      '30 minutos para entender tu proyecto y proponerte una ruta clara hacia resultados.',
    ctaButton: 'Contactar ahora',
    ctaExploreLabel: 'Explora más',
    ctaExploreTitle: 'Ver otros proyectos',
    ctaExploreDesc:
      'Descubre más casos de estudio y el impacto que he generado para otros clientes.',
    ctaExploreButton: 'Ver portafolio',
    metrics: [
      { value: 500, suffix: '+', label: 'Visitantes', sub: 'primer mes' },
      { value: 3, suffix: 's', label: 'Carga', sub: 'tiempo promedio' },
      { value: 40, suffix: '%', label: 'Conversión', sub: 'mejora estimada' },
      { value: 1, suffix: '', label: 'Mes', sub: 'de desarrollo' }
    ],
    testimonial: {
      quote:
        'La plataforma transformó completamente cómo mostramos nuestro trabajo. Las ventas en línea superaron nuestras expectativas desde el primer mes.',
      author: 'Cliente Amaderarte'
    }
  },
  contact: {
    title: "Hablemos sobre",
    subtitle: 'Negocios',
    phase: 'Listo para transformar ideas en realidades?',
    CTA1: "Conectémonos ",
    CTA2: "y creemos algo extraordinario.",
    form: {
      name: 'Nombre',
      email: 'Email',
      subject: 'Asunto',
      phaseMessage: 'Envia un',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      reset: 'Resetear',
      sending: 'Enviando...',
      success: '¡Tu mensaje ha sido enviado!',
      error: 'Hubo un error al enviar tu mensaje'
    }
  },
  footer: {
    rights: 'Todos los derechos reservados',
    designed: 'Diseñado por'
  }
};
