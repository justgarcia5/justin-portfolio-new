import React from 'react';

import { FaFacebookF } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import classes from './Footer.module.css';

const Footer = () => {
  return(
    <React.Fragment>
      <footer>
          <div className={classes.icons}>
            <a href="https://www.facebook.com/justin.garcia.378199" className='icon-foot p-2' target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://codepen.io/Freshmex" className='icon-foot p-2' target="_blank" rel="noreferrer"><FaCodepen /></a>
            <a href="https://github.com/justgarcia5" className='icon-foot p-2' target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/just-g-garcia/" className='icon-foot p-2' target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:justgarcia5@gmail.com" className='icon-foot p-2' target="_blank" rel="noreferrer"><FaEnvelope /></a>
          </div>
          <br/>
          <p><a href="mailto:justgarcia5@gmail.com">Justin Garcia</a> © 2022 | San Diego, Ca</p>
        </footer>
    </React.Fragment>
  )
}

export default Footer;
