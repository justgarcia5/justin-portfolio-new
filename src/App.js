import React, { useState } from 'react';

import Nav from './components/Layout/Nav';
import Intro from './components/Intro';
import About from './components/About';

import classes from './App.module.css';
import Projects from './components/Projects';
import Project from './components/Layout/Project';

function App() {
  const [isModalActive, setIsModalAcitve] = useState(false);
  const [projectID, setProjectID] = useState(false);

  const showProjectHandler = id => {
      setIsModalAcitve(true);
      setProjectID(id);
  };

  const closeProjectHandler = () => {
      setIsModalAcitve(false);
  };

  return (
    <div className={classes.App}>
      {isModalActive && <Project onCloseProject={closeProjectHandler} projectID={projectID} />}
      <Nav />
      <Intro />
      <About />
      <Projects onShowProject={showProjectHandler} />
    </div>
  );
}

export default App;
