import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/RedBarn-Site-Logo.svg'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import facebook from "../img/social/facebook.svg";
//import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import linkedin from "../img/social/linkedin.svg";

const Navbar = class extends React.Component {
  state = {
    open: false,
  }
  handleButtonClick = () => {
      this.setState(state => {
        return {
          open: !state.open,
        };
      });
    };


  render() {
    return (
      <>
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="mainnav always-flex justify">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Red Barn Engineering" />
            </Link>
          </div>


          <div className={this.state.open ? "hamburger active" : "hamburger" }>

            <div className="ham-trigger flex-vertical" onClick={this.handleButtonClick} onKeyDown={this.handleButtonClick} role="button" tabIndex="0">
                <div className={this.state.open ? "ham-button active" : "ham-button" }>
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </div>
            </div>

            </div>

        
          <div
            id="navMenu"
            className="navbar-menu justify-center flex-sm"
          >

            <NavDesktop />
            
            <div className="social always-flex mobile">
                <a target="_blank" className="flex-vertical" rel="noreferrer" href="https://www.facebook.com/Red-Barn-Engineering-Inc-1573624299347485"><img src={facebook} alt="Facebook Link" /></a>
                <a target="_blank" className="flex-vertical" rel="noreferrer" href="https://twitter.com/rebekah_redbarn?lang=en"><img src={twitter} alt="Twitter Link" /></a>
                <a target="_blank" className="flex-vertical" rel="noreferrer" href="https://www.linkedin.com/company/redbgroup/"><img src={linkedin} alt="Linkedin Link" /></a>
            </div>

          </div>

          <div className="social always-flex desktop">
                <a target="_blank" className="flex-vertical" rel="noreferrer" href="https://www.facebook.com/Red-Barn-Engineering-Inc-1573624299347485"><img src={facebook} alt="Facebook Link" /></a>
                <a target="_blank" className="flex-vertical" rel="noreferrer" href="https://twitter.com/rebekah_redbarn?lang=en"><img src={twitter} alt="Twitter Link" /></a>
                <a target="_blank" className="flex-vertical" rel="noreferrer" href="https://www.linkedin.com/company/redbgroup/"><img src={linkedin} alt="Linkedin Link" /></a>
            </div>
        </div>
      </nav>
        
      {this.state.open && (
        <menu className="navigation">
            <div className="nav-buffer">
                <div className="inside-md flex-vertical-modified">
                    
                    <NavMobile />
                    
                </div>
            </div>
        </menu>
      )}
      </>
    )
  }
}

export default Navbar
