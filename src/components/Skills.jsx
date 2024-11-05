import React from 'react';
import '../styles/Skills.scss'; // Assurez-vous que le style associé est importé

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Mes Compétences</h2>
      <div className="skills-container">
        <div className="skill">
          <p>HTML</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '95%' }}>95%</div>
          </div>
        </div>
        <div className="skill">
          <p>CSS</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '95%' }}>95%</div>
          </div>
        </div>
        <div className="skill">
          <p>JavaScript</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}>90%</div>
          </div>
        </div>
        <div className="skill">
          <p>React</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}>90%</div>
          </div>
        </div>
        <div className="skill">
          <p>Node.js</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '90%' }}>90%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;