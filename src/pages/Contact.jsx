import React from 'react';
import ContactInfo from '../components/ContactInfo'; // Assurez-vous que le chemin est correct
import Map from '../components/Map'; // Importez le composant Map

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <ContactInfo />
      <Map /> {/* Ajout de la carte ici */}
    </section>
  );
};

export default Contact;