import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  render() {
    return (
      <header>
        <p className="main-header">Welcome to my TODO List Application
          <span className="font-todo"><FontAwesomeIcon icon={faClipboardList} /></span>
        </p>
      </header>
    );
  }
}


export default Header;
