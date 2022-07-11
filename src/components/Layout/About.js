import React from "react";

import classes from './About.module.css';

import Aws from '../../images/aws.png';
import ReactLogo from '../../images/reactlogo.png';
import RailsLogo from '../../images/rails.png';
import GithubLogo from '../../images/github.png';
import JSLogo from '../../images/js.png';
import htmlCssLogo from '../../images/html-css.png';
import JqueryLogo from '../../images/jquery.png';

function About(props) {

  return (
    <React.Fragment>
      <div id="about" className={classes["about-wrapper-row"]}>
        <div className={classes["about-column"]}>
          <h2 className={classes["about-title"]}>About</h2>
          <p className={classes["about-text-container"]}>I am a web developer with two years experience building and creating responsive and high quality applications using React and Ruby on Rails. I have obtained a solid foundation and understanding of web development while attending and completing a Full-Stack bootcamp. Thereafter the bootcamp, I was an intern software developer for a consultant company, Coding Zeal. During this time I gained experience and knowledge in working in an Agile Software Development process. I know am freelance web developer with hands on experience with building and updating web apps.</p>
        </div>
        <div className={classes["about-column"]}>
          <h2 className={classes["about-title"]}>Skills</h2>
          <p>JavaScript</p>
          <p>React</p>
          <p>Ruby on Rails</p>
          <p>Bootstrap</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>Postgresql</p>
          <p>AWS</p>
          <p>Heroku</p>
          <p>Docker</p>
          <p>jQuery</p>
          <p>Java</p>
        </div>
        <div className={classes["about-column"]}>
          <iframe title='aab' src="https://open.spotify.com/embed/album/0RkRavz2FtCFuFe3U9iEZE" width="340" height="440" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
      </div>
      <div className={classes["logo-section-row1"]}>
        <img src={Aws} alt=''/>
        <img src={ReactLogo} alt=''/>
      </div>
      <div className={classes["logo-section-row2"]}>
        <img src={RailsLogo} alt=''/>
        <img src={GithubLogo} alt=''/>
        <img src={JSLogo} alt=''/>
      </div>
      <div className={classes["logo-section-row3"]}>
        <img src={htmlCssLogo} alt=''/>
        <img src={JqueryLogo} alt=''/>
      </div>
    </React.Fragment>
  );
}


export default About
