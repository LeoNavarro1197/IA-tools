import React from 'react';
import ToolCard from '../components/ToolCard';
import { tools } from '../data/tools';

const Agents = () => {
  const agentTools = tools.filter(tool => tool.category === 'agents');

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl flex items-center justify-center">
              <span className="text-5xl">🤖</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Automatizaciones <span className="text-gradient">n8n</span>
          </h1>
          <p className="text-xl text-dark-300 max-w-4xl mx-auto mb-8">
            Automatizaciones profesionales desarrolladas con n8n para optimizar tus procesos 
            empresariales y aumentar tu productividad de forma inmediata.
          </p>
        </div>

        {/* What are AI Agents Section */}
        <div className="mb-16">
          <div className="card bg-gradient-to-br from-primary-900/20 to-primary-800/20 border-primary-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-4">
                  ¿Por qué elegir nuestras automatizaciones?
                </h2>
                <p className="text-dark-300 mb-6">
                  Nuestras automatizaciones están desarrolladas con n8n, una plataforma líder 
                  en automatización de flujos de trabajo. Cada solución está probada, optimizada 
                  y lista para implementar en tu negocio.
                </p>
                <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center">
                        <span className="text-primary-400 text-sm">✓</span>
                      </div>
                      <span className="text-dark-200">Implementación inmediata</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center">
                        <span className="text-primary-400 text-sm">✓</span>
                      </div>
                      <span className="text-dark-200">Soporte técnico incluido</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center">
                        <span className="text-primary-400 text-sm">✓</span>
                      </div>
                      <span className="text-dark-200">Integración con 400+ servicios</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-primary-500/20 rounded-full flex items-center justify-center">
                        <span className="text-primary-400 text-sm">✓</span>
                      </div>
                      <span className="text-dark-200">Personalización disponible</span>
                    </div>
                  </div>
              </div>
              <div className="text-center">
                <div className="relative">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-full flex items-center justify-center">
                        <span className="text-6xl">🧠</span>
                      </div>
                    </div>
                  </div>
                  {/* Floating icons */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-xl">⚡</span>
                  </div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                    <span className="text-xl">🔧</span>
                  </div>
                  <div className="absolute top-1/2 left-0 w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '2s' }}>
                    <span className="text-xl">📊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Categorías de Automatización
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="font-semibold text-lg text-white mb-2">Marketing Digital</h3>
              <p className="text-dark-300 text-sm">
                Automatizaciones para email marketing, redes sociales, 
                lead nurturing y análisis de campañas.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-semibold text-lg text-white mb-2">Gestión de Leads</h3>
              <p className="text-dark-300 text-sm">
                Captura, calificación y seguimiento automático de 
                prospectos desde múltiples canales.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-semibold text-lg text-white mb-2">Facturación</h3>
              <p className="text-dark-300 text-sm">
                Automatización completa del proceso de facturación, 
                recordatorios de pago y reportes financieros.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">🎧</div>
              <h3 className="font-semibold text-lg text-white mb-2">Atención al Cliente</h3>
              <p className="text-dark-300 text-sm">
                Sistemas de tickets automáticos, respuestas inteligentes 
                y escalamiento de consultas.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="font-semibold text-lg text-white mb-2">Backup y Seguridad</h3>
              <p className="text-dark-300 text-sm">
                Respaldos automáticos, verificación de integridad 
                y alertas de seguridad.
              </p>
            </div>
            <div className="card">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold text-lg text-white mb-2">Reportes y Analytics</h3>
              <p className="text-dark-300 text-sm">
                Generación automática de reportes, dashboards 
                y análisis de métricas empresariales.
              </p>
            </div>
          </div>
        </div>

        {/* Available Agents */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Automatizaciones Disponibles
          </h2>
          {agentTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {agentTools.map((tool, index) => (
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
              <h3 className="text-2xl font-bold text-white mb-2">Próximamente</h3>
              <p className="text-dark-400 mb-6">
                Estamos agregando más agentes de IA a nuestro directorio. 
                ¡Mantente atento a las actualizaciones!
              </p>
            </div>
          )}
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
            Casos de Uso Populares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="font-semibold text-xl text-white mb-4">🏢 Empresas</h3>
              <ul className="space-y-2 text-dark-300">
                <li>• Automatización de atención al cliente</li>
                <li>• Análisis de datos y reportes automáticos</li>
                <li>• Gestión de inventarios y logística</li>
                <li>• Optimización de procesos internos</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-xl text-white mb-4">👨‍💻 Desarrolladores</h3>
              <ul className="space-y-2 text-dark-300">
                <li>• Generación automática de código</li>
                <li>• Testing y debugging automatizado</li>
                <li>• Documentación de proyectos</li>
                <li>• Optimización de rendimiento</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-xl text-white mb-4">🎨 Creativos</h3>
              <ul className="space-y-2 text-dark-300">
                <li>• Generación de ideas y conceptos</li>
                <li>• Creación de contenido multimedia</li>
                <li>• Edición y post-producción</li>
                <li>• Gestión de proyectos creativos</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-xl text-white mb-4">📚 Investigadores</h3>
              <ul className="space-y-2 text-dark-300">
                <li>• Revisión de literatura científica</li>
                <li>• Análisis de datos experimentales</li>
                <li>• Síntesis de información compleja</li>
                <li>• Generación de hipótesis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card bg-gradient-to-br from-secondary-900/20 to-secondary-800/20 border-secondary-700/50">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              ¿Necesitas una automatización personalizada?
            </h3>
            <p className="text-dark-300 mb-6">
              Desarrollamos automatizaciones a medida para tu negocio. 
              Contáctanos y cuéntanos qué procesos quieres optimizar.
            </p>
            <button className="btn-primary">
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;