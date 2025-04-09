import React, {useEffect} from 'react';
import { Link, scrollSpy } from "react-scroll";
import logo from '../../assets/logo.png';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    useEffect(() => {
        scrollSpy.update();
    }, []);

  return (
    <div className='footer'>
        <div className='upper-footer'>
            <div className='footer-logo'>
                <Link to='hero' offset={-200} spy={true} smooth={true}>
                    <img className='logo' src={logo} alt='logo'/>
                </Link>
            </div>
            <div className='footer-divider'/>
        </div>
        <div className='lower-footer'>
            <div className='rights'>
                &copy; All rights reserved
            </div>
            <div className='footer-icons'>
                <a href="https://github.com/Zahata" target="_blank" rel="noreferrer" className="github-icon">
                    <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
                <a href="https://www.instagram.com/zahataa/" target="_blank" rel="noreferrer" className="instagram-icon">
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </a>
                <a href="https://www.linkedin.com/in/zahari-dzhelepov-050b8a16b/" target="_blank" rel="noreferrer" className="linkedin-icon">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer