import React, { useContext } from 'react';

import { Link } from "gatsby"
//import facebook from "../../content/assets/facebook.svg";
//import instagram from "../../content/assets/instagram.svg";
//import twitter from "../../content/assets/twitter.svg";

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


function NavBoot() {
    return (

        <>
        <div className="fake-back">

        </div>

        <div className="accordion__section flex-md">
            <div className="menu-content stand-alone-link">
                <h4><Link to="/">Home</Link></h4>
            </div>
        </div>

        <Accordion>
            <div id="gc" className="accordion__section flex-md">
                <div className="menu-content">
                    <ContextAwareToggle eventKey="0">
                    <>
                        <h4>Garden Centers<span><Arrow /></span></h4>
                        <div className="menu-image"><div></div></div>
                    </>
                    </ContextAwareToggle>
                    
                    <Accordion.Collapse className="accordion__content" eventKey="0">
                        <ul>
                            <li><Link to="/garden-centers">Locations &amp; Contact</Link></li>

                        </ul>
                    </Accordion.Collapse>
                </div>
                
            </div>
            <div id="lc" className="accordion__section flex-md">
                <div className="menu-content">
                    
                    <ContextAwareToggle eventKey="1">
                        <h4>Landscape Contracting<span><Arrow /></span></h4>
                        <div className="menu-image"><div></div></div>
                    </ContextAwareToggle>
                    
                    <Accordion.Collapse className="accordion__content" eventKey="1">
                        <ul>
                            <li><Link to="/landscape-contracting/all-services">All Services</Link></li>
                            <li><Link to="/landscape-contracting/landscape-design-build">Landscape Design &amp; Build</Link></li>
                            <li><Link to="/landscape-contracting/landscape-maintenance">Landscape Maintenance</Link></li>
                            <li><Link to="/landscape-contracting/insect-disease-control">Insect &amp; Disease Control</Link></li>
                            <li><Link to="/landscape-contracting/new-lawn-installation">New Lawn Installation</Link></li>
                            <li><Link to="/landscape-contracting/lawn-fertilization">Lawn Fertilization</Link></li>
                            <li><Link to="/landscape-contracting/tree-services">Tree Services</Link></li>
                        </ul>
                    </Accordion.Collapse>
                </div>
                
            </div>
            <div id="lm" className="accordion__section flex-md">
                <div className="menu-content">
                    
                    <ContextAwareToggle eventKey="2">
                        <h4>Landscape Materials<span><Arrow /></span></h4>
                        <div className="menu-image"><div></div></div>
                    </ContextAwareToggle>
                    
                    <Accordion.Collapse className="accordion__content" eventKey="2">
                        <ul>
                            <li><Link to="/landscape-materials/composting-recycling">Composting / Recycling 101</Link></li>
                        </ul>
                    </Accordion.Collapse>
                </div>
                
            </div>
            <div id="cs" className="accordion__section flex-md">
                <div className="menu-content">
                    
                    <ContextAwareToggle eventKey="3">
                        <h4>Construction Services<span><Arrow /></span></h4>
                        <div className="menu-image"><div></div></div>
                    </ContextAwareToggle>
                    
                    <Accordion.Collapse className="accordion__content" eventKey="3">
                        <ul>
                            <li><Link to="/construction-services">All Services</Link></li>
                        </ul>
                    </Accordion.Collapse>
                </div>
                
            </div>
            <div id="au" className="accordion__section flex-md">
                <div className="menu-content">
                    
                    <ContextAwareToggle eventKey="4">
                        <h4>About Us<span><Arrow /></span></h4>
                        <div className="menu-image"><div></div></div>
                    </ContextAwareToggle>
                    
                    <Accordion.Collapse className="accordion__content" eventKey="4">
                        <ul>
                            <li><Link to="/about-us/contact-us">Contact Us</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/about-us/in-the-news">In the News</Link></li>
                            <li><Link to="/about-us/history">History</Link></li>
                            <li><Link to="/about-us/memberships">Membership Affiliations &amp; Helpful Links</Link></li>
                            <li><Link to="/about-us/employment">Employment</Link></li>
                        </ul>
                    </Accordion.Collapse>

                </div>
            </div>
            
        </Accordion>

        <div className="accordion__section flex-md">
            <div className="menu-content stand-alone-link">
                <h4><a href="https://secure.usaepay.com/interface/epayform/P0jWNx03T1Iw53GQNXmuBW1BK58mC2UP/">Pay Online</a></h4>
            </div>
        </div>

{/*
        <div className="accordion__section flex-md">
            <div className="menu-content social">
                
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/barnesnursery"><img src={facebook} alt="Facebook Link" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/barnes_nursery/"><img src={instagram} alt="Instagram Link" /></a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/barnesnursery"><img src={twitter} alt="Twitter Link" /></a>
                
            </div>
        </div>

*/}
        </>

    );
}

export default NavBoot