import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Navbar.scss';


export const Navbar = (props) => (

  <div>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/about' activeClassName='route--active'>
      About
    </Link>
  </div>

);


export default Navbar