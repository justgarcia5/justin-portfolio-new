import React from 'react';

import classes from './ContactForm.module.css';
import GreenButton from '../../UI/GreenButton';

const ContactForm = () => {
    return (
        <form className={classes.input}>
            <label >Email </label>
            <input type="text"/>
            <label >Name </label>
            <input type="text"/>
            <label >Subject </label>
            <input type="text"/>
            <label >Message </label>
            <textarea type="text"/>
            <GreenButton>
                <a href='/'>Submit</a>
            </GreenButton>
        </form>
    )
};

export default ContactForm;
