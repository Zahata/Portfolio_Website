import React, { useState } from 'react';
import { createPortal } from "react-dom";
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/logo.png';
import { Modal } from '../HireMeModal/Modal';
import './NavBar.css';

const NavBar = () => {
  // eslint-disable-next-line
  const [activeLink, setActiveLink] = useState('hero'); 
  const [modalOpen, setModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleSetActive = (to) => {
    setActiveLink(to);
    setMenuOpen(false);
  };

  const handleHireMeClick = () => {
    if(isMenuOpen){
      setMenuOpen(false);
    }
    setModalOpen(true);
  }

  const handleButtonClick = () => {
    setModalOpen(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'mobile-menu' : ''}`}>
      <div className="logo" onClick={scrollToTop}>
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-200}
          spy={true}
          activeClass="active"
          onSetActive={() => handleSetActive('hero')}
        >
          <img className='logo' src={logo} alt='logo'/>
        </Link>
      </div>
      <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <Link
          to="hero"
          smooth={true}
          duration={500}
          offset={-200}
          spy={true}
          activeClass="active"
          onSetActive={() => handleSetActive('hero')}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-100}
          spy={true}
          activeClass="active"
          onSetActive={() => handleSetActive('about')}
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-50}
          spy={true}
          activeClass="active"
          onSetActive={() => handleSetActive('projects')}
        >
          Projects
        </Link>
        <button onClick={handleHireMeClick}>Hire me</button>
        {modalOpen &&
            createPortal(
            <Modal closeModal={handleButtonClick}>
            </Modal>,
            document.body
        )}
      </div>
    </nav>
  );
};

export default NavBar;