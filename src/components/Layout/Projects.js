import React from 'react';

import classes from './Projects.module.css';
import Card from '../UI/Card';
import GreenButton from '../UI/GreenButton'

import Meditation from '../../images/projects/meditation.png';
import Zeal from '../../images/projects/zeal.png';
import Responsive from '../../images/projects/responsive.png';
import TradeUp from '../../images/projects/tradeup.png';
import TicTacToe from '../../images/projects/tictactoe.png';
import ColorBox from '../../images/projects/colorbox.png';

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
  },

  {
    id: 'm5',
    title: 'Tic-Tac-Toe',
    image: TicTacToe
  },

  {
    id: 'm6',
    title: 'Color Box',
    image: ColorBox
  }
];

const Projects = props => {
  return (
    <div id="projects" className={classes['projects-section']}>
      <h1 className={classes.title} >Projects</h1>
      <div className={classes['project-cards']}>
        {projects.map(project => {
          return(
            <Card key={project.id}>
              <h2>{project.title}</h2>
              <img src={project.image} alt='' />
              <div className={classes['modal-button-div']}>
                <GreenButton onClick={() => props.onShowProject(project.id)} >See More</GreenButton>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default Projects;
