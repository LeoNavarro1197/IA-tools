import { categories } from '../categories';
import { textTools } from './text';
import { imageTools } from './image';
import { videoTools } from './video';
import { audioTools } from './audio';
import { developmentTools } from './development';
import { productivityTools } from './productivity';
import { automationTools } from './automation';
import { mcpsTools } from './mcps';
import { researchTools } from './research';
import { coursesTools } from './courses';

// Combinar todas las herramientas en un solo array
export const tools = [
  ...textTools,
  ...imageTools,
  ...videoTools,
  ...audioTools,
  ...developmentTools,
  ...productivityTools,
  ...automationTools,
  ...mcpsTools,
  ...researchTools,
  ...coursesTools
];

// Herramientas destacadas
export const featuredTools = tools.filter(tool => ['perplexity', 'gamma', 'telepatia', 'fathom', 'power_automate_courses'].includes(tool.id));

// Obtener herramientas por categoría
export const getToolsByCategory = (categoryId) => {
  if (!categoryId) return tools;
  return tools.filter(tool => tool.category === categoryId);
};

// Buscar herramientas
export const searchTools = (query) => {
  if (!query) return tools;
  const lowercaseQuery = query.toLowerCase();
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseQuery) ||
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
};