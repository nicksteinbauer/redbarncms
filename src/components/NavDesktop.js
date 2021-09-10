import React from 'react';
import { Link } from 'gatsby'

function NavDesktop() {
    return (

        <div className="navbar-start has-text-centered flex-md">
            <div className="navbar-item" >
            <Link to="/what-we-do">
                <span>
                What We Do
                </span>
            </Link>
                <ul>
                    <li className="first"></li>
                    <li><Link to="/what-we-do/">All</Link></li>
                    <li><Link to="/what-we-do/defense-design-build/">Defense Design / Build</Link></li>
                    <li><Link to="/what-we-do/drainage/">Drainage</Link></li>
                    <li><Link to="/what-we-do/drone-inspection/">Drone Inspection</Link></li>
                    <li><Link to="/what-we-do/oil-and-gas/">Oil and Gas</Link></li>
                    <li><Link to="/what-we-do/resort-management/">Resort Management</Link></li>
                    <li><Link to="/what-we-do/transit-consulting/">Right-of-Way Consulting</Link></li>
                    <li><Link to="/what-we-do/telecom/">Telecom/5G</Link></li>
                    <li><Link to="/what-we-do/transportation/">Transportation | Rail</Link></li>
                    <li><Link to="/what-we-do/water/">Water</Link></li>    
                </ul>
            </div>
            <div className="navbar-item" >
            <Link to="/services">
                <span>
                Services
                </span>
            </Link>
                <ul>
                    <li className="first"></li>
                    <li><Link to="/services">All</Link></li>
                    <li><Link to="/services/civil-engineering">Civil Engineering</Link></li>
                    <li><Link to="/services/coastal-engineering">Coastal Engineering</Link></li>
                    <li><Link to="/services/construction-management">Construction Management</Link></li>
                    <li><Link to="/services/electrical-fiber-optic-design">Electrical / Fiber Optic Design</Link></li>
                    <li><Link to="/services/environmental-permitting">Environmental Permitting</Link></li>
                    <li><Link to="/services/environmental-services">Environmental Services</Link></li>
                    <li><Link to="/services/hydraulic-modeling">Hydraulic Modeling</Link></li>
                    <li><Link to="/services/survey">Survey</Link></li>
                    <li><Link to="/services/water-resource-engineering">Water Resource Engineering</Link></li>
                </ul>
            </div>
            <div className="navbar-item" >
            <Link to="/projects">
                <span>
                Projects
                </span>
            </Link>
                <ul>
                    <li className="first"></li>
                    <li><Link to="/projects">All</Link></li>
                    <li><Link to="/projects/civil-engineering">Civil Engineering</Link></li>
                    <li><Link to="/projects/construction-management">Construction Management</Link></li>
                    <li><Link to="/projects/transit">Transit</Link></li>
                    <li><Link to="/projects/water">Water</Link></li>
                    <li><Link to="/projects/telecom">Telecom</Link></li>
                </ul>
            </div>
            <div className="navbar-item" >
            <Link to="/about">
                <span>
                About Us
                </span>
            </Link>
                <ul>
                    <li className="first"></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/executive-team">Executive Team</Link></li>
                    <li><Link to="/core-team">Core Team</Link></li>
                    <li><Link to="/internship-program">Internship Program</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                </ul>
            </div>
            <div className="navbar-item" >
            <Link to="/blog">
                <span>
                Blog
                </span>
            </Link>
                <ul>
                    <li className="first"></li>
                    <li><Link to="/blog">All</Link></li>
                    <li><Link to="/blog/technical-excellence">Technical Excellence</Link></li>
                    <li><Link to="/blog/integrated-culture">Integrated Culture</Link></li>
                    <li><Link to="/blog/internship-program">Internship Program</Link></li>
                    <li><Link to="/blog/awards">Awards</Link></li>
                    <li><Link to="/blog/sustainability">Sustainability</Link></li>
                    <li><Link to="/blog/archive">Archive</Link></li>
                </ul>
            
            </div>


        </div>

    )
};

export default NavDesktop