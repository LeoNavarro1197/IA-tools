import React from 'react';
import { coursesTools } from '../data/tools/courses';
import ToolCard from '../components/ToolCard';
import ScrollToTop from '../components/ScrollToTop';

const Courses = () => {
  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses-section');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen bg-dark-900">
      <ScrollToTop />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-500/10 to-secondary-500/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Cursos Online</h1>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Explora nuestra selección de cursos y recursos educativos para mejorar tus habilidades en inteligencia artificial y tecnologías emergentes
            </p>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="bg-dark-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">{coursesTools.length}</div>
              <div className="text-dark-300">Cursos Disponibles</div>
            </div>
            <div className="bg-dark-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-secondary-500 mb-2">100%</div>
              <div className="text-dark-300">Acceso Inmediato</div>
            </div>
            <div className="bg-dark-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">24/7</div>
              <div className="text-dark-300">Soporte Disponible</div>
            </div>
          </div>
        </div>
      </div>

      {/* Características */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-dark-800 rounded-lg p-6">
            <div className="text-2xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Aprendizaje Personalizado</h3>
            <p className="text-dark-300">Cursos adaptados a diferentes niveles y necesidades específicas</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-6">
            <div className="text-2xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Certificaciones</h3>
            <p className="text-dark-300">Obtén certificados reconocidos al completar los cursos</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-6">
            <div className="text-2xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-2">Proyectos Prácticos</h3>
            <p className="text-dark-300">Aprende haciendo con proyectos del mundo real</p>
          </div>
        </div>

        {/* Cursos Disponibles */}
        <div id="courses-section" className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Cursos Disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Listo para empezar?</h3>
          <p className="text-dark-300 mb-6 max-w-2xl mx-auto">
            Únete a nuestra comunidad de aprendizaje y comienza tu viaje en el mundo de la inteligencia artificial
          </p>
          <button onClick={scrollToCourses} className="btn-primary">
            Explorar Todos los Cursos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;