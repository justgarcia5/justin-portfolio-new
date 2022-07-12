import React, { useState, useEffect } from 'react';

import classes from './Project.module.css';

import Modal from '../../UI/Modal';
import RedButton from '../../UI/RedButton';
import GreenButton from '../../UI/GreenButton';
import OrangeButton from '../../UI/OrangeButton';

const projects = [
  {
    id: 'm1',
    title: 'Meditation App',
    description: 'Meditation app allows you to relax and enjoy the amazing sounds of rain or waves crashing on the beach. Choose your setting and start your timer.',
    technologies: 'React',
    live: 'https://o2dp8.csb.app/',
    code: 'https://codesandbox.io/s/meditaiton-app-o2dp8'
  },

  {
    id: 'm2',
    title: 'Initiative Tracker',
    description: 'Initiative Tracker was an application that I got the opportunity to be part of during my 2 month internship with CodingZeal. This application was built to help users set and accomplish initiatives. During this time, I was introduced to Agile Methodology where I participated in IPMs with clients, constructed wireflow diagrams, and building out features while implementing TDD before delivery of that feature.',
    technologies: 'Ruby on Rails, RSpec, Devise, Bootstrap, Webpack, Postgresql',
    code: 'https://github.com/CodingZeal/initiative-tracker'
  },

  {
    id: 'm3',
    title: 'Responsive JavaScript',
    description: 'I built this responsive page using a JavaScript, HTML, and CSS file. This was a task given to me to convert a PSD file into code and by implementing a mobile and desktop view.',
    technologies: 'JavaScript, HTML, CSS',
    code: 'https://codepen.io/Freshmex/pen/ZEQgBww',
    live: 'https://codepen.io/Freshmex/full/ZEQgBww'
  },

  {
    id: 'm4',
    title: 'Trade Up',
    description: 'TradeUp is sort of a spin off of OfferUp, but only TradeUp! I built this to keep developing my skills in React and Ruby on Rails. While building this app, I followed common practices such as creating a Heroku pipeline, creating wireflow diagrams, and using Github to test and deploy branches before pushing to the master.',
    technologies: 'React, Rails, Devise, Bootstrap, Webpack, Postgresql, Google Maps API, Geocoder AWS',
    code: 'https://github.com/justgarcia5/trade-up',
  },

  {
    id: 'm5',
    title: 'Tic-Tac-Toe',
    description: 'During the 3 month coding bootcamp that I attended I had task of creating a tic-tac-toe game using React. Check it out!',
    technologies: 'React, React Hooks',
    code: 'https://codesandbox.io/s/tic-tac-toe-ltlwx',
    live: 'https://ltlwx.csb.app/'
  },

  {
    id: 'm6',
    title: 'Color Box',
    description: 'This was one of my first projects with React. It\'s a simple program but this was the starting point for me as a React developer and is when my passion to learn React really began.',
    technologies: 'React, React Hooks',
    code: 'https://codesandbox.io/s/color-box-bu5xw',
    live: 'https://bu5xw.csb.app/'
  },

  {
    id: 'm7',
    title: 'MY Portfolio',
    description: 'Check out whats under the hood of my protfolio website. This is a react app where I utilized react hooks and passing props. I also built a custom menu using pure CSS that is responsive in both desktop on mobile views.',
    technologies: 'React, React Hooks',
    code: 'https://github.com/justgarcia5/justin-portfolio-new',
  }
];

const Project = props => {
  const [filteredProject, setFilteredProject] = useState();

  useEffect(() => {
    setFilteredProject(() => projects.filter(project => project.id === props.projectID))
  }, [props.projectID])

  return (
    <Modal onClick={props.onCloseProject}>
      {filteredProject &&
        <div className={classes.modal}>
          <h3>Description:</h3>
          <p>{filteredProject[0].description}</p>
          <h3>Technologies:</h3>
          <p className="ml-4">{filteredProject[0].technologies}</p>
          <div className={classes['button-div']}>
            {filteredProject[0].live &&
              <GreenButton>
                <a href={filteredProject[0].live} target="_blank" rel="noreferrer">Preview</a>
              </GreenButton>
            }
            {filteredProject[0].code &&
              <OrangeButton>
                <a href={filteredProject[0].code} target="_blank" rel="noreferrer">Code</a>
              </OrangeButton>
            }
            <RedButton onClick={props.onCloseProject} >
              Close
            </RedButton>
          </div>
        </div>
      }
    </Modal>
  )
}

export default Project;
