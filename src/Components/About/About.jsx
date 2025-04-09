import React from 'react'
import './About.css';
import LaptopImage from '../../assets/laptop.png';
import AboutImage from '../../assets/aboutme.png';
import HTML_ICON from '../../assets/html-5.png';
import CSS_ICON from '../../assets/css-3.png';
import JS_ICON from '../../assets/js.png';
import PIXI_ICON from '../../assets/pixijs-logo.png';
import REACT_ICON from '../../assets/react.png';
import 'aos/dist/aos.css';

const About = () => {
  return (
    <div className='about'>
      <div className='top-side' data-aos="fade-up">
        <img src={AboutImage} alt='aboutImage'/>
      </div>
      <div className='middle-side'>
        <img src={LaptopImage} alt='laptop' data-aos="fade-right"/>
        <span data-aos="fade-left">
          Hello! My name is Zahari Dzhelepov from Pernik, Bulgaria.
          I am a striving Front-end Game Developer, who has a large set of skills in Javascript with PIXI.js, HTML and CSS.
          With trying to always learn something new now and then I still watch programming tutorials and practice my JavaScript knowledge
          to keep up to date by creating small React.js projects. Doing so I believe this would leave open doors for me in the future and show
          that I am always ready for new learning adventures. My expertise lies in writing clean and optimized code, utilizing
          all sorts of new development tools and techniques. I am also a great team player as I am always eager to collaborate 
          with others, learn from them and listen to their critique if any.
        </span>
      </div>
      <div className='bottom-side' data-aos="fade-up">
        <p>Tech Stack</p>
        <div className='icons'>
          <img src={HTML_ICON} alt='html_icon'/>
          <img src={CSS_ICON} alt='css_icon'/>
          <img src={JS_ICON} alt='js_icon'/>
          <img src={PIXI_ICON} alt='pixi_icon'/>
          <img src={REACT_ICON} alt='react_icon'/>
        </div>
      </div>
    </div>
  )
}

export default About