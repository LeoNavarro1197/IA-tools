import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ToolCard from '../components/ToolCard';
import { categories, getToolsByCategory } from '../data/tools';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [tools, setTools] = useState([]);
  const [category, setCategory] = useState(null);
  const [sortBy, setSortBy] = useState('popular');
  const [filterBy, setFilterBy] = useState('all');

  useEffect(() => {
    const categoryData = categories.find(cat => cat.id === categoryId);
    const categoryTools = getToolsByCategory(categoryId);
    
    setCategory(categoryData);
    setTools(categoryTools);
  }, [categoryId]);

  const filteredAndSortedTools = () => {
    let filtered = tools;
    
    // Filter by pricing
    if (filterBy !== 'all') {
      filtered = tools.filter(tool => tool.pricing === filterBy);
    }
    
    // Sort tools
    switch (sortBy) {
      case 'popular':
        return filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'name':
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      case 'newest':
        return filtered.sort((a, b) => b.id - a.id);
      default:
        return filtered;
    }
  };

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <h2 className="text-2xl font-bold text-white mb-2">Categoría no encontrada</h2>
          <p className="text-dark-400 mb-6">La categoría que buscas no existe o ha sido movida.</p>
          <Link to="/categories" className="btn-primary">
            Ver todas las categorías
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <Link to="/" className="text-dark-400 hover:text-white transition-colors">
            Inicio
          </Link>
          <span className="text-dark-600">›</span>
          <Link to="/categories" className="text-dark-400 hover:text-white transition-colors">
            Categorías
          </Link>
          <span className="text-dark-600">›</span>
          <span className="text-white">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl flex items-center justify-center">
              <span className="text-5xl">{category.icon}</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-dark-300 max-w-3xl mx-auto mb-6">
            {getCategoryDescription(category.id)}
          </p>
          <div className="inline-flex items-center space-x-4 bg-dark-800 rounded-xl px-6 py-3 border border-dark-700">
            <span className="text-primary-400 font-semibold">
              {tools.length} herramienta{tools.length !== 1 ? 's' : ''} disponible{tools.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-4">
            {/* Filter by pricing */}
            <div className="flex items-center space-x-2">
              <label className="text-sm text-dark-400">Filtrar por:</label>
              <select 
                value={filterBy} 
                onChange={(e) => setFilterBy(e.target.value)}
                className="input-field py-2 text-sm"
              >
                <option value="all">Todos</option>
                <option value="free">Gratis</option>
                <option value="freemium">Freemium</option>
                <option value="premium">Premium</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <label className="text-sm text-dark-400">Ordenar por:</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="input-field py-2 text-sm"
            >
              <option value="popular">Más populares</option>
              <option value="name">Nombre A-Z</option>
              <option value="newest">Más recientes</option>
            </select>
          </div>
        </div>

        {/* Tools Grid */}
        {filteredAndSortedTools().length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedTools().map((tool, index) => (
              <div 
                key={tool.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ToolCard tool={tool} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No se encontraron herramientas</h3>
            <p className="text-dark-400 mb-6">
              No hay herramientas que coincidan con los filtros seleccionados.
            </p>
            <button 
              onClick={() => {
                setFilterBy('all');
                setSortBy('popular');
              }}
              className="btn-primary"
            >
              Limpiar filtros
            </button>
          </div>
        )}

        {/* Related Categories */}
        <div className="mt-16">
          <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
            Categorías Relacionadas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories
              .filter(cat => cat.id !== categoryId)
              .slice(0, 4)
              .map((relatedCategory) => (
                <Link
                  key={relatedCategory.id}
                  to={`/category/${relatedCategory.id}`}
                  className="group block"
                >
                  <div className="card text-center hover:border-primary-500/50 transition-all duration-300 group-hover:scale-105">
                    <div className="text-3xl mb-3">{relatedCategory.icon}</div>
                    <h4 className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {relatedCategory.name}
                    </h4>
                    <p className="text-dark-400 text-sm mt-2">
                      {getToolsByCategory(relatedCategory.id).length} herramientas
                    </p>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function
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

export default CategoryPage;