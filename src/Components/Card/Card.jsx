import React, { useState, useEffect } from 'react';
import './Card.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import 'aos/dist/aos.css';

const importImage = async (imagePath) => {
  try {
    const image = await import(`../../assets/${imagePath}`);
    return image.default;
  } catch (error) {
    return null;
  }
};

const Card = (props) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const loadImage = async () => {
      const src = await importImage(props.image);
      setImageSrc(src);
    };
    loadImage();
  }, [props.image]);

  return (
    <div className='container'>
      <div className='divider'/>
      <div className={props.id % 2 === 0 ? 'card-container' : 'card-container-reversed'} data-aos={props.id % 2 === 0 ? "fade-right" : "fade-left"}>
        <div className='image-container'>
            <img src={imageSrc} alt={props.title}/>
        </div>
        <div className='info-container'>
            <h4> {props.title}</h4>
            <p> {props.description}</p>
            <a href={props.github_link} target="_blank" rel="noreferrer" className="github-icon">
                View project on GitHub <FontAwesomeIcon icon={faGithub} size="1x"/>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Card