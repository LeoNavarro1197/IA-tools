export const coursesTools = [
  {
    id: 'power_automate_courses',
    name: 'Cursos de Power Automate',
    description: 'Colección completa de cursos oficiales y recursos de aprendizaje para Power Automate.',
    category: 'courses',
    pricing: 'mixed',
    logo: '⚡',
    features: ['Cursos oficiales', 'Tutoriales paso a paso', 'Certificaciones', 'Recursos descargables'],
    url: 'https://learn.microsoft.com/es-es/training/powerplatform/power-automate',
    rating: 4.8,
    users: '500K+',
    detailedDescription: 'Microsoft ofrece una amplia gama de cursos y recursos educativos para Power Automate, desde conceptos básicos hasta automatizaciones avanzadas. Los cursos incluyen módulos interactivos, ejercicios prácticos y rutas de aprendizaje personalizadas. Además de los cursos oficiales, encontrarás recursos de la comunidad, documentación detallada y guías de mejores prácticas.',
    howToUse: [
      {
        step: 1,
        title: 'Acceder a Microsoft Learn',
        description: 'Visita la plataforma Microsoft Learn y navega a la sección de Power Automate. Puedes acceder gratuitamente con tu cuenta de Microsoft.'
      },
      {
        step: 2,
        title: 'Elegir ruta de aprendizaje',
        description: 'Selecciona una ruta de aprendizaje según tu nivel y objetivos. Hay rutas para principiantes, intermedios y avanzados.'
      },
      {
        step: 3,
        title: 'Completar módulos básicos',
        description: 'Comienza con los módulos fundamentales que cubren la interfaz, conceptos básicos y primeros flujos de trabajo.'
      },
      {
        step: 4,
        title: 'Realizar ejercicios prácticos',
        description: 'Practica con los ejercicios y laboratorios incluidos en cada módulo para aplicar lo aprendido.'
      },
      {
        step: 5,
        title: 'Explorar recursos adicionales',
        description: 'Accede a documentación complementaria, ejemplos de casos de uso y plantillas de flujos de trabajo.'
      },
      {
        step: 6,
        title: 'Preparación para certificación',
        description: 'Utiliza los recursos de preparación para obtener certificaciones oficiales de Power Automate.'
      }
    ],
    videos: [
      {
        id: 201,
        title: 'Introducción a Power Automate - Curso Básico',
        thumbnail: '🎥',
        duration: '45:20',
        views: '250K',
        url: 'https://www.youtube.com/watch?v=power_automate_basics'
      },
      {
        id: 202,
        title: 'Power Automate - Automatizaciones Avanzadas',
        thumbnail: '🎥',
        duration: '1:15:30',
        views: '180K',
        url: 'https://www.youtube.com/watch?v=power_automate_advanced'
      }
    ],
    courses: [
      {
        title: 'Fundamentos de Power Automate',
        platform: 'Microsoft Learn',
        duration: '4 horas',
        level: 'Principiante',
        url: 'https://learn.microsoft.com/es-es/training/paths/automate-process-power-automate',
        isFree: true
      },
      {
        title: 'Automatización de Procesos Empresariales',
        platform: 'Microsoft Learn',
        duration: '6 horas',
        level: 'Intermedio',
        url: 'https://learn.microsoft.com/es-es/training/paths/business-process-power-automate',
        isFree: true
      },
      {
        title: 'Desarrollo de Soluciones RPA',
        platform: 'Microsoft Learn',
        duration: '8 horas',
        level: 'Avanzado',
        url: 'https://learn.microsoft.com/es-es/training/paths/rpa-power-automate',
        isFree: false
      }
    ]
  }
];