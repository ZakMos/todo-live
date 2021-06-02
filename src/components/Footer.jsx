import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodepen, faGithubSquare, faLinkedin, faInternetExplorer } from '@fortawesome/free-brands-svg-icons';


class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>&copy; 2021 Zakaria Moslim</p>
          <div className="justify-content-center  d-flex">
            <ul className="list-unstyled ">
              <li className="list-inline-item">
                <a href="https://codepen.io/ZakMos" className="link-social-anim" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faCodepen} size="1x"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://github.com/ZakMos" className="link-social-anim" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithubSquare} size="1x"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/zakmos" className="link-social-anim" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="1x"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://ZakMos.github.io" className="link-social-anim" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInternetExplorer} size="1x" />
                </a>
              </li>
            </ul>
          </div>
      </footer>
    );
  }
}


export default Footer;
