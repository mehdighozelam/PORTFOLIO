import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json'; // Assurez-vous que le chemin est correct
import '../styles/Projects.scss'; // Assurez-vous que le fichier CSS est bien importé

const Projects = () => {
    return (
      <section id="projects" className="projects-section">
        <h2 className="projects-title">Projets Réalisés</h2>
        <div className="project-container">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={process.env.PUBLIC_URL + '/' + project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="description">{project.objective}</p>
                <p className="tech-info">{project.technologies}</p>
                <Link to={`/projects/${project.id}`} className="button-site">En savoir plus</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Projects;