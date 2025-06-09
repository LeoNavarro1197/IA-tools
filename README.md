# 🤖 IA Tools Directory

Directorio completo de herramientas de inteligencia artificial, agentes autónomos y MCPs (Model Context Protocols). Una plataforma moderna y elegante para descubrir las mejores herramientas de IA disponibles.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz elegante en modo oscuro con animaciones fluidas
- **🔍 Búsqueda Avanzada**: Encuentra herramientas por nombre, descripción o características
- **📱 Responsive**: Optimizado para dispositivos móviles y desktop
- **🏷️ Categorización**: Herramientas organizadas por categorías y casos de uso
- **🤖 Sección Especializada**: Páginas dedicadas para AI Agents y MCPs
- **⚡ Rendimiento**: Construido con React y optimizado para velocidad

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18
- **Routing**: React Router DOM
- **Estilos**: Tailwind CSS
- **Iconos**: Heroicons (SVG)
- **Animaciones**: CSS Animations + Tailwind

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd ia-project
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm start
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
ia-project/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ToolCard.jsx
│   │   ├── Hero.jsx
│   │   ├── CategoryGrid.jsx
│   │   └── FeaturedTools.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Categories.jsx
│   │   ├── CategoryPage.jsx
│   │   ├── Agents.jsx
│   │   └── MCPs.jsx
│   ├── data/
│   │   └── tools.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎯 Funcionalidades Principales

### 🏠 Página Principal
- Hero section con estadísticas en tiempo real
- Herramientas destacadas
- Grid de categorías
- Búsqueda global

### 🗂️ Categorías
- Vista de todas las categorías disponibles
- Filtrado por categoría específica
- Ordenamiento por popularidad, nombre y fecha
- Filtros de precio (Gratis, Freemium, Premium)

### 🤖 AI Agents
- Información sobre agentes de IA
- Tipos de agentes disponibles
- Casos de uso populares
- Herramientas especializadas en agentes

### 🔗 MCPs (Model Context Protocols)
- Explicación de qué son los MCPs
- Cómo funcionan
- Beneficios de su uso
- Herramientas que implementan MCPs

### 🔍 Búsqueda
- Búsqueda en tiempo real
- Resultados por relevancia
- Filtrado por múltiples criterios
- Sugerencias de búsqueda

## 🎨 Personalización

### Colores y Tema
Los colores están definidos en `tailwind.config.js` y pueden ser personalizados:

```javascript
colors: {
  dark: {
    900: '#0f172a',
    800: '#1e293b',
    700: '#334155',
    // ...
  }
}
```

### Datos de Herramientas
Las herramientas están definidas en `src/data/tools.js`. Para agregar nuevas herramientas:

```javascript
{
  id: 'nueva-herramienta',
  name: 'Nueva Herramienta',
  category: 'categoria',
  description: 'Descripción de la herramienta',
  // ... más propiedades
}
```

## 📱 Responsive Design

El sitio está optimizado para:
- 📱 **Mobile**: 320px - 768px
- 📟 **Tablet**: 768px - 1024px
- 🖥️ **Desktop**: 1024px+

## 🚀 Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm test`: Ejecuta las pruebas
- `npm run eject`: Expone la configuración de webpack

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [React](https://reactjs.org/) - Biblioteca de JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Heroicons](https://heroicons.com/) - Iconos SVG
- [React Router](https://reactrouter.com/) - Routing para React

---

**¿Encontraste un bug o tienes una sugerencia?** 
¡Abre un issue o contribuye al proyecto! 🚀