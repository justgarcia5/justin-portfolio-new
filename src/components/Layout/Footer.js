import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
  return(
    <React.Fragment>
      <footer>
          <div className="icons d-flex justify-content-center">
            <a href="https://www.facebook.com/justin.garcia.378199" className='icon-foot p-2' target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
            <a href="https://codepen.io/Freshmex" className='icon-foot p-2' target="_blank" rel="noreferrer"><i className="fa fa-codepen"></i></a>
            <a href="https://github.com/justgarcia5" className='icon-foot p-2' target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/just-g-garcia/" className='icon-foot p-2' target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
            <a href="mailto:justgarcia5@gmail.com" className='icon-foot p-2' target="_blank" rel="noreferrer"><i className="fa fa-envelope"></i></a>
          </div>
          <br/>
          <p><a href="mailto:justgarcia5@gmail.com">Justin Garcia</a> © 2022 | San Diego, Ca</p>
        </footer>
    </React.Fragment>
  )
}

export default Footer;
