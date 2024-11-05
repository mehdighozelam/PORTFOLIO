import React from 'react';
import '../styles/Values.scss'; // Assurez-vous que le chemin est correct

const Values = () => {
  return (
    <section className="values-section">
      <h2 className="values-title">Mes Valeurs</h2>
      <div className="values-container">
        <div className="value-item">
          <h3 className="value-title">Confiance</h3>
          <p>La confiance est au cœur de mon approche. Je m'engage à bâtir des relations solides basées sur l’honnêteté et la transparence.</p>
        </div>
        <div className="value-item">
          <h3 className="value-title">Adaptabilité</h3>
          <p>Dans un monde en constante évolution, je m'engage à rester flexible et à m'adapter aux besoins changeants de mes clients et du marché.</p>
        </div>
        <div className="value-item">
          <h3 className="value-title">Excellence</h3>
          <p>Je vise l’excellence dans tout ce que je fais. Chaque projet est une occasion de repousser mes limites et d’offrir des solutions de haute qualité à mes clients.</p>
        </div>
      </div>
    </section>
  );
};

export default Values;