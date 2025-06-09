export const categories = [
  { id: 'text', name: 'Generación de Texto', icon: '📝' },
  { id: 'image', name: 'Generación de Imágenes', icon: '🎨' },
  { id: 'video', name: 'Generación de Video', icon: '🎬' },
  { id: 'audio', name: 'Audio y Música', icon: '🎵' },
  { id: 'data', name: 'Análisis de Datos', icon: '📊' },
  { id: 'automation', name: 'Automatización', icon: '⚡' },
  { id: 'development', name: 'Desarrollo', icon: '💻' },
  { id: 'design', name: 'Diseño', icon: '🎯' },
  { id: 'productivity', name: 'Productividad', icon: '📈' },
  { id: 'agents', name: 'Agentes de IA', icon: '🤖' },
  { id: 'mcps', name: 'MCPs', icon: '🔗' }
];

export const tools = [
  {
    id: 1,
    name: 'ChatGPT',
    description: 'Modelo de lenguaje conversacional avanzado para generar texto, responder preguntas y asistir en diversas tareas.',
    category: 'text',
    pricing: 'freemium',
    logo: '🤖',
    features: ['API disponible', 'Multiidioma', 'Conversacional'],
    url: 'https://chat.openai.com',
    rating: 4.8,
    users: '100M+',
    detailedDescription: 'ChatGPT es un modelo de lenguaje de gran escala desarrollado por OpenAI, basado en la arquitectura GPT (Generative Pre-trained Transformer). Está diseñado para entender y generar texto de manera conversacional, permitiendo a los usuarios interactuar con él como si estuvieran chateando con un humano. ChatGPT puede responder preguntas, escribir ensayos, resumir textos, crear contenido creativo, ayudar con programación, y mucho más. Su capacidad para mantener el contexto a lo largo de una conversación lo hace especialmente útil para tareas que requieren múltiples intercambios.',
    howToUse: [
      {
        step: 1,
        title: 'Crear una cuenta en OpenAI',
        description: 'Visita chat.openai.com y regístrate con tu correo electrónico o cuenta de Google/Microsoft.'
      },
      {
        step: 2,
        title: 'Iniciar una conversación',
        description: 'Escribe tu pregunta o instrucción en el campo de texto y presiona Enter para enviar.'
      },
      {
        step: 3,
        title: 'Refinar tus prompts',
        description: 'Para obtener mejores resultados, sé específico en tus instrucciones y proporciona contexto relevante.'
      },
      {
        step: 4,
        title: 'Explorar capacidades avanzadas',
        description: 'Prueba con diferentes tipos de tareas como escritura creativa, programación, o análisis de datos.'
      }
    ],
    videos: [
      {
        id: 101,
        title: 'Introducción a ChatGPT - Tutorial básico',
        thumbnail: '🎥',
        duration: '8:45',
        views: '250K',
        url: 'https://www.youtube.com/watch?v=CfFBYDElD1o'
      },
      {
        id: 102,
        title: 'Cómo escribir prompts efectivos en ChatGPT',
        thumbnail: '📹',
        duration: '12:30',
        views: '180K',
        url: 'https://www.youtube.com/watch?v=CfFBYDElD1o'
      },
      {
        id: 103,
        title: 'ChatGPT para programadores - Casos prácticos',
        thumbnail: '🎬',
        duration: '15:20',
        views: '120K',
        url: 'https://www.youtube.com/watch?v=CfFBYDElD1o'
      }
    ],
    comments: [
      {
        id: 101,
        user: 'Carlos Rodríguez',
        avatar: '👨‍💼',
        rating: 5,
        date: '2024-02-10',
        comment: 'ChatGPT ha revolucionado mi forma de trabajar. Lo uso diariamente para redactar emails y generar ideas.'
      },
      {
        id: 102,
        user: 'Laura Martínez',
        avatar: '👩‍🏫',
        rating: 4,
        date: '2024-02-05',
        comment: 'Excelente herramienta para educadores. Lo utilizo para crear materiales didácticos y responder dudas de estudiantes.'
      },
      {
        id: 103,
        user: 'Miguel Sánchez',
        avatar: '👨‍💻',
        rating: 5,
        date: '2024-01-28',
        comment: 'Como programador, me ayuda a resolver problemas de código y explicar conceptos complejos. ¡Imprescindible!'
      }
    ]
  },
  {
    id: 2,
    name: 'DALL-E 3',
    description: 'Generador de imágenes de alta calidad a partir de descripciones de texto con capacidades artísticas avanzadas.',
    category: 'image',
    pricing: 'premium',
    logo: '🎨',
    features: ['Alta resolución', 'Estilos variados', 'API'],
    url: 'https://openai.com/dall-e-3',
    rating: 4.7,
    users: '50M+',
    detailedDescription: 'DALL-E 3 es la tercera generación del revolucionario modelo de generación de imágenes de OpenAI. Utilizando técnicas avanzadas de aprendizaje profundo, DALL-E 3 puede crear imágenes detalladas y realistas a partir de descripciones textuales. Este modelo ha mejorado significativamente en la comprensión de instrucciones complejas, la representación de texto dentro de imágenes, y la generación de composiciones coherentes con múltiples elementos. DALL-E 3 puede generar imágenes en diversos estilos artísticos, desde fotorrealismo hasta ilustraciones estilizadas, pinturas al óleo, o arte digital.',
    howToUse: [
      {
        step: 1,
        title: 'Acceder a DALL-E 3',
        description: 'Puedes usar DALL-E 3 a través de ChatGPT Plus o directamente desde la API de OpenAI.'
      },
      {
        step: 2,
        title: 'Escribir un prompt detallado',
        description: 'Describe con precisión la imagen que deseas generar, incluyendo estilo, elementos, colores y composición.'
      },
      {
        step: 3,
        title: 'Refinar resultados',
        description: 'Si la imagen generada no cumple tus expectativas, ajusta tu prompt para ser más específico o cambiar aspectos particulares.'
      },
      {
        step: 4,
        title: 'Descargar o compartir',
        description: 'Una vez satisfecho con el resultado, puedes descargar la imagen o compartirla directamente.'
      }
    ],
    videos: [
      {
        id: 201,
        title: 'DALL-E 3: Revolución en la generación de imágenes',
        thumbnail: '🎥',
        duration: '10:15',
        views: '320K',
        url: 'https://www.youtube.com/watch?v=CfFBYDElD1o'
      },
      {
        id: 202,
        title: 'Cómo escribir prompts perfectos para DALL-E 3',
        thumbnail: '📹',
        duration: '14:30',
        views: '280K',
        url: 'https://www.youtube.com/watch?v=CfFBYDElD1o'
      },
      {
        id: 203,
        title: 'DALL-E 3 para diseñadores - Técnicas avanzadas',
        thumbnail: '🎬',
        duration: '20:45',
        views: '150K',
        url: 'https://www.youtube.com/watch?v=CfFBYDElD1o'
      }
    ],
    comments: [
      {
        id: 201,
        user: 'Ana López',
        avatar: '👩‍🎨',
        rating: 5,
        date: '2024-02-15',
        comment: 'Como diseñadora, DALL-E 3 ha transformado mi flujo de trabajo. La calidad de las imágenes es impresionante.'
      },
      {
        id: 202,
        user: 'Javier Moreno',
        avatar: '👨‍🏫',
        rating: 4,
        date: '2024-02-08',
        comment: 'Excelente para crear material visual educativo. Aún tiene dificultades con algunas instrucciones complejas.'
      },
      {
        id: 203,
        user: 'Elena Torres',
        avatar: '👩‍💼',
        rating: 5,
        date: '2024-01-30',
        comment: 'Uso DALL-E 3 para crear imágenes para marketing digital. Los resultados son profesionales y ahorran mucho tiempo.'
      }
    ]
  },
  {
    id: 3,
    name: 'Midjourney',
    description: 'Plataforma de generación de imágenes artísticas con estilos únicos y calidad excepcional.',
    category: 'image',
    pricing: 'premium',
    logo: '🌟',
    features: ['Calidad artística', 'Comunidad', 'Estilos únicos'],
    url: 'https://midjourney.com',
    rating: 4.9,
    users: '20M+',
    detailedDescription: 'Midjourney es una herramienta de IA que genera imágenes a partir de descripciones textuales, destacándose por su enfoque artístico y estético. A diferencia de otros generadores de imágenes, Midjourney se caracteriza por producir resultados con un estilo visual distintivo y una calidad artística excepcional. La plataforma opera principalmente a través de Discord, donde los usuarios pueden interactuar con el bot de Midjourney en canales específicos. Con cada nueva versión, Midjourney ha mejorado significativamente en aspectos como el realismo, la coherencia visual y la interpretación de prompts complejos.',
    howToUse: [
      {
        step: 1,
        title: 'Unirse al servidor de Discord',
        description: 'Regístrate en Discord y únete al servidor oficial de Midjourney para acceder al bot.'
      },
      {
        step: 2,
        title: 'Suscribirse a un plan',
        description: 'Elige un plan de suscripción que se adapte a tus necesidades de generación de imágenes.'
      },
      {
        step: 3,
        title: 'Crear prompts con el comando /imagine',
        description: 'Usa el comando /imagine seguido de tu descripción detallada para generar imágenes.'
      },
      {
        step: 4,
        title: 'Refinar y variar resultados',
        description: 'Utiliza los botones U1-U4 para mejorar versiones específicas o V1-V4 para crear variaciones.'
      }
    ],
    videos: [
      {
        id: 301,
        title: 'Guía completa de Midjourney v6',
        thumbnail: '🎥',
        duration: '18:30',
        views: '420K',
        url: 'https://www.youtube.com/watch?v=CfFBYDElD1o'
      },
      {
        id: 302,
        title: 'Técnicas avanzadas de prompting en Midjourney',
        thumbnail: '📹',
        duration: '22:15',
        views: '310K',
        url: 'https://www.youtube.com/watch?v=CfFBYDElD1o'
      },
      {
        id: 303,
        title: 'Midjourney para ilustradores y artistas digitales',
        thumbnail: '🎬',
        duration: '25:40',
        views: '280K',
        url: 'https://www.youtube.com/watch?v=CfFBYDElD1o'
      }
    ],
    comments: [
      {
        id: 301,
        user: 'Pablo Hernández',
        avatar: '👨‍🎨',
        rating: 5,
        date: '2024-02-18',
        comment: 'La calidad artística de Midjourney es insuperable. He creado ilustraciones para libros que parecen hechas por artistas profesionales.'
      },
      {
        id: 302,
        user: 'Sofía Ramírez',
        avatar: '👩‍💻',
        rating: 5,
        date: '2024-02-12',
        comment: 'La comunidad de Midjourney es increíblemente inspiradora. Aprendo constantemente viendo los trabajos de otros usuarios.'
      },
      {
        id: 303,
        user: 'Daniel Ortiz',
        avatar: '👨‍💼',
        rating: 4,
        date: '2024-02-05',
        comment: 'Excelente para crear conceptos visuales rápidamente. La interfaz de Discord puede ser confusa al principio, pero te acostumbras.'
      }
    ]
  },
  {
    id: 4,
    name: 'Runway ML',
    description: 'Suite completa de herramientas de IA para creación de video, incluyendo generación y edición.',
    category: 'video',
    pricing: 'freemium',
    logo: '🎬',
    features: ['Generación de video', 'Edición IA', 'Efectos'],
    url: 'https://runwayml.com',
    rating: 4.6,
    users: '5M+',
    videos: [
      {
        id: 301,
        title: 'Guía completa de Midjourney v6',
        thumbnail: '🎥',
        duration: '18:30',
        views: '420K',
        url: 'https://www.youtube.com/watch?v=yS16SCrV8Lw'
      },
    ]
  },
  {
    id: 5,
    name: 'ElevenLabs',
    description: 'Generación de voz sintética realista con clonación de voz y múltiples idiomas.',
    category: 'audio',
    pricing: 'freemium',
    logo: '🎤',
    features: ['Clonación de voz', 'Multiidioma', 'Realista'],
    url: 'https://elevenlabs.io',
    rating: 4.8,
    users: '10M+'
  },
  {
    id: 6,
    name: 'GitHub Copilot',
    description: 'Asistente de programación IA que sugiere código y ayuda en el desarrollo de software.',
    category: 'development',
    pricing: 'premium',
    logo: '👨‍💻',
    features: ['Autocompletado', 'Múltiples lenguajes', 'Integración IDE'],
    url: 'https://github.com/features/copilot',
    rating: 4.5,
    users: '1M+'
  },
  {
    id: 7,
    name: 'Notion AI',
    description: 'Asistente de escritura integrado en Notion para mejorar la productividad y organización.',
    category: 'productivity',
    pricing: 'freemium',
    logo: '📝',
    features: ['Escritura asistida', 'Organización', 'Integrado'],
    url: 'https://notion.so/ai',
    rating: 4.4,
    users: '30M+'
  },
  {
    id: 8,
    name: 'Zapier AI',
    description: 'Automatización inteligente de flujos de trabajo entre diferentes aplicaciones y servicios.',
    category: 'automation',
    pricing: 'freemium',
    logo: '⚡',
    features: ['Automatización', 'Integraciones', 'Flujos inteligentes'],
    url: 'https://zapier.com/ai',
    rating: 4.3,
    users: '5M+'
  },
  {
    id: 9,
    name: 'Claude',
    description: 'Asistente de IA conversacional con capacidades avanzadas de razonamiento y análisis.',
    category: 'text',
    pricing: 'freemium',
    logo: '🧠',
    features: ['Razonamiento', 'Análisis largo', 'Seguro'],
    url: 'https://claude.ai',
    rating: 4.7,
    users: '15M+'
  },
  {
    id: 10,
    name: 'Stable Diffusion',
    description: 'Modelo de generación de imágenes de código abierto con control total sobre el proceso.',
    category: 'image',
    pricing: 'free',
    logo: '🔓',
    features: ['Código abierto', 'Control total', 'Personalizable'],
    url: 'https://stability.ai',
    rating: 4.5,
    users: '25M+'
  },
  {
    id: 11,
    name: 'Automatización de Email Marketing',
    description: 'Automatización completa de campañas de email marketing con segmentación inteligente y seguimiento de métricas.',
    category: 'agents',
    pricing: '$299',
    logo: '📧',
    features: ['Segmentación automática', 'A/B Testing', 'Métricas en tiempo real', 'Integración CRM'],
    url: '#',
    rating: 4.9,
    users: '150+',
    price: 299,
    currency: 'USD',
    type: 'n8n_automation'
  },
  {
    id: 13,
    name: 'Sistema de Gestión de Leads',
    description: 'Automatización para captura, calificación y seguimiento de leads desde múltiples canales.',
    category: 'agents',
    pricing: '$199',
    logo: '🎯',
    features: ['Captura multicanal', 'Scoring automático', 'Seguimiento personalizado', 'Reportes detallados'],
    url: '#',
    rating: 4.8,
    users: '200+',
    price: 199,
    currency: 'USD',
    type: 'n8n_automation'
  },
  {
    id: 14,
    name: 'Automatización de Redes Sociales',
    description: 'Gestión automática de contenido en redes sociales con programación inteligente y análisis de engagement.',
    category: 'agents',
    pricing: '$149',
    logo: '📱',
    features: ['Programación automática', 'Análisis de engagement', 'Respuestas automáticas', 'Hashtags inteligentes'],
    url: '#',
    rating: 4.7,
    users: '300+',
    price: 149,
    currency: 'USD',
    type: 'n8n_automation'
  },
  {
    id: 15,
    name: 'Sistema de Facturación Automática',
    description: 'Automatización completa del proceso de facturación desde la generación hasta el seguimiento de pagos.',
    category: 'agents',
    pricing: '$249',
    logo: '💰',
    features: ['Generación automática', 'Recordatorios de pago', 'Integración contable', 'Reportes financieros'],
    url: '#',
    rating: 4.9,
    users: '120+',
    price: 249,
    currency: 'USD',
    type: 'n8n_automation'
  },
  {
    id: 16,
    name: 'Automatización de Atención al Cliente',
    description: 'Sistema inteligente de tickets y respuestas automáticas con escalamiento y seguimiento.',
    category: 'agents',
    pricing: '$179',
    logo: '🎧',
    features: ['Tickets automáticos', 'Respuestas inteligentes', 'Escalamiento automático', 'Base de conocimiento'],
    url: '#',
    rating: 4.8,
    users: '250+',
    price: 179,
    currency: 'USD',
    type: 'n8n_automation'
  },
  {
    id: 17,
    name: 'Sistema de Backup Automático',
    description: 'Automatización de respaldos de datos con verificación de integridad y notificaciones.',
    category: 'agents',
    pricing: '$99',
    logo: '💾',
    features: ['Backup programado', 'Verificación de integridad', 'Múltiples destinos', 'Alertas automáticas'],
    url: '#',
    rating: 4.6,
    users: '180+',
    price: 99,
    currency: 'USD',
    type: 'n8n_automation'
   },
   {
    id: 12,
    name: 'LangChain MCP',
    description: 'Protocolo de contexto de modelo para conectar LLMs con herramientas externas.',
    category: 'mcps',
    pricing: 'free',
    logo: '🔗',
    features: ['Protocolo abierto', 'Conectividad', 'Extensible'],
    url: 'https://github.com/langchain-ai/langchain',
    rating: 4.6,
    users: '500K+'
  }
];

export const featuredTools = tools.filter(tool => [1, 2, 3, 4, 5].includes(tool.id));

export const getToolsByCategory = (categoryId) => {
  if (!categoryId) return tools;
  return tools.filter(tool => tool.category === categoryId);
};

export const searchTools = (query) => {
  if (!query) return tools;
  const lowercaseQuery = query.toLowerCase();
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
};