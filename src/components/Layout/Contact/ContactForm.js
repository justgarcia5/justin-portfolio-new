import React, { useState } from 'react';

import classes from './ContactForm.module.css';
import GreenButton from '../../UI/GreenButton';

const ContactForm = () => {
  const [success, setSuccess] = useState();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSuccess('Email sent!');
    setEmail('');
    setName('');
    setMessage('');

    setTimeout(() => {
        setSuccess('');
    }, 2000);
  }

  const emailChangeHandler = e => setEmail(e.target.value);

  const nameChangeHandler = e => setName(e.target.value);

  const messageChangeHandler = e => setMessage(e.target.value);

  return (
    <form className={classes.input} onSubmit={handleSubmit}>
      <h2>Send me a message!</h2>
      <label >Enter email</label>
      <input
        type="text"
        onChange={emailChangeHandler}
        value={email}
      />
      <label >Enter name</label>
      <input
        type="text"
        onChange={nameChangeHandler}
        value={name}
      />
      <label >Enter message</label>
      <textarea
        type="text"
        onChange={messageChangeHandler}
        value={message}
      />
      <GreenButton>
          Send
      </GreenButton>
      <p>{success}</p>
    </form>
  )
};

export default ContactForm;
