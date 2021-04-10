import React from 'react'
import { Link } from 'gatsby'



const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer section">
        <div className="inside-xxl flex-md">
        
              <div className="twenty">
                <nav className="footer-menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Form Examples
                      </Link>
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
                <nav className="footer-menu">
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="twenty">
                
              </div>
        </div>   
      </footer>
    )
  }
}

export default Footer
