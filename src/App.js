import React, { useState } from 'react';

import Nav from './components/Layout/Nav';
import Intro from './components/Layout/Intro';
import About from './components/Layout/About';

import classes from './App.module.css';
import Projects from './components/Layout/Projects';
import Project from './components/Layout/Project';
import StickyBar from './components/Layout/StickyBar';

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
      <StickyBar />
      <Intro  />
      <About />
      <Projects onShowProject={showProjectHandler} />
    </div>
  );
}

export default App;
