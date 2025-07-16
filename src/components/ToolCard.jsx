import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const ToolCard = ({ tool }) => {
  const category = categories.find(cat => cat.id === tool.category);
  
  const getPricingBadge = (pricing) => {
    // Si el pricing comienza con $, es un precio específico
    if (pricing && pricing.startsWith('$')) {
      return <span className="badge bg-green-500/20 text-green-400 border border-green-500/30 font-semibold">{pricing}</span>;
    }
    
    switch (pricing) {
      case 'free':
        return <span className="badge-free">Gratis</span>;
      case 'freemium':
        return <span className="badge bg-blue-500/20 text-blue-400 border border-blue-500/30">Freemium</span>;
      case 'premium':
        return <span className="badge-premium">Premium</span>;
      default:
        return null;
    }
  };

  const handleVisit = () => {
    window.open(tool.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Link to={`/tool/${tool.id}`} className="block">
      <div className="card group hover:scale-105 transition-transform duration-300 animate-fade-in cursor-pointer">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-2xl">
            {tool.logo}
          </div>
          <div>
            <h3 className="font-display font-semibold text-lg text-white group-hover:text-primary-400 transition-colors">
              {tool.name}
            </h3>
            <div className="flex items-center space-x-2 mt-1">
              {category && (
                <span className="badge-category">
                  {category.icon} {category.name}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-1">
          {getPricingBadge(tool.pricing)}
          {tool.rating && (
            <div className="flex items-center space-x-1">
              <span className="text-yellow-400">⭐</span>
              <span className="text-sm text-dark-300">{tool.rating}</span>
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-dark-300 text-sm mb-4 line-clamp-3">
        {tool.description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tool.features.slice(0, 3).map((feature, index) => (
          <span 
            key={index}
            className="px-2 py-1 bg-dark-700 text-dark-300 text-xs rounded-md border border-dark-600"
          >
            {feature}
          </span>
        ))}
        {tool.features.length > 3 && (
          <span className="px-2 py-1 bg-dark-700 text-dark-400 text-xs rounded-md border border-dark-600">
            +{tool.features.length - 3} más
          </span>
        )}
      </div>

      {/* Stats */}
      {tool.users && (
        <div className="flex items-center justify-between mb-4 text-sm text-dark-400">
          <span>👥 {tool.users} usuarios</span>
          <span>🔥 Popular</span>
        </div>
      )}

        {/* Actions */}
        <div className="flex space-x-3">
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleVisit();
            }}
            className="btn-primary flex-1 flex items-center justify-center space-x-2"
          >
            <span>{tool.type === 'n8n_automation' ? 'Comprar' : 'Probar'}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {tool.type === 'n8n_automation' ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 3H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              )}
            </svg>
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="btn-secondary px-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </Link>
  );
};

export default ToolCard;