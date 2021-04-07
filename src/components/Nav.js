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
            <Link className="navbar-item" to="/about">
                <span>
                About
                </span>
            </Link>
            <Link className="navbar-item" to="/products">
                <span>
                Products
                </span>
            </Link>
            <Link className="navbar-item" to="/blog">
                <span>
                Blog
                </span>
            </Link>
            <Link className="navbar-item" to="/contact">
                <span>
                Contact
                </span>
            </Link>
            <Link className="navbar-item" to="/contact/examples">
                <span>
                Form Examples
                </span>
            </Link>

        </div>

    )
};

export default Nav