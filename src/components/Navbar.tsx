import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="desktop-menu">
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="history" smooth={true} duration={500}>History</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
      <Menu 
        right 
        className="mobile-menu"
        isOpen={menuOpen}
        onStateChange={handleStateChange}
      >
        <Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link>
        <Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link>
        <Link to="history" smooth={true} duration={500} onClick={closeMenu}>History</Link>
        <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>Skills</Link>
        <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link>
        <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
      </Menu>
    </header>
  );
}

export default Navbar;