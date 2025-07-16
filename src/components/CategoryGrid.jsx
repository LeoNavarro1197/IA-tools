import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { getToolsByCategory } from '../data/tools';

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Explora por <span className="text-gradient">Categorías</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Encuentra herramientas de IA organizadas por tipo de funcionalidad
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  {/* Category Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl mb-4 group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-all duration-300">
                    <span className="text-3xl">{category.icon}</span>
                  </div>

                  {/* Category Info */}
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-dark-400 text-sm mb-4">
                      {getCategoryDescription(category.id)}
                    </p>

                    {/* Tools Count */}
                    <div className="flex items-center justify-between">
                      <span className="text-dark-500 text-sm">
                        {toolsCount} herramienta{toolsCount !== 1 ? 's' : ''}
                      </span>
                      <svg 
                        className="w-5 h-5 text-dark-600 group-hover:text-primary-400 transition-colors" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Special Sections */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Agents Section */}
          <div className="card bg-gradient-to-br from-primary-900/20 to-primary-800/20 border-primary-700/50">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-white">
                  Agentes de IA
                </h3>
                <p className="text-primary-300 text-sm">El futuro de la automatización</p>
              </div>
            </div>
            <p className="text-dark-300 mb-6">
              Descubre agentes autónomos capaces de realizar tareas complejas de forma independiente, 
              desde automatización de flujos de trabajo hasta asistentes personalizados.
            </p>
            <Link to="/agents" className="btn-primary inline-flex items-center space-x-2">
              <span>Explorar Agentes</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* MCPs Section */}
          <div className="card bg-gradient-to-br from-secondary-900/20 to-secondary-800/20 border-secondary-700/50">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-secondary-500/20 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🔗</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-xl text-white">
                  MCPs (Model Context Protocol)
                </h3>
                <p className="text-secondary-300 text-sm">Conectando modelos de IA</p>
              </div>
            </div>
            <p className="text-dark-300 mb-6">
              Protocolos que permiten a los modelos de IA conectarse con herramientas externas, 
              bases de datos y servicios para expandir sus capacidades.
            </p>
            <Link to="/mcps" className="btn-secondary inline-flex items-center space-x-2">
              <span>Ver MCPs</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper function to get category descriptions
const getCategoryDescription = (categoryId) => {
  const descriptions = {
    text: 'Generadores de texto, chatbots y asistentes de escritura',
    image: 'Creación y edición de imágenes con inteligencia artificial',
    video: 'Generación y edición de videos usando IA',
    audio: 'Síntesis de voz, música y efectos de audio',
    data: 'Análisis, visualización y procesamiento de datos',
    automation: 'Automatización de tareas y flujos de trabajo',
    development: 'Herramientas para desarrolladores y programadores',
    design: 'Diseño gráfico, UI/UX y herramientas creativas',
    productivity: 'Mejora de productividad y organización',
    agents: 'Agentes autónomos y sistemas inteligentes',
    mcps: 'Protocolos de conexión para modelos de IA'
  };
  
  return descriptions[categoryId] || 'Herramientas especializadas de IA';
};

export default CategoryGrid;