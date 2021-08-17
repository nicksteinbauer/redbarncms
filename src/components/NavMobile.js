import React, { useContext } from 'react';
import { Link } from 'gatsby'
import Arrow from "./arrow"
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import AccordionContext from "react-bootstrap/AccordionContext";
import 'bootstrap/dist/css/bootstrap.min.css';


function ContextAwareToggle({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = currentEventKey === eventKey;
  
    return (
      <button
        type="button"
        className={isCurrentEventKey ? 'accordion-inner active' : 'accordion-inner notactive' }
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
}

function NavMobile() {
    return (


        <div className="navbar-start has-text-centered flex-md">

            <Accordion>

                <ContextAwareToggle eventKey="0">
                    
                    <Link className="navbar-item" to="/what-we-do">
                        <span>
                        What We Do
                        </span>
                        
                    </Link>
                    <Arrow />
                </ContextAwareToggle>
                    
                <Accordion.Collapse className="accordion__content" eventKey="0">
                    <ul>
                        <li><Link to="/what-we-do/">All</Link></li>
                        <li><Link to="/what-we-do/telecom/">Telecom</Link></li>
                        <li><Link to="/what-we-do/resort-management/">Resort Management</Link></li>
                        <li><Link to="/what-we-do/transportation/">Transportation</Link></li>
                        <li><Link to="/what-we-do/water/">Water</Link></li>
                        <li><Link to="/what-we-do/rail/">Rail</Link></li>
                        <li><Link to="/what-we-do/transit-consulting/">Right-of-Way Consulting</Link></li>
                        <li><Link to="/what-we-do/defense-design-build/">Defense Design / Build</Link></li>
                        <li><Link to="/what-we-do/drainage/">Drainage</Link></li>
                        <li><Link to="/what-we-do/drone-inspection/">Drone Inspection</Link></li>
                    </ul>
                </Accordion.Collapse>


                <ContextAwareToggle eventKey="1">
                    
                    <Link className="navbar-item" to="/services/">
                        <span>
                        Services
                        </span>
                        
                    </Link>
                    <Arrow />
                </ContextAwareToggle>
                    
                <Accordion.Collapse className="accordion__content" eventKey="1">
                    <ul>
                        <li><Link to="/services/">All</Link></li>
                        <li><Link to="/services/construction-management/">Construction Management</Link></li>
                        <li><Link to="/services/civil-engineering/">Civil Engineering</Link></li>
                        <li><Link to="/services/hydraulic-modeling/">Hydraulic Modeling</Link></li>
                        <li><Link to="/services/survey/">Surveying</Link></li>
                        <li><Link to="/services/electrical-fiber-optic-design/">Electrical / Fiber Optic Design</Link></li>
                        <li><Link to="/services/environmental-permitting/">Environmental Permitting</Link></li>
                        <li><Link to="/services/coastal-engineering/">Coastal Engineering</Link></li>
                        <li><Link to="/services/water-resource-engineering/">Water Resource Engineering</Link></li>
                    </ul>
                </Accordion.Collapse>

                <ContextAwareToggle eventKey="2">
                    
                    <Link className="navbar-item" to="/projects/">
                        <span>
                        Projects
                        </span>
                        
                    </Link>
                    <Arrow />
                </ContextAwareToggle>
                    
                <Accordion.Collapse className="accordion__content" eventKey="2">
                    <ul>
                        <li><Link to="/projects/">All</Link></li>
                        <li><Link to="/projects/civil-engineering/">Civil Engineering</Link></li>
                        <li><Link to="/projects/construction-management/">Construction Management</Link></li>
                        <li><Link to="/projects/transit/">Transit</Link></li>
                        <li><Link to="/projects/water/">Water</Link></li>
                        <li><Link to="/projects/telecom/">Telecom</Link></li>
                    </ul>
                </Accordion.Collapse>

                <ContextAwareToggle eventKey="3">
                    
                    <Link className="navbar-item" to="/about/">
                        <span>
                        About Us
                        </span>
                        
                    </Link>
                    <Arrow />
                </ContextAwareToggle>
                    
                <Accordion.Collapse className="accordion__content" eventKey="3">
                    <ul>
                        <li><Link to="/about/">About</Link></li>
                        <li><Link to="/executive-team/">Executive Team</Link></li>
                        <li><Link to="/core-team/">Core Team</Link></li>
                        <li><Link to="/internship-program/">Internship Program</Link></li>
                        <li><Link to="/careers/">Careers</Link></li>
                    </ul>
                </Accordion.Collapse>

                <ContextAwareToggle eventKey="4">
                    
                    <Link className="navbar-item" to="/blog/">
                        <span>
                        Blog
                        </span>
                        
                    </Link>
                    <Arrow />
                </ContextAwareToggle>
                    
                <Accordion.Collapse className="accordion__content" eventKey="4">
                    <ul>
                        <li><Link to="/blog/">All</Link></li>
                        <li><Link to="/blog/technical-excellence/">Technical Excellence</Link></li>
                        <li><Link to="/blog/integrated-culture/">Integrated Culture</Link></li>
                        <li><Link to="/blog/internship-program/">Internship Program</Link></li>
                        <li><Link to="/blog/awards/">Awards</Link></li>
                        <li><Link to="/blog/sustainability/">Sustainability</Link></li>
                        <li><Link to="/blog/archive/">Archive</Link></li>
                    </ul>
                </Accordion.Collapse>





            

        </Accordion>
        </div>

    )
};

export default NavMobile