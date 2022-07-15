import React, { useState } from 'react';
import { send } from 'emailjs-com';

import classes from './ContactForm.module.css';
import GreenButton from '../../UI/GreenButton';
import postage from '../../../images/postage.jpeg';

const ContactForm = () => {
  const [success, setSuccess] = useState();
  const [nameHasError, setNameHasError] = useState(null);
  const [messageHasError, setMessageHasError] = useState(null);
  const [emailHasError, setEmailHasError] = useState(null);
  const [toSend, setToSend] = useState({
    fromName: '',
    message: '',
    replyTo: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    let emailValid = toSend.replyTo.match(/^\S+@\S+\.\S+$/);

    if(toSend.fromName.trim().length === 0 && toSend.replyTo.length === 0 && toSend.message.trim().length === 0) {
      setNameHasError(true);
      setEmailHasError(true);
      setMessageHasError(true);
      return;
    } else if(toSend.replyTo.length === 0 && toSend.message.trim().length === 0) {
      setEmailHasError(true);
      setMessageHasError(true);
      return;
    } else if(toSend.fromName.trim().length === 0 && toSend.message.trim().length === 0) {
      setNameHasError(true);
      setMessageHasError(true);
      return;
    } else if(toSend.fromName.trim().length === 0) {
      setNameHasError(true);
      return;
    } else if(!emailValid || toSend.replyTo.length === 0) {
      setEmailHasError(true);
      return;
    } else if(toSend.message.trim().length === 0) {
      setMessageHasError(true);
      return;
    }

    setNameHasError(false);
    setMessageHasError(false);
    setEmailHasError(false);

    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_USER_ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess('Email sent');
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

  const handleChange = (e) => {
    if(e.target.name === 'replyTo') {
      let validEmail = e.target.value.match(/^\S+@\S+\.\S+$/);
      validEmail ? setEmailHasError(false) : setEmailHasError(true)
    }

    if(e.target.name === 'fromName' ) {
      e.target.value.length === 0 ? setNameHasError(true) :setNameHasError(false);
    }

    if(e.target.name === 'message' ) {
      e.target.value.length === 0 ? setMessageHasError(true) : setMessageHasError(false);
    }

    setToSend({ ...toSend, [e.target.name]: e.target.value });
  }

  return (
    <form className={classes.input} onSubmit={handleSubmit}>
      <img src={postage} alt=''/>
      <h2>Send me a message!</h2>
      <input
        type='text'
        name='fromName'
        placeholder='Your name'
        value={toSend.fromName}
        onChange={handleChange}
        className={nameHasError ? classes['name-alert'] : ''}
      />
      <input
        type='text'
        name='replyTo'
        placeholder='Your email'
        value={toSend.replyTo}
        onChange={handleChange}
        className={emailHasError ? classes['email-alert'] : ''}
      />
      <textarea
        type='text'
        name='message'
        placeholder='Your message'
        value={toSend.message}
        onChange={handleChange}
        rows='5'
        cols='33'
        className={messageHasError ? classes['message-alert'] : ''}
      />
      <GreenButton>
        Send
      </GreenButton>
      <p>{success}</p>
    </form>
  )
};

export default ContactForm;
