import React, { useState } from 'react';

import Nav from './components/Layout/Navigation/Nav';
import Intro from './components/Layout/Intro';
import About from './components/Layout/About';
import Contact from './components/Layout/Contact/Contact';
import Footer from './components/Layout/Footer';

import classes from './App.module.css';
import Projects from './components/Layout/Projects/Projects';
import Project from './components/Layout/Projects/Project';
import StickyBar from './components/Layout/Navigation/StickyBar';

function App() {
  const [isModalActive, setIsModalAcitve] = useState(false);
  const [projectID, setProjectID] = useState();

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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
