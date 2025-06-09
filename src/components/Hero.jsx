import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { tools } from '../data/tools';

const Hero = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState({
    totalTools: 0,
    categories: 0,
    users: '0'
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Calcular estadísticas
    const totalTools = tools.length;
    const categories = new Set(tools.map(tool => tool.category)).size;
    const totalUsers = tools.reduce((acc, tool) => {
      const userCount = tool.users?.replace(/[^0-9]/g, '') || '0';
      return acc + parseInt(userCount);
    }, 0);
    
    setStats({
      totalTools,
      categories,
      users: totalUsers > 1000 ? `${Math.floor(totalUsers / 1000)}K+` : totalUsers.toString()
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
    navigate('/');
  };

  return (
    <section className="relative bg-gradient-dark py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            <span className="text-gradient">
              Descubre el Universo
            </span>
            <br />
            <span className="text-white">
              de la Inteligencia Artificial
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-300 max-w-3xl mx-auto leading-relaxed">
            El directorio más completo de herramientas de IA, agentes autónomos y MCPs. 
            Encuentra la solución perfecta para potenciar tu productividad.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
              {stats.totalTools}+
            </div>
            <div className="text-dark-400 text-sm uppercase tracking-wide">
              Herramientas
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">
              {stats.categories}
            </div>
            <div className="text-dark-400 text-sm uppercase tracking-wide">
              Categorías
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-400 mb-2">
              {stats.users}
            </div>
            <div className="text-dark-400 text-sm uppercase tracking-wide">
              Usuarios Activos
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="¿Qué herramienta de IA necesitas hoy?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-lg bg-dark-800/80 backdrop-blur-sm border border-dark-600 rounded-2xl text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-xl transition-colors duration-200 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="hidden sm:inline">Buscar</span>
              </button>
            </div>
          </form>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => navigate('/categories')}
            className="btn-primary px-8 py-4 text-lg font-semibold flex items-center space-x-2"
          >
            <span>Explorar Categorías</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <button 
            onClick={() => navigate('/agents')}
            className="btn-secondary px-8 py-4 text-lg font-semibold flex items-center space-x-2"
          >
            <span>🤖</span>
            <span>Ver Agentes de IA</span>
          </button>
        </div>

        {/* Popular Tags */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-dark-400 mb-4">Búsquedas populares:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['ChatGPT', 'DALL-E', 'Midjourney', 'GitHub Copilot', 'Claude', 'Agentes'].map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setSearchQuery(tag);
                  if (onSearch) onSearch(tag);
                  navigate('/');
                }}
                className="px-4 py-2 bg-dark-800/50 hover:bg-dark-700 border border-dark-600 rounded-full text-dark-300 hover:text-white transition-colors duration-200 text-sm"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;