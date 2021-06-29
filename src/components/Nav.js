import React from 'react';
import { Link } from 'gatsby'

function Nav() {
    return (

        <div className="navbar-start has-text-centered flex-md">
            <Link className="navbar-item" to="/what-we-do">
                <span>
                What We Do
                </span>
            </Link>
            <Link className="navbar-item" to="/services">
                <span>
                Services
                </span>
            </Link>
            <Link className="navbar-item" to="/projects">
                <span>
                Projects
                </span>
            </Link>
            <Link className="navbar-item" to="/about">
                <span>
                About Us
                </span>
            </Link>
            {/*
            <a className="navbar-item" href="https://www.redbarn-engineering.com/">
                <span>
                Online Portal
                </span>
            </a>
            */}


        </div>

    )
};

export default Nav