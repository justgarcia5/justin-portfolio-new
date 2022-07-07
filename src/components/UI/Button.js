import React, { useState } from 'react';

import classes from './Button.module.css';

const Button = props => {
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const buttonClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ''}`;

  const onHover = () => {
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
        setButtonIsHighlighted(false);
    }, 300);

    return () => {
        clearTimeout(timer);
    };
  }

  return <button onMouseEnter={onHover} onClick={props.onClick} className={buttonClasses}>See more</button>
}

export default Button;
