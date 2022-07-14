import React, { useState } from 'react';
import { send } from 'emailjs-com';

import classes from './ContactForm.module.css';
import GreenButton from '../../UI/GreenButton';

const ContactForm = () => {
  const [success, setSuccess] = useState();
  const [toSend, setToSend] = useState({
    fromName: '',
    message: '',
    replyTo: '',
  });
  const [formHasError, setFormHasError] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    let emailValid = toSend.replyTo.match(/^\S+@\S+\.\S+$/);

    console.log(emailValid);
    if(toSend.fromName.trim().length === 0 || toSend.replyTo.length === 0 || toSend.message.length === 0) {
      setFormHasError({
          title: 'Invalid Input',
          message: 'Please enter a valid Name, Email and Message (cannot be blank).',
      })
      return;
    } else if(!emailValid) {
        setFormHasError({
          title: 'Invalid Email',
          message: 'Please enter a valid Email.',
      })
      return;
    }

    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess('Email sent');
        setFormHasError({
          title: '',
          message: '',
      })
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

      setToSend({
        fromName: '',
        message: '',
        replyTo: '',
      })

    setTimeout(() => {
      setSuccess('');
    }, 2000);
  }

  const handleChange = (e) => setToSend({ ...toSend, [e.target.name]: e.target.value });

  return (
    <form className={classes.input} onSubmit={handleSubmit}>
      <h2>Send me a message!</h2>
      {formHasError && <p className={classes.alert}>{formHasError.title}</p>}
      {formHasError && <p className={classes.alert}>{formHasError.message}</p>}
      <input
        type='text'
        name='fromName'
        placeholder='from name'
        value={toSend.fromName}
        onChange={handleChange}
      />
      <input
        type='text'
        name='replyTo'
        placeholder='Your email'
        value={toSend.replyTo}
        onChange={handleChange}
      />
      <textarea
        type='text'
        name='message'
        placeholder='Your message'
        value={toSend.message}
        onChange={handleChange}
      />
      <GreenButton>
          Send
      </GreenButton>
      <p>{success}</p>
    </form>
  )
};

export default ContactForm;
