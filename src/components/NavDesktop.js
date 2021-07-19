import React from 'react';
import { Link } from 'gatsby'

function NavDesktop() {
    return (

        <div className="navbar-start has-text-centered flex-md">
            <Link className="navbar-item" to="/what-we-do">
                <span>
                What We Do
                </span>
                <ul>
                    <li className="first"></li>
                    <li><Link to="/what-we-do/telecom/">Telecom</Link></li>
                    <li><Link to="/what-we-do/resort-management/">Resort Management</Link></li>
                    <li><Link to="/what-we-do/transportation/">Transportation</Link></li>
                    <li><Link to="/what-we-do/water/">Water</Link></li>
                    <li><Link to="/what-we-do/rail/">Rail</Link></li>
                    <li><Link to="/what-we-do/defense-design-build/">Defense Design / Build</Link></li>
                    <li><Link to="/what-we-do/drainage/">Drainage</Link></li>
                    <li><Link to="/what-we-do/drone-inspection/">Drone Inspection</Link></li>
                </ul>
            </Link>
            <Link className="navbar-item" to="/services">
                <span>
                Services
                </span>
                <ul>
                    <li className="first"></li>
                    <li><Link to="/services/construction-management/">Construction Management</Link></li>
                    <li><Link to="/services/civil-engineering/">Civil Engineering</Link></li>
                    <li><Link to="/services/hydraulic-modeling/">Hydraulic Modeling</Link></li>
                    <li><Link to="/services/surveying/">Surveying</Link></li>
                    <li><Link to="/services/electrical-fiber-optic-design/">Electrical / Fiber Optic Design</Link></li>
                    <li><Link to="/services/environmental-permitting/">Environmental Permitting</Link></li>
                    <li><Link to="/services/coastal-engineering/">Coastal Engineering</Link></li>
                </ul>
            </Link>
            <Link className="navbar-item" to="/projects">
                <span>
                Projects
                </span>
                <ul>
                    <li className="first"></li>
                    <li><Link to="/services/construction-management/">Construction Management</Link></li>
                    <li><Link to="/services/civil-engineering/">Civil Engineering</Link></li>
                    <li><Link to="/services/hydraulic-modeling/">Hydraulic Modeling</Link></li>
                    <li><Link to="/services/surveying/">Surveying</Link></li>
                    <li><Link to="/services/electrical-fiber-optic-design/">Electrical / Fiber Optic Design</Link></li>
                    <li><Link to="/services/environmental-permitting/">Environmental Permitting</Link></li>
                    <li><Link to="/services/coastal-engineering/">Coastal Engineering</Link></li>
                </ul>
            </Link>
            <Link className="navbar-item" to="/about">
                <span>
                About Us
                </span>
            </Link>
            <Link className="navbar-item" to="/blog">
                <span>
                Blog
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

export default NavDesktop