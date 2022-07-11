import React, { useState } from "react";
import { FiMenu, FiX } from 'react-icons/fi';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import classes from './Nav.module.css';
import logo from '../../images/logo.png';


const Nav = props => {
  const [open, setOpen] = useState(false);

	const handleClick = () =>  {
		setOpen(!open)
	};

	const closeMenu = () => setOpen(false);

  return (
    <Router>
      {/* <nav className={open ? classes['navbar-active'] : classes.navbar}> */}
      <nav className={classes.navbar}>
				<Link to="/" className={classes['nav-logo']}>
					<img src={logo} alt=''/>
				</Link>
				<div onClick={handleClick} className={classes['nav-icon']}>
					{open ? <FiX /> : <FiMenu />}
				</div>
				<ul className={open ? classes['nav-links-active'] : classes['nav-links']}>
					<li className={classes['nav-logo']}>
						<Link to="/" className={classes['nav-link']} onClick={closeMenu}>
							Home
						</Link>
					</li>
						<li className={classes['nav-item']} >
						<Link to="about" className={classes['nav-link']} onClick={closeMenu} >
							About
						</Link>
					</li>
					<li className={classes['nav-item']}>
						<Link to="projects" className={classes['nav-link']} onClick={closeMenu}>
							Projects
						</Link>
					</li>
					<li className={classes['nav-item']}>
						<a href="https://github.com/justgarcia5" className={classes['nav-link']} onClick={closeMenu} target="_blank" rel="noreferrer">
							GitHub
						</a>
					</li>
					<li className={classes['nav-item']}>
						<Link to="/contact" className={classes['nav-link']} onClick={closeMenu}>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
    </Router>
  )
}

export default Nav
