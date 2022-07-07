import React from 'react';

import classes from './Projects.module.css';
import Card from './UI/Card';
import Button from './UI/Button'

import Meditation from '../images/projects/meditation.png';
import Zeal from '../images/projects/zeal.png';
import Responsive from '../images/projects/responsive.png';
import TradeUp from '../images/projects/tradeup.png';

const projects = [
  {
    id: 'm1',
    title: 'Meditation App',
    image: Meditation,
  },

  {
    id: 'm2',
    title: 'Initiative Tracker',
    image: Zeal
  },

  {
    id: 'm3',
    title: 'Responsive JavaScript',
    image: Responsive
  },

  {
    id: 'm4',
    title: 'Trade Up',
    image: TradeUp
  }
];

const Projects = props => {
  return (
    <div className={classes['projects-section']}>
      <h1 className={classes.title} >Projects</h1>
      <div className={classes['project-cards']}>
        {projects.map(project => {
          return(
            <Card key={project.id}>
              <h2>{project.title}</h2>
              <img src={project.image} alt='' />
              <Button onClick={() => props.onShowProject(project.id)} />
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Projects;
