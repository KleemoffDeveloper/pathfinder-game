import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import picture from './images/PathFinder.png';

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      
      <Link to="/">
        <img className="path-finder-logo" src={picture} alt="Path Finder Logo" />
      </Link>
      <ul className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" class="active">Home</Link></li>
        <li><Link to="/premium-feature">Premium Feature</Link></li>
        <li><Link to="/how-to-play">How to play</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="main">
        <Link to="/sign-in" className="user"><i className="ri-user-fill"></i>Sign In</Link>
        <div className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={toggleMenu}></div>
      </div>
    </nav>
  );
}
