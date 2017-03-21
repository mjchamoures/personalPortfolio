import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Navbar.scss';


export const Navbar = (props) => (

  <div>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
    {' · '}
    <Link to='/dashboard' activeClassName='route--active'>
      Dashboard
    </Link>
  </div>

);


export default Navbar