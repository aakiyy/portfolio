import React from 'react';

const Projects: React.FC = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        <h3>Web Engineering Projects</h3>
        <div>
          <h4>Project Name</h4>
          <p>Description of the project.</p>
          <p>Technologies used: React, Node.js, etc.</p>
          <a href="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
      <div>
        <h3>Analytics Projects</h3>
        <div>
          <h4>Project Name</h4>
          <p>Description of the data analysis project.</p>
          <p>Tools used: Python, SQL, Tableau, etc.</p>
          <a href="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;