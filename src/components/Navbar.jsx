import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="./logo.png" alt="Logo" className="logo" />
        <h1>FlixFinder</h1>
      </div>
    </nav>
  );
};

export default Navbar;