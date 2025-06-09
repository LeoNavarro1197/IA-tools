import React from 'react';
import ToolCard from '../components/ToolCard';
import { tools } from '../data/tools';

const MCPs = () => {
  const mcpTools = tools.filter(tool => tool.category === 'mcps');

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-secondary-500/20 to-accent-500/20 rounded-3xl flex items-center justify-center">
              <span className="text-5xl">🔗</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            <span className="text-gradient">Model Context Protocol</span>
            <br />Conectando IA con el Mundo
          </h1>
          <p className="text-xl text-dark-300 max-w-4xl mx-auto mb-8">
            Los MCPs permiten que los modelos de IA se conecten con herramientas externas, 
            bases de datos y servicios, expandiendo sus capacidades más allá del texto.
          </p>
        </div>

        {/* What is MCP Section */}
        <div className="mb-16">
          <div className="card bg-gradient-to-br from-secondary-900/20 to-secondary-800/20 border-secondary-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-4">
                  ¿Qué es el Model Context Protocol?
                </h2>
                <p className="text-dark-300 mb-6">
                  MCP es un protocolo estándar abierto que permite a los modelos de IA 
                  acceder a recursos externos de forma segura y estructurada, como bases 
                  de datos, APIs, sistemas de archivos y más.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary-500/20 rounded-full flex items-center justify-center">
                      <span className="text-secondary-400 text-sm">✓</span>
                    </div>
                    <span className="text-dark-200">Protocolo estándar y abierto</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary-500/20 rounded-full flex items-center justify-center">
                      <span className="text-secondary-400 text-sm">✓</span>
                    </div>
                    <span className="text-dark-200">Conexión segura con recursos externos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary-500/20 rounded-full flex items-center justify-center">
                      <span className="text-secondary-400 text-sm">✓</span>
                    </div>
                    <span className="text-dark-200">Extensibilidad de capacidades de IA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary-500/20 rounded-full flex items-center justify-center">
                      <span className="text-secondary-400 text-sm">✓</span>
                    </div>
                    <span className="text-dark-200">Interoperabilidad entre plataformas</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="relative">
                  {/* Central AI Model */}
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-secondary-500/30 to-accent-500/30 rounded-full flex items-center justify-center mb-8">
                    <span className="text-4xl">🧠</span>
                  </div>
                  
                  {/* Connected Services */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="w-16 h-16 bg-dark-800 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💾</span>
                    </div>
                    <div className="w-16 h-16 bg-dark-800 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <div className="w-16 h-16 bg-dark-800 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📁</span>
                    </div>
                    <div className="w-16 h-16 bg-dark-800 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <div className="w-16 h-16 bg-dark-800 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div className="w-16 h-16 bg-dark-800 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                  </div>
                  
                  {/* Connection Lines */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
                        </linearGradient>
                      </defs>
                      {/* Lines connecting center to each service */}
                      <line x1="100" y1="80" x2="50" y2="140" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" />
                      <line x1="100" y1="80" x2="100" y2="140" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <line x1="100" y1="80" x2="150" y2="140" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1s' }} />
                      <line x1="100" y1="80" x2="50" y2="180" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                      <line x1="100" y1="80" x2="100" y2="180" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '2s' }} />
                      <line x1="100" y1="80" x2="150" y2="180" stroke="url(#connectionGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How MCPs Work */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Cómo Funcionan los MCPs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔌</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">1. Conexión</h3>
              <p className="text-dark-300 text-sm">
                El modelo de IA se conecta al MCP usando el protocolo estándar, 
                estableciendo una comunicación segura.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">2. Descubrimiento</h3>
              <p className="text-dark-300 text-sm">
                El MCP expone sus capacidades y recursos disponibles al modelo, 
                definiendo qué acciones puede realizar.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-semibold text-lg text-white mb-2">3. Ejecución</h3>
              <p className="text-dark-300 text-sm">
                El modelo puede invocar funciones del MCP para acceder a datos, 
                ejecutar comandos o interactuar con servicios externos.
              </p>
            </div>
          </div>
        </div>

        {/* MCP Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Tipos de MCPs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="font-semibold text-lg text-white mb-2">Base de Datos</h3>
              <p className="text-dark-300 text-sm">
                Conecta con bases de datos SQL/NoSQL para consultar, insertar 
                y actualizar información en tiempo real.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">📁</div>
              <h3 className="font-semibold text-lg text-white mb-2">Sistema de Archivos</h3>
              <p className="text-dark-300 text-sm">
                Accede y manipula archivos locales o en la nube, lee documentos 
                y gestiona contenido multimedia.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="font-semibold text-lg text-white mb-2">APIs Web</h3>
              <p className="text-dark-300 text-sm">
                Integra con servicios web externos, APIs REST, GraphQL 
                y webhooks para expandir funcionalidades.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-semibold text-lg text-white mb-2">Herramientas del Sistema</h3>
              <p className="text-dark-300 text-sm">
                Ejecuta comandos del sistema, scripts y herramientas 
                de línea de comandos de forma controlada.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold text-lg text-white mb-2">Análisis de Datos</h3>
              <p className="text-dark-300 text-sm">
                Conecta con herramientas de análisis, visualización 
                y procesamiento de datos complejos.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-semibold text-lg text-white mb-2">Herramientas Creativas</h3>
              <p className="text-dark-300 text-sm">
                Integra con software de diseño, edición de imágenes 
                y herramientas de creación de contenido.
              </p>
            </div>
          </div>
        </div>

        {/* Available MCPs */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
            MCPs Disponibles
          </h2>
          {mcpTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mcpTools.map((tool, index) => (
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
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-2">Ecosistema en Crecimiento</h3>
              <p className="text-dark-400 mb-6">
                Los MCPs son una tecnología emergente. Estamos agregando nuevos 
                protocolos y conectores constantemente.
              </p>
            </div>
          )}
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Beneficios de los MCPs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="font-semibold text-xl text-white mb-4 flex items-center space-x-2">
                <span>🔒</span>
                <span>Seguridad</span>
              </h3>
              <ul className="space-y-2 text-dark-300">
                <li>• Acceso controlado y autenticado</li>
                <li>• Sandboxing de operaciones</li>
                <li>• Auditoría de todas las acciones</li>
                <li>• Permisos granulares</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-xl text-white mb-4 flex items-center space-x-2">
                <span>🔄</span>
                <span>Interoperabilidad</span>
              </h3>
              <ul className="space-y-2 text-dark-300">
                <li>• Protocolo estándar universal</li>
                <li>• Compatible con múltiples modelos</li>
                <li>• Reutilización de conectores</li>
                <li>• Ecosistema colaborativo</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-xl text-white mb-4 flex items-center space-x-2">
                <span>⚡</span>
                <span>Rendimiento</span>
              </h3>
              <ul className="space-y-2 text-dark-300">
                <li>• Comunicación eficiente</li>
                <li>• Cacheo inteligente</li>
                <li>• Procesamiento en paralelo</li>
                <li>• Optimización automática</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-xl text-white mb-4 flex items-center space-x-2">
                <span>🎯</span>
                <span>Flexibilidad</span>
              </h3>
              <ul className="space-y-2 text-dark-300">
                <li>• Fácil integración</li>
                <li>• Configuración dinámica</li>
                <li>• Extensibilidad modular</li>
                <li>• Adaptación a necesidades específicas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card bg-gradient-to-br from-accent-900/20 to-accent-800/20 border-accent-700/50">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              ¿Desarrollas MCPs?
            </h3>
            <p className="text-dark-300 mb-6">
              Únete al ecosistema MCP y ayuda a expandir las capacidades de la IA. 
              Comparte tus conectores con la comunidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Enviar mi MCP
              </button>
              <button className="btn-secondary">
                Ver Documentación
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MCPs;