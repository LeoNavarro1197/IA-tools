import React from 'react';
import ToolCard from './ToolCard';
import { featuredTools } from '../data/tools';

const FeaturedTools = () => {
  return (
    <section className="py-16 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Herramientas <span className="text-gradient">Destacadas</span>
          </h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">
            Las herramientas de IA más populares y poderosas del momento
          </p>
        </div>

        {/* Featured Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTools.map((tool, index) => (
            <div 
              key={tool.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-primary px-8 py-4 text-lg font-semibold inline-flex items-center space-x-2">
            <span>Ver Todas las Herramientas</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;