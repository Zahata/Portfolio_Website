import React, { useState } from 'react';
import { createPortal } from "react-dom";
import { Modal } from '../HireMeModal/Modal';
import './Hero.css';
import Background from '../../assets/vector.png';
import Myself from '../../assets/me.png';
import Mask from '../../assets/overlay.png';
import DOT from '../../assets/ellipse.png';
import cv from '../../assets/Zahari_Dzhelepov_CV.pdf';
import 'aos/dist/aos.css';

const Hero = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleButtonClick = () => {
        setModalOpen(false);
    };
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = cv;
        link.setAttribute("download", "ZahariDzhelepovCV.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  return (
    <div className='hero'>
        <div className='hero-left' data-aos="fade-right">
            <div className='hero-name'>
                <span>Hello! I`m</span>
                <span>Zahari Dzhelepov</span>
                <span>Front-End </span>
                <div>Developer <img src={DOT} alt='dot'/></div>
                <span>Front-End Game Developer with PIXI.js and <br/> Front-End Web Development enthusiast</span>
            </div>
            <div className='hero-buttons-container'>
                <button className='hero-button hero-button-hire' onClick={() => setModalOpen(true)}>Hire me</button>
                <button className='hero-button hero-button-cv' onClick={handleDownload}>Download CV</button>
            </div>
            {modalOpen &&
                createPortal(
                <Modal closeModal={handleButtonClick}>
                </Modal>,
                document.body
            )}
        </div>
        <div className='hero-right' data-aos="fade-left"> 
            <img src={Background} alt='background'/>
            <img src={Myself} alt='myself'/>
            <img src={Mask} alt='mask'/>
        </div>
    </div>
  )
}

export default Hero