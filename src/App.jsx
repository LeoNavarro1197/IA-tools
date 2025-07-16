import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Categories from './pages/Categories';
import CategoryPage from './pages/CategoryPage';
import ToolDetail from './pages/ToolDetail';
import Agents from './pages/Agents';
import MCPs from './pages/MCPs';
import Courses from './pages/Courses';
import { searchTools } from './data/tools/index';
import ToolCard from './components/ToolCard';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (query) => {
    if (query.trim()) {
      const results = searchTools(query);
      setSearchResults(results);
      setIsSearching(true);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  };

  const clearSearch = () => {
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-dark-900 text-white">
        <Header onSearch={handleSearch} />
        
        <main>
          <Routes>
            <Route 
              path="/" 
              element={
                isSearching ? (
                  <SearchResults 
                    results={searchResults} 
                    onClearSearch={clearSearch}
                  />
                ) : (
                  <Home onSearch={handleSearch} />
                )
              } 
            />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/tool/:toolId" element={<ToolDetail />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/mcps" element={<MCPs />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

// Search Results Component
const SearchResults = ({ results, onClearSearch }) => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-white mb-2">
              Resultados de Búsqueda
            </h1>
            <p className="text-dark-400">
              {results.length} herramienta{results.length !== 1 ? 's' : ''} encontrada{results.length !== 1 ? 's' : ''}
            </p>
          </div>
          <button 
            onClick={onClearSearch}
            className="btn-secondary flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span>Limpiar búsqueda</span>
          </button>
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((tool, index) => (
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
            <h3 className="text-2xl font-bold text-white mb-2">No se encontraron resultados</h3>
            <p className="text-dark-400 mb-6">
              Intenta con términos diferentes o explora nuestras categorías.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onClearSearch}
                className="btn-primary"
              >
                Ver todas las herramientas
              </button>
              <button className="btn-secondary">
                Explorar categorías
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;