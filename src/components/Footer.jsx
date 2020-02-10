import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faFacebookSquare, faLinkedin, faInstagram, faInternetExplorer } from '@fortawesome/free-brands-svg-icons';


class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>&copy; 2020 Zakaria Moslim</p>
          <div className="justify-content-center  d-flex">
            <ul className="list-unstyled ">
              <li className="list-inline-item">
                <a href="https://www.instagram.com/zaa_aak/" className="link-social-anim" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/zakaria_m" className="link-social-anim" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/Zak.Mus" className="link-social-anim" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/zakmos" className="link-social-anim" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://ZakMos.github.io" className="link-social-anim" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInternetExplorer} size="2x" />
                </a>
              </li>
            </ul>
          </div>
      </footer>
    );
  }
}


export default Footer;
