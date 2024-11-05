import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.scss"; // On inclut le fichier de style associé

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <img src={process.env.PUBLIC_URL + "/images/mehdi-logo.png"} alt="Logo" className="footer-logo" />
          <p>Chaque site est conçu pour raconter une histoire visuelle unique et captivante.</p>
        </div>
        <div className="footer-section">
          <h3>Explorer</h3>
          <p>
            <Link to="/">Accueil</Link> |{" "}
            <Link to="/about">À propos</Link> |{" "}
            <Link to="/projects">Projets</Link> |{" "}
            <Link to="/contact">Contact</Link>
          </p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email : <a href="mailto:mehdi@mey-conception.com">mehdi@mey-conception.com</a></p>
          <p>Téléphone : <a href="tel:+33651491101">+33 6 51 49 11 01</a></p>
          <p>
            <a href="https://www.linkedin.com/in/mehdi-ghozelam/" target="_blank" rel="noreferrer">
              <img src={process.env.PUBLIC_URL + "/images/linkedin-icon.png"} alt="LinkedIn" className="social-icon" />
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Mehdi Développement Web 2024</p>
      </div>
    </footer>
  );
};

export default Footer;