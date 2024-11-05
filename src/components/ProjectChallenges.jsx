import React from 'react';
import '../styles/ProjectChallenges.scss'; // Assurez-vous que le fichier CSS est bien importé

const ProjectChallenges = ({ challenges, skills }) => {
  return (
    <section id="project-challenges" className="project-challenges-section">
      <div className="challenge-box">
        <h3>Problématiques rencontrées</h3>
        <p>{challenges.description}</p>
      </div>
      <div className="skills-box">
        <h3>Compétences développées</h3>
        <p>{skills.description}</p>
      </div>
    </section>
  );
};

export default ProjectChallenges;