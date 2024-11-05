import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.scss'; // Assurez-vous que le chemin est correct

const Header = () => {
  return (
    <header>
      <div className="logo">
        <NavLink to="/"> {/* Ajout du NavLink pour rediriger vers la page d'accueil */}
          <img src={process.env.PUBLIC_URL + '/images/mehdi-logo.png'} alt="Logo" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/about">À propos</NavLink></li>
          <li><NavLink to="/projects">Projets</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;