import React from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="history" smooth={true} duration={500}>History</Link></li>
        <li><Link to="skill" smooth={true} duration={500}>Skill</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;