import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { tools, categories } from '../data/tools';

const ToolDetail = () => {
  const { toolId } = useParams();
  const [tool, setTool] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);

  useEffect(() => {
    const foundTool = tools.find(t => t.id === parseInt(toolId));
    setTool(foundTool);
    
    // Cargar los comentarios específicos de la herramienta si existen
    if (foundTool && foundTool.comments) {
      setComments(foundTool.comments);
    } else {
      setComments([]);
    }
  }, [toolId]);

  if (!tool) {
    return (
      <div className="min-h-screen py-16 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <h2 className="text-2xl font-bold text-white mb-2">Herramienta no encontrada</h2>
          <p className="text-dark-400 mb-6">La herramienta que buscas no existe o ha sido eliminada.</p>
          <Link to="/" className="btn-primary">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find(cat => cat.id === tool.category);

  const getPricingBadge = (pricing) => {
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

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        user: 'Usuario Anónimo',
        avatar: '👤',
        rating: newRating,
        date: new Date().toISOString().split('T')[0],
        comment: newComment
      };
      setComments([comment, ...comments]);
      setNewComment('');
      setNewRating(5);
    }
  };

  // Función para obtener los videos específicos de la herramienta o usar videos por defecto
  const getToolVideos = () => {
    if (tool && tool.videos) {
      return tool.videos;
    }
    // Videos por defecto si la herramienta no tiene videos específicos
    return [
      {
        id: 1,
        title: `Cómo usar ${tool.name} - Tutorial básico`,
        thumbnail: '🎥',
        duration: '10:30',
        views: '15.2K',
        url: 'https://www.youtube.com/watch?v=CfFBYDElD1o' // URL del video de ejemplo
      }
    ];
  };

  // Función para extraer el ID del video de YouTube de la URL
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-dark-400 mb-8">
          <Link to="/" className="hover:text-primary-400 transition-colors">Inicio</Link>
          <span>/</span>
          {category && (
            <>
              <Link to={`/category/${category.id}`} className="hover:text-primary-400 transition-colors">
                {category.name}
              </Link>
              <span>/</span>
            </>
          )}
          <span className="text-white">{tool.name}</span>
        </nav>

        {/* Header */}
        <div className="bg-dark-800 rounded-2xl p-8 mb-8 border border-dark-700">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start space-x-6 mb-6 lg:mb-0">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0">
                {tool.logo}
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-display font-bold text-white mb-2">{tool.name}</h1>
                <p className="text-dark-300 text-lg mb-4">{tool.description}</p>
                <div className="flex flex-wrap items-center gap-3">
                  {category && (
                    <span className="badge-category">
                      {category.icon} {category.name}
                    </span>
                  )}
                  {getPricingBadge(tool.pricing)}
                  {tool.rating && (
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-white font-medium">{tool.rating}</span>
                      <span className="text-dark-400">({comments.length} reseñas)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => window.open(tool.url, '_blank', 'noopener,noreferrer')}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Probar ahora</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>Guardar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-dark-700">
            <nav className="flex space-x-8">
              {[
                { id: 'overview', label: 'Descripción', icon: '📋' },
                { id: 'howto', label: 'Cómo usar', icon: '🎯' },
                { id: 'videos', label: 'Videos', icon: '🎥' },
                { id: 'comments', label: 'Comentarios', icon: '💬' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-400'
                      : 'border-transparent text-dark-400 hover:text-dark-200'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Descripción detallada */}
                <div className="card">
                  <h3 className="text-xl font-bold text-white mb-4">Descripción detallada</h3>
                  <p className="text-dark-300 mb-4">
                    {tool.detailedDescription || tool.description}
                  </p>
                </div>
                
                {/* Características principales */}
                <div className="card">
                  <h3 className="text-xl font-bold text-white mb-4">Características principales</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-primary-400">✓</span>
                        <span className="text-dark-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {tool.users && (
                  <div className="card">
                    <h3 className="text-xl font-bold text-white mb-4">Estadísticas</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-400 mb-1">{tool.users}</div>
                        <div className="text-dark-400">Usuarios activos</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-secondary-400 mb-1">{tool.rating}</div>
                        <div className="text-dark-400">Calificación promedio</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'howto' && (
              <div className="card">
                <h3 className="text-xl font-bold text-white mb-6">Cómo usar {tool.name}</h3>
                <div className="space-y-6">
                  {tool.howToUse ? (
                    // Usar las instrucciones específicas de la herramienta
                    tool.howToUse.map((step) => (
                      <div key={step.step} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">{step.title}</h4>
                          <p className="text-dark-300">{step.description}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Instrucciones genéricas si la herramienta no tiene instrucciones específicas
                    <>
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Registro y acceso</h4>
                          <p className="text-dark-300">Visita el sitio web oficial y crea una cuenta gratuita. Algunos planes pueden requerir suscripción.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Configuración inicial</h4>
                          <p className="text-dark-300">Configura tus preferencias y personaliza la herramienta según tus necesidades específicas.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Primeros pasos</h4>
                          <p className="text-dark-300">Comienza con tareas simples para familiarizarte con la interfaz y las funcionalidades básicas.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Explorar funciones avanzadas</h4>
                          <p className="text-dark-300">Una vez cómodo con lo básico, explora las características más avanzadas para maximizar tu productividad.</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'videos' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  {getToolVideos().map((video) => {
                    const videoId = getYouTubeVideoId(video.url);
                    return (
                      <div key={video.id} className="card">
                        <h4 className="font-semibold text-white mb-3">{video.title}</h4>
                        <div className="aspect-w-16 aspect-h-9 mb-3">
                          <iframe 
                            className="w-full h-[300px] rounded-lg"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title={video.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-dark-400">
                            <span>⏱️ {video.duration}</span>
                            <span>👁️ {video.views} visualizaciones</span>
                          </div>
                          <button className="btn-secondary px-4 py-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'comments' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Comentarios y reseñas</h3>
                
                {/* Add Comment Form */}
                <div className="card">
                  <h4 className="font-semibold text-white mb-4">Agregar comentario</h4>
                  <form onSubmit={handleAddComment} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">Calificación</label>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setNewRating(star)}
                            className={`text-2xl ${
                              star <= newRating ? 'text-yellow-400' : 'text-dark-600'
                            }`}
                          >
                            ⭐
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">Comentario</label>
                      <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="input-field w-full h-24 resize-none"
                        placeholder="Comparte tu experiencia con esta herramienta..."
                        required
                      />
                    </div>
                    <button type="submit" className="btn-primary">
                      Publicar comentario
                    </button>
                  </form>
                </div>

                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="card">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center text-lg flex-shrink-0">
                          {comment.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h5 className="font-semibold text-white">{comment.user}</h5>
                              <div className="flex items-center space-x-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <span
                                      key={i}
                                      className={`text-sm ${
                                        i < comment.rating ? 'text-yellow-400' : 'text-dark-600'
                                      }`}
                                    >
                                      ⭐
                                    </span>
                                  ))}
                                </div>
                                <span className="text-sm text-dark-400">{comment.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-dark-300">{comment.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="card">
              <h4 className="font-semibold text-white mb-4">Información rápida</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-dark-400">Categoría:</span>
                  <span className="text-white">{category?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-400">Precio:</span>
                  <span className="text-white capitalize">{tool.pricing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-dark-400">Calificación:</span>
                  <span className="text-white">{tool.rating}/5</span>
                </div>
                {tool.users && (
                  <div className="flex justify-between">
                    <span className="text-dark-400">Usuarios:</span>
                    <span className="text-white">{tool.users}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Related Tools */}
            <div className="card">
              <h4 className="font-semibold text-white mb-4">Herramientas relacionadas</h4>
              <div className="space-y-3">
                {tools
                  .filter(t => t.category === tool.category && t.id !== tool.id)
                  .slice(0, 3)
                  .map((relatedTool) => (
                    <Link
                      key={relatedTool.id}
                      to={`/tool/${relatedTool.id}`}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-dark-700 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-sm">
                        {relatedTool.logo}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white text-sm">{relatedTool.name}</div>
                        <div className="text-xs text-dark-400">{relatedTool.pricing}</div>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;