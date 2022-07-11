import React from "react";

import classes from './Intro.module.css';
import Me from '../../images/me2.jpg';
import Background from '../../images/stars.jpeg';

const Intro = props => {
  return (
    <div id="intro">
      <img ref={props.onRef} src={Background} className={classes.background} alt=''/>
      <div className={classes.layer} />
      <div className={classes.container}>
        <img src={Me} alt='' className={classes['profile-pic']} />
        <h1>Justin Garcia</h1>
        <p>Web Devloper</p>
      </div>
    </div>
  )
}

export default Intro;
