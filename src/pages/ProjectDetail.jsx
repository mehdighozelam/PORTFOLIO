import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json'; 
import ProjectInfo from '../components/ProjectInfo'; 
import ProjectChallenges from '../components/ProjectChallenges'; 

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div>
      <ProjectInfo project={project} />
      <ProjectChallenges challenges={project.challenges} skills={project.skills} />
    </div>
  );
};

export default ProjectDetail;