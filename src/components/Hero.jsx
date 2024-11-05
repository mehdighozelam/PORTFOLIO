import React from "react";
import "../styles/Hero.scss"; // Inclure le fichier de style associé
const heroImage = process.env.PUBLIC_URL + "/images/fond.png"; // Correct

const Hero = () => {
  return (
    <section id="accueil" className="hero-section">
      <div className="overlay">
        <h2 id="hero-title">Découvrez Mon Univers</h2>
        <h1>Bienvenue sur Mon Portfolio</h1>
        <p>
          Je suis une développeur web passionné, spécialisér dans la création de sites modernes et optimisés. 
          Explorez mes projets et découvrez comment je peux vous accompagner dans vos idées numériques.
        </p>
        <a href="#about" className="btn-discover">En savoir plus</a>
      </div>
      <img src={heroImage} alt="Bannière d'accueil" className="hero-background" />
    </section>
  );
};

export default Hero;