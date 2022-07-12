import React from 'react';

import classes from './ContactCol.module.css';
import Iphone from '../../../images/iphone.png'

const ContactCol = () => {
    return (
        <div className={classes['contact-col']} >
          <img src={Iphone} alt='' />
        </div>
    )
};

export default ContactCol;
