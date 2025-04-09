import React from 'react';
import './Projects.css';
import Card from '../Card/Card';
import projects from '../../local-json/projects_db.json';
import 'aos/dist/aos.css';

export const Projects = () => {
  return (
    <div className='projects' data-aos="fade-up">
      <p className='title'>Projects.</p>
      {
        projects? ( 
          projects.map(project => <Card key={project.id} id={project.id} title={project.title} image={project.image} description={project.description} github_link={project.github_link}/>)
        ) : ( 
          <div> No Projects loaded </div>
        )
      }
    </div>
  )
}
