import React from 'react';
import '../styles/Map.scss'; // Ajoutez votre fichier CSS pour la mise en forme si nécessaire

const Map = () => {
  return (
    <div className="map-container">
      <h3>Notre Localisation</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15698.763069981878!2d6.066273799999999!3d45.6580732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ebee107ffb70f%3A0x7b39b5b76f8276e0!2s1%20All%C3%A9e%20des%20Noisetiers%2C%2074100%20V%C3%A9traz-Monthoux!5e0!3m2!1sfr!2sfr!4v1697562292522!5m2!1sfr!2sfr"
        className="map-iframe"
        allowFullScreen=""
        loading="lazy"
        title="Localisation"
      ></iframe>
    </div>
  );
};

export default Map;