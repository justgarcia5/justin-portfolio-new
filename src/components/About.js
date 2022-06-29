import React from "react"

import classes from './About.module.css';

// import aws from '../images/aws.png'

function About() {

  return (
    <div>
      <div className="about-wrapper" name="about" id="about" method="post">
        <div className={classes["about-wrapper-row"]}>
          <div className={classes["about-column"]}>
            <h2 className={classes["about-title"]}>About</h2>
            <p className={classes["about-text-container"]}>I am a web developer with two years experience building and creating responsive and high quality applications using React and Ruby on Rails. I have obtained a solid foundation and understanding of web development while attending and completing a Full-Stack bootcamp. Thereafter the bootcamp, I was an intern for a consultant company, Coding Zeal. During this time I gained experience and knowledge in working in an Agile Software Development process.</p>
          </div>
          <div className={classes["about-column"]}>
            <h2 className={classes["about-title"]}>Skills</h2>
            <div className="mt-5">
              <p>JavaScript</p>
              <p>React</p>
              <p>Ruby on Rails</p>
              <p>Bootstrap</p>
              <p>HTML5/CSS3</p>
              <p>Postgresql</p>
              <p>AWS</p>
              <p>Heroku</p>
              <p>Docker</p>
            </div>
          </div>
          <div className={classes["about-column"]}>
            <iframe title='aab' src="https://open.spotify.com/embed/album/0RkRavz2FtCFuFe3U9iEZE" width="340" height="480" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        </div>
        {/* <div className="row d-flex">
          <div className="col-sm mt-5">
            <img src={aws}/>
          </div>
        </div> */}
      </div>
    </div>
  );
}


export default About
