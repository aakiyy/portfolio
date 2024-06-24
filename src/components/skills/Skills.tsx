import React from 'react';
import './Skills.css'

const Skill: React.FC = () => {
  return (
    <section className='container'>
      <div>
        <h2>Skills</h2>
        <p className='subheading'>Here is my skills.</p>
        <h3>Web Development</h3>
        <span className='skill-item'>Scala</span>
        <span className='skill-item'>Play Framework</span>
        <span className='skill-item'>Type Script</span>
        <span className='skill-item'>Angular</span>
        <span className='skill-item'>Kotlin</span>
        <span className='skill-item'>Spring Framework</span>
        <span className='skill-item'>MySQL</span>

        <span className='skill-item'>Google Analytics</span>
        <span className='skill-item'>Google Tag Manager</span>
        <span className='skill-item'>Gainsight</span>
        <span className='skill-item'>Karte</span>
        <span className='skill-item'>Slack</span>
        <span className='skill-item'>Jira / Confluence</span>
        <span className='skill-item'>Miro</span>
        <span className='skill-item'>Figma / FigJam</span>
        <span className='skill-item'>Datadog</span>
        

        <h3>Data Analysis</h3>
        <ul>
          <li>Web Development: JavaScript, React, Node.js</li>
          <li>Data Analytics: Python, SQL, Tableau, Google Analytics</li>
          <li>Others: Git, Docker, AWS</li>
        </ul>
      </div>
    </section>
  );
}

export default Skill;