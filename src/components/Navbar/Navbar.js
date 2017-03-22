import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Navbar.scss';


export const Navbar = (props) => (

  <div className="text-center">
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
    {' · '}
    <IndexLink to='/coreComponentLibrary' activeClassName='route--active'>
      Core Component Library
    </IndexLink>
  </div>

);


export default Navbar