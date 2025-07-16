import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';
import emailjs from '@emailjs/browser';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    toolName: '',
    toolUrl: '',
    description: '',
    category: '',
    userEmail: '',
    userName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();
  const navigate = useNavigate();

  // Inicializar EmailJS con la clave pública
  useEffect(() => {
    emailjs.init({
      publicKey: 'pgHhdoVTG3mxqoAJz',
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitRecommendation = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Registra los datos en la consola para verificar
      console.log('Datos de recomendación:', formData);
      
      // Crear un objeto FormData para enviar
      const templateParams = {
        to_name: 'leonavarro1197@gmail.com', // Cambiado de to_email a to_name
        from_name: formData.userName || 'Usuario Anónimo',
        reply_to: formData.userEmail || 'no-reply@example.com', // Añadido reply_to
        tool_name: formData.toolName,
        tool_url: formData.toolUrl,
        description: formData.description,
        category: formData.category,
        message: `Nueva recomendación de herramienta IA:\n\nNombre: ${formData.toolName}\nURL: ${formData.toolUrl}\nCategoría: ${formData.category}\nDescripción: ${formData.description}\n\nRecomendado por: ${formData.userName || 'Usuario Anónimo'}\nEmail: ${formData.userEmail || 'No proporcionado'}`
      };
      
      // Modo de prueba - Simular éxito para verificar que el formulario funciona
      //console.log('Simulando envío exitoso...');
      //await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Descomentar esto cuando estés listo para enviar emails reales
       const result = await emailjs.send(
         'service_30x4rqg',
         'template_qxd9s0q',
         templateParams
       );
       console.log('Resultado del envío:', result);
      
      
      alert('¡Gracias por tu recomendación! La hemos recibido correctamente.');
      setFormData({
        toolName: '',
        toolUrl: '',
        description: '',
        category: '',
        userEmail: '',
        userName: ''
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error al enviar la recomendación:', error);
      if (error.text) {
        console.error('Mensaje de error:', error.text);
      }
      alert(`Hubo un error al enviar tu recomendación: ${error.message || 'Error desconocido'}. Por favor, intenta nuevamente.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <header className="bg-dark-900 border-b border-dark-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🤖</span>
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-gradient">
                IA Tools
              </h1>
              <p className="text-xs text-dark-400">Directorio de Herramientas</p>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar herramientas de IA..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field w-full pl-10 pr-4"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-dark-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </form>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-dark-300 hover:text-white transition-colors">
              Inicio
            </Link>
            <Link to="/categories" className="text-dark-300 hover:text-white transition-colors">
              Categorías
            </Link>
            <Link to="/agents" className="text-dark-300 hover:text-white transition-colors">
              Agentes
            </Link>
            <Link to="/mcps" className="text-dark-300 hover:text-white transition-colors">
              MCPs
            </Link>
            <Link to="/courses" className="text-dark-300 hover:text-white transition-colors">
              Cursos
            </Link>
            <button 
              className="btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              Enviar Herramienta
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-dark-400 hover:text-white hover:bg-dark-800 transition-colors"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar herramientas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field w-full pl-10 pr-4"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-dark-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-dark-800 border-t border-dark-700">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/" 
              className="block text-dark-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link 
              to="/categories" 
              className="block text-dark-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorías
            </Link>
            <Link 
              to="/agents" 
              className="block text-dark-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Agentes
            </Link>
            <Link 
              to="/mcps" 
              className="block text-dark-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              MCPs
            </Link>
            <Link 
              to="/courses" 
              className="block text-dark-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cursos
            </Link>
            <button 
              className="btn-primary w-full mt-4"
              onClick={() => setIsModalOpen(true)}
            >
              Enviar Herramienta
            </button>
          </div>
        </div>
      )}

      {/* Modal para recomendar herramientas */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-800 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Recomendar Herramienta IA</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-dark-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleSubmitRecommendation} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-1">
                    Nombre de la herramienta *
                  </label>
                  <input
                    type="text"
                    name="toolName"
                    value={formData.toolName}
                    onChange={handleInputChange}
                    required
                    className="input-field w-full"
                    placeholder="Ej: ChatGPT, Midjourney..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-1">
                    URL de la herramienta *
                  </label>
                  <input
                    type="url"
                    name="toolUrl"
                    value={formData.toolUrl}
                    onChange={handleInputChange}
                    required
                    className="input-field w-full"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-1">
                    Categoría *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="input-field w-full"
                  >
                    <option value="">Selecciona una categoría</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-1">
                    Descripción *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="input-field w-full resize-none"
                    placeholder="Describe qué hace esta herramienta y por qué la recomiendas..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-1">
                    Tu nombre (opcional)
                  </label>
                  <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleInputChange}
                    className="input-field w-full"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-dark-300 mb-1">
                    Tu email (opcional)
                  </label>
                  <input
                    type="email"
                    name="userEmail"
                    value={formData.userEmail}
                    onChange={handleInputChange}
                    className="input-field w-full"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-4 py-2 border border-dark-600 text-dark-300 rounded-lg hover:bg-dark-700 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Recomendación'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;