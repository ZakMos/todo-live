// External deps
import React from 'react';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
// Components
import Clock from './Clock';

/**
 * A React Functional Component
 * {@link https://reactjs.org/docs/components-and-props.html#functional-and-class-components | React Docs}
 * @param {string} tagline The tagline to print
 */
const Header = ({tagline}) => (
  <header className="site-header">
    <h1><NavLink to="/">What to do?</NavLink></h1>
    <p className="tagline">{tagline}</p>
    <Clock />
    <NavLink className="help-link" to="/help"><FontAwesomeIcon icon={faQuestionCircle}/></NavLink>
  </header>
);



export default Header;
