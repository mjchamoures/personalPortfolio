import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Navbar.scss';


export const Navbar = (props) => (

  <div>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <IndexLink to='/about' activeClassName='route--active'>
      About
    </IndexLink>
    {' · '}
    <IndexLink to='/projects' activeClassName='route--active'>
      Projects
    </IndexLink>
  </div>

);


export default Navbar