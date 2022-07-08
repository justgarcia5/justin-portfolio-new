import React from 'react'

import classes from './StickyBar.module.css';

import { FaFacebookF } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const StickyBar = () => {
  return (
    <div className={classes["icon-bar"]}>
      <a href="https://www.facebook.com/justin.garcia.378199" className={classes.facebook} target="_blank" rel="noreferrer"><FaFacebookF /></a>
      <a href="https://codepen.io/Freshmex" className={classes.codepen} target="_blank" rel="noreferrer"><FaCodepen /></a>
      <a href="https://github.com/justgarcia5" className={classes.github}target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/just-g-garcia/" className={classes.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
      <a href="mailto:justgarcia5@gmail.com" className={classes.envelope} target="_blank" rel="noreferrer"><FaEnvelope /></a>
    </div>
  )
}

export default StickyBar;
