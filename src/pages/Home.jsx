import React from 'react';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedTools from '../components/FeaturedTools';

const Home = ({ onSearch }) => {
  return (
    <div className="min-h-screen">
      <Hero onSearch={onSearch} />
      <FeaturedTools />
      <CategoryGrid />
    </div>
  );
};

export default Home;