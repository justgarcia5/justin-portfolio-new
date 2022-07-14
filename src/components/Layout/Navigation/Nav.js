import React, { useState } from "react";
import { FiMenu, FiX } from 'react-icons/fi';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import classes from './Nav.module.css';
import logo from '../../../images/logo.png';
import resume from '../../../files/resume.pdf'

const Nav = () => {
  const [open, setOpen] = useState(false);

	const scroll = (id) => {
		const section = document.querySelector(id);
		section.scrollIntoView( { behavior: 'smooth', block: 'start' } );

		setTimeout(() => {
			closeMenu();
		}, 200);
	};

	const handleClick = () =>  {
		setOpen(!open)
	};

	const closeMenu = () => setOpen(false);

  return (
    <Router>
      <nav className={open ? classes['navbar-active'] : classes.navbar}>
				<Link to="" className={classes['nav-logo']} onClick={() => scroll('#intro')}>
					<img src={logo} alt=''/>
				</Link>
				<div onClick={handleClick} className={classes['nav-icon']}>
					{open ? <FiX /> : <FiMenu />}
				</div>
				<ul className={open ? classes['nav-links-active'] : classes['nav-links']}>
					<li className={classes['nav-logo']}>
						<Link to={resume} className={classes['nav-link']} target="_blank" download>
							Resume
						</Link>
					</li>
					<li className={classes['nav-item']} >
						<Link to="" className={classes['nav-link']} onClick={() => scroll('#about')} >
							About
						</Link>
					</li>
					<li className={classes['nav-item']}>
						<Link to="" className={classes['nav-link']} onClick={() => scroll('#projects')}>
							Projects
						</Link>
					</li>
					<li className={classes['nav-item']}>
						<Link to="" className={classes['nav-link']} onClick={() => scroll('#contact')}>
							Contact
						</Link>
					</li>
					<li className={classes['nav-item']}>
						<a href="https://github.com/justgarcia5" className={classes['nav-link']} onClick={closeMenu} target="_blank" rel="noreferrer">
							GitHub
						</a>
					</li>
				</ul>
			</nav>
    </Router>
  )
}

export default Nav
