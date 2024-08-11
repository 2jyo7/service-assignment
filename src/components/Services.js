"use client"
import ColorSPage from '@/app/color-services/page ';
import FeaturedPage from '@/app/featured/page ';
import HairCutPage from '@/app/haircutting/page ';
import StylingPage from '@/app/styling/page ';
import React, { useState, useRef, useEffect } from 'react';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('Featured');
  const categoryRefs = {
    Featured: useRef(null),
    ColorServices: useRef(null),
    Haircutting: useRef(null),
    Styling: useRef(null),
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedCategory(entry.target.getAttribute('data-category'));
        }
      });
    }, options);

    Object.values(categoryRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(categoryRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [categoryRefs]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    categoryRefs[category].current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollCategories = (direction) => {
    const container = document.getElementById('category-container');
    const scrollAmount = direction === 'right' ? 200 : -200;
    if (container) {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h3>Services</h3>
      <h1>Select Services</h1>
      <div className="categorySelector">
        <button onClick={() => scrollCategories('left')}>&lt;</button>
        <div id="category-container" className="categoryContainer">
          {['Featured', 'ColorServices', 'Haircutting', 'Styling'].map((category) => (
            <div
              key={category}
              className={`category ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <button onClick={() => scrollCategories('right')}>&gt;</button>
      </div>

      <div>
        <div ref={categoryRefs.Featured} data-category="Featured" className="categorySection">
          <FeaturedPage />
        </div>
        <div ref={categoryRefs.ColorServices} data-category="ColorServices" className="categorySection">
          <ColorSPage />
        </div>
        <div ref={categoryRefs.Haircutting} data-category="Haircutting" className="categorySection">
          <HairCutPage />
        </div>
        <div ref={categoryRefs.Styling} data-category="Styling" className="categorySection">
          <StylingPage />
        </div>
      </div>
    </div>
  );
};

export default Services;
