import React from 'react'
import { Link } from 'gatsby'
import ContactForm from '../components/contactForm'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer section">
        <div className="inside-xxl flex-md">
        
              
              <div className="twenty">
                <h4>Headquarters</h4>
                <p>
                  6610 NE 181st St., Ste. 2<br/>
                  Kenmore, WA 98028<br/>
                  <a href="tel:1-425-419-4979">425.419.4979</a> (office)
                </p>
              </div>
              <div className="twenty">
              <h4>Sandusky Office</h4>
                <p>
                  2110 Caldwell St<br/>
                  Sandusky, OH 44870<br/>
                  <a href="tel:1-419-625-7838">419.625.7838</a> (office)
                </p>
              </div>
              <div className="twenty">
              <h4>Orlando Office</h4>
                <p>
                  37 N Orange Ave #306<br/>
                  Orlando, FL 32801<br/>
                  <a href="tel:1-689-444-8338">419.625.7838</a> (office)
                </p>
              </div>
              <div className="flex1">
                <h4>Contact Us</h4>
              <ContactForm />
              </div>
        </div>  

        <div className="ten inside-xxl">
          <nav className="footer-menu">
            <ul className="menu-list">
              <li>
                <Link className="navbar-item" to="/what-we-do/">
                    What We Do
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/services/">
                    Services
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/projects/">
                    Projects
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/about/">
                    About Us
                </Link>
              </li>
              { /* }
              <li>
                <a className="navbar-item" href="https://www.redbarn-engineering.com/">
                    <span>
                    Online Portal
                    </span>
                </a>
              </li>
              {*/}
              <li>
                <a
                  className="navbar-item"
                  href="/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Admin
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="inside-xxl flex-md">
          <p>&copy; 2021 Red Barn Group, Incorporated </p> 
        </div> 
        
      </footer>
    )
  }
}

export default Footer
