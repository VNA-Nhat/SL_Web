// Navbar.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file


function Navbar({ selectedCategory, selectCategory }) {
  useEffect(() => {
    const savedCategory = localStorage.getItem('selectedCategory');
    if (savedCategory) {
      selectCategory(savedCategory);
    }
  }, [selectCategory]);

  const handleCategoryClick = (category) => {
    selectCategory(category);
    localStorage.setItem('selectedCategory', category);
  };

  return (
    <div className="navbar">
      <button onClick={() => handleCategoryClick('Apple')}>Apple</button>
      <button onClick={() => handleCategoryClick('Omega')}>Omega</button>
      <button onClick={() => handleCategoryClick('Rolex')}>Rolex</button>
    </div>
  );
}

export default Navbar;
