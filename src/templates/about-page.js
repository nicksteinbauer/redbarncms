import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Testimonials from '../components/Testimonials'



export const AboutPageTemplate = ({ title, content, contentComponent, featuredimage, teamtitle, testimonialsabout, description }) => {
  const PageContent = contentComponent || Content

  let animateThis1 = useRef(null);
  let animateThat1 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
      gsap.to( animateThis1, {
        scrollTrigger: {
          trigger: '.gsap1', 
          scrub: 1,
        },
        duration: 2,
        y: '30',
        x: '70',
        ease: "ease-in",
        
      })

      gsap.to( animateThat1, {
        scrollTrigger: {
          trigger: '.gsap1', 
          scrub: 1,
        },
        duration: 2,
        x: '-50',
        y: '-70',
        ease: "ease-in",
        
      })

    
  }, [])

  return (
    <div className="about-page">
      <div className="black services-page">
        <div className="about-banner align-vertical">
          <div className="callto-content inside-xxl">
            <h3 className="accent">Red Barn Engineering</h3>
            <h1>{title}</h1>
          </div>
          <div className="about-over"></div> 
        </div>
      </div>
      <section className="services-section section black">
          <div className="inside-xxl side-adjust">
            <PageContent className="content" content={content} />
          </div>
          <aside className="increment-side">

          </aside>
      </section>
      <section className="section sec-black p-lot team-buffer">
          <div className="inside-xxl flex-md justify">
            <div className="featured-thumbnail fifty animateThis" ref={el => {animateThis1 = el}}>
              <div className="animateThat" ref={el => {animateThat1 = el}}>
                <PreviewCompatibleImage imageInfo={featuredimage} />
              </div>
            </div>
            <div className="forty">
              <h2 className="h1">{teamtitle}</h2>
              {description}
            </div>
          </div>
          <div className="team-padding">
            <div className="inside-lg">
              <div className="team-grid">
                <article>
                  
                    <div className="image-padding relief-link">
                      <div className="featured-thumbnail animateThis">
                        <Link to="/corporate-team">
                          <div className="animateThat relief-team flex-vertical">
                            <h3>Corporate Team</h3>
                          </div>
                        </Link>
                      </div>
                    </div>
                  
                </article>
                <article>
                  
                    <div className="image-padding relief-link">
                      <div className="featured-thumbnail animateThis">
                        <Link to="/specialty-team">
                          <div className="animateThat relief-team flex-vertical">
                            <h3>Specialty Team</h3>
                          </div>
                        </Link>
                      </div>
                    </div>
                  
                </article>
              </div>
            </div>
          </div>
      </section>

      <section className="services-section testimonials">
        <div className="inside-xxl">
          <div className="forty">
            <h2 className="h1">Testimonials</h2>
            {description}
          </div>
        </div>
      </section>
      <div className="inside-xxl testimonials-fix">
        <Testimonials testimonials={testimonialsabout} />
      </div>
    
    </div>
  
  )
}

AboutPageTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  testimonialsabout: PropTypes.array,
  title: PropTypes.string.isRequired,
  teamtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        teamtitle={post.frontmatter.teamtitle}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        testimonialsabout={post.frontmatter.testimonialsabout}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        teamtitle
        description
        testimonialsabout {
          author
          quote
        }
        featuredimage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
