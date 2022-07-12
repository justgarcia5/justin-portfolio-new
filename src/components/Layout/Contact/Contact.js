import React from 'react';

import classes from './Contact.module.css';

import ContactForm from './ContactForm';
import ContactCol from './ContactCol';

const Contact = () => {
  return (
    <div className={classes['contact-section']}>
      <h1>Lets chat. Give me a shout!</h1>
      <div className={classes['contact-row']}>
        <ContactCol />
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact;
