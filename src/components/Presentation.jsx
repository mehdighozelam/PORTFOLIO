import React from 'react';
import '../styles/Presentation.scss';

const Presentation = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
        <img src={process.env.PUBLIC_URL + "/images/mehdi-a-propos.png"} alt="Logo" className="Burreau" />
        </div>
        <div className="about-info">
          <h2 id="about-title">À propos de moi</h2>
          <p>Je m'appelle Mehdi, et je suis un développeur web passionné par la création de solutions numériques modernes et innovantes. J'ai suivi une formation complète en développement web avec OpenClassrooms, où j'ai perfectionné mes compétences dans la conception de sites performants et responsives, ainsi que dans l'utilisation de frameworks modernes comme React. Je suis constamment à la recherche de nouveaux défis pour améliorer mes compétences et répondre aux besoins de mes clients.</p>
          <p>Mon objectif est de concevoir des sites web performants, esthétiques et optimisés pour offrir une expérience utilisateur exceptionnelle. Explorez mon portfolio pour en savoir plus sur mes projets et mon parcours.</p>
        </div>
      </div>
    </section>
  );
};

export default Presentation;