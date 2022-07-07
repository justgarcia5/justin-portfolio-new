import React, { useState, useEffect } from 'react';
import Modal from '../UI/Modal';

const projects = [
  {
    id: 'm1',
    title: 'Meditation App',
    description: 'Meditation app allows you to relax and enjoy the amazing sounds of rain or waves crashing on the beach. Choose your setting and start your timer.',
    technologies: 'React'
  },

  {
    id: 'm2',
    title: 'Initiative Tracker',
    description: 'Initiative Tracker was an application that I got the opportunity to be part of during my 2 month internship with CodingZeal. This application was build to help users set and accomplish initiatives and allow interaction between other users to help achieve these initiatives.',
    technologies: 'Ruby on Rails, RSpec, Devise, Bootstrap, Webpack, Postgresql'
  },

  {
    id: 'm3',
    title: 'Responsive JavaScript',
    description: 'I built this responsive page using a JavaScript, HTML, and CSS file. This was a task given to me to convert a PSD file into code and by implementing a mobile and desktop view.',
    technologies: 'JavaScript, HTML, CSS'
  },

  {
    id: 'm4',
    title: 'Trade Up',
    description: 'TradeUp is sort of a spin off of OfferUp, but only TradeUp! I built this to keep developing my skills in React and Rails and to also work in Agile.',
    technologies: 'React, Rails, Devise, Bootstrap, Webpack, Postgresql, Google Maps API, Geocoder AWS'
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
        <div>
          <h5>Date:</h5>
          <p className="ml-4">Aug 2020</p>
          <h5>Description:</h5>
          <p>{filteredProject[0].description}</p>

          <h5>Technologies:</h5>
          <p className="ml-4">{filteredProject[0].technologies}</p>
          <div >
            <button onClick={props.onCloseProject} >Close</button>
          </div>
        </div>
      }
    </Modal>
  )
}

export default Project;
