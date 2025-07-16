import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { getToolsByCategory } from '../data/tools';

const Categories = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Todas las <span className="text-gradient">Categorías</span>
          </h1>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto">
            Explora herramientas de IA organizadas por funcionalidad y encuentra exactamente lo que necesitas
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const toolsCount = getToolsByCategory(category.id).length;
            
            return (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="group block animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card h-full hover:border-primary-500/50 transition-all duration-300 group-hover:scale-105">
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-all duration-300">
                      <span className="text-4xl">{category.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-xl text-white mb-1 group-hover:text-primary-400 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-dark-400 text-sm">
                        {toolsCount} herramienta{toolsCount !== 1 ? 's' : ''} disponible{toolsCount !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>

                  {/* Category Description */}
                  <p className="text-dark-300 mb-6">
                    {getCategoryDescription(category.id)}
                  </p>

                  {/* Popular Tools Preview */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-dark-400 mb-3">Herramientas populares:</h4>
                    <div className="flex flex-wrap gap-2">
                      {getPopularToolsForCategory(category.id).map((toolName, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-dark-700 text-dark-300 text-xs rounded-md border border-dark-600"
                        >
                          {toolName}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex items-center justify-between">
                    <span className="text-primary-400 font-medium group-hover:text-primary-300 transition-colors">
                      Explorar categoría
                    </span>
                    <svg 
                      className="w-5 h-5 text-primary-400 group-hover:text-primary-300 group-hover:translate-x-1 transition-all duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-dark-800 rounded-2xl px-8 py-6 border border-dark-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400 mb-1">
                {categories.length}
              </div>
              <div className="text-dark-400 text-sm">Categorías</div>
            </div>
            <div className="w-px h-8 bg-dark-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-400 mb-1">
                {categories.reduce((acc, cat) => acc + getToolsByCategory(cat.id).length, 0)}+
              </div>
              <div className="text-dark-400 text-sm">Herramientas</div>
            </div>
            <div className="w-px h-8 bg-dark-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-400 mb-1">
                100%
              </div>
              <div className="text-dark-400 text-sm">Gratis</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions
const getCategoryDescription = (categoryId) => {
  const descriptions = {
    text: 'Herramientas para generar, editar y optimizar contenido textual. Desde chatbots hasta asistentes de escritura profesional.',
    image: 'Crea, edita y mejora imágenes con inteligencia artificial. Desde generación artística hasta edición fotográfica.',
    video: 'Genera y edita videos usando IA. Incluye herramientas para creación de contenido, efectos y post-producción.',
    audio: 'Síntesis de voz, generación de música y efectos de audio. Herramientas para podcasters, músicos y creadores.',
    data: 'Analiza, visualiza y procesa grandes volúmenes de datos. Herramientas para científicos de datos y analistas.',
    automation: 'Automatiza tareas repetitivas y flujos de trabajo. Conecta aplicaciones y servicios sin código.',
    development: 'Herramientas para desarrolladores: autocompletado de código, debugging y optimización de desarrollo.',
    design: 'Diseño gráfico, UI/UX y herramientas creativas potenciadas por IA para diseñadores y creativos.',
    productivity: 'Mejora tu productividad con asistentes de IA para organización, escritura y gestión de tareas.',
    agents: 'Agentes autónomos capaces de realizar tareas complejas de forma independiente y tomar decisiones.',
    mcps: 'Protocolos que permiten a los modelos de IA conectarse con herramientas externas y expandir capacidades.'
  };
  
  return descriptions[categoryId] || 'Herramientas especializadas de inteligencia artificial';
};

const getPopularToolsForCategory = (categoryId) => {
  const popularTools = {
    text: ['ChatGPT', 'Claude', 'Jasper'],
    image: ['DALL-E', 'Midjourney', 'Stable Diffusion'],
    video: ['Runway ML', 'Pika', 'Synthesia'],
    audio: ['ElevenLabs', 'Murf', 'Speechify'],
    data: ['DataRobot', 'H2O.ai', 'Tableau'],
    automation: ['Zapier AI', 'Make', 'UiPath'],
    development: ['GitHub Copilot', 'Cursor', 'Tabnine'],
    design: ['Figma AI', 'Adobe Firefly', 'Canva'],
    productivity: ['Notion AI', 'Grammarly', 'Otter.ai'],
    agents: ['AutoGPT', 'AgentGPT', 'LangChain'],
    mcps: ['LangChain MCP', 'OpenAI MCP', 'Custom MCPs']
  };
  
  return popularTools[categoryId] || ['Próximamente'];
};

export default Categories;