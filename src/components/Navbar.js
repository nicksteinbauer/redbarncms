import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/RedBarn-Logo.svg'

import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container always-flex justify">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Red Barn Engineering" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu justify-center flex-sm ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered always-flex">
                <Link className="navbar-item flex-vertical" to="/about">
                  <span>
                    About
                  </span>
                </Link>
                <Link className="navbar-item flex-vertical" to="/products">
                  <span>
                    Products
                  </span>
                </Link>
                <Link className="navbar-item flex-vertical" to="/blog">
                  <span>
                    Blog
                  </span>
                </Link>
                <Link className="navbar-item flex-vertical" to="/contact">
                  <span>
                    Contact
                  </span>
                </Link>
                <Link className="navbar-item flex-vertical" to="/contact/examples">
                  <span>
                    Form Examples
                  </span>
                </Link>

            </div>
            
          </div>

          <div className="social always-flex">
                <a target="_blank" className="flex-vertical" rel="noreferrer" href="https://www.facebook.com/barnesnursery"><img src={facebook} alt="Facebook Link" /></a>
                <a target="_blank" className="flex-vertical" rel="noreferrer" href="https://www.instagram.com/barnes_nursery/"><img src={instagram} alt="Instagram Link" /></a>
                <a target="_blank" className="flex-vertical" rel="noreferrer" href="https://twitter.com/barnesnursery"><img src={twitter} alt="Twitter Link" /></a>
            </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
