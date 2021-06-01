import React from 'react'
import { Link } from 'gatsby'
import ContactForm from '../components/contactForm'


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer section">
        <div className="inside-xxl flex-md">
        
              <div className="twenty">
                <nav className="footer-menu">
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/what-we-do">
                          What We Do
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="">
                          Services
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="">
                          Projects
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="">
                          About Us
                      </Link>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://www.redbarn-engineering.com/">
                          <span>
                          Online Portal
                          </span>
                      </a>
                    </li>
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
              <div className="twenty">
                <h4>Headquarters</h4>
                <p>
                  6610 NE 181st St., Ste. 2<br/>
                  Kenmore, WA 98028<br/>
                  425.419.4979 (office)
                </p>
              </div>
              <div className="twenty">
              <h4>Sandusky Office</h4>
                <p>
                  326 East Market St<br/>
                  Sandusky, OH 44870<br/>
                  425.535.7230 (mobile)
                </p>
              </div>
              <div className="forty">
                <h4>Contact Us</h4>
              <ContactForm />
              </div>
        </div>  
        <div className="inside-xxl flex-md">
          <p>&copy; 2021 Red Barn Engineering, inc. </p> 
        </div> 
        
      </footer>
    )
  }
}

export default Footer
