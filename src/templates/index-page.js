import React from "react";
import VisibilitySensor from "react-visibility-sensor";


import CellTower from "../img/RedBarn-no-CP.mp4"
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
//import Mainvideo from "../components/Mainvideo"

import Layout from '../components/Layout'
//import Features from '../components/Features'
import BlogRollIndustries from '../components/BlogIndustriesSlide'
import BlogProjectsSlide from '../components/BlogProjectsSlide'



const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  

  return (
    
  <Layout>

  <div>
      
  <div className="video-contain">
      
      <video autoPlay="autoplay" muted loop="loop" id="bgvid">
      <source src={CellTower} type="video/mp4" />
      </video>
      <div className="video-contain__gradient"></div>
        
  </div>

  <div className="the-rest">
    <div className="callto align-vertical">
      <div className="callto-content home-callto">
      
        <h3 className="accent">
          {frontmatter.subheading}
        </h3>
        
        <h1>
          {frontmatter.heading}<br/><span>{frontmatter.heading2}</span>
        </h1>
        {/*<div className="button-container"><Link className="button thirty3" to="/learn-more">Learn More</Link></div>*/}
      </div>
    </div>


    <section
      className="section black p-lot"
      style={{
        backgroundImage: `url(${
          !!frontmatter.image.childImageSharp ? frontmatter.image.childImageSharp.fluid.src : frontmatter.image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `relative`,
      }}
    >

      <div className="gsap1 inside-xl flex-md space-around">
      <div className="gradient"></div>
        <div className="forty">
          <h2 className="accent">{frontmatter.mainpitch.title}</h2>
          <div className="content">
            {frontmatter.mainpitch.description}
          </div>
          <div className="flex-xs space-around text-center buffer">
            <Link className="button thirty3" to={frontmatter.mainpitch.link1url}>{frontmatter.mainpitch.link1text}</Link>
            <Link className="button thirty3" to={frontmatter.mainpitch.link2url}>{frontmatter.mainpitch.link2text}</Link>
          </div>
        </div>
        
        
        <div className="sixty fudge">
          <VisibilitySensor>
          {({isVisible}) =>
          <div className="featured-thumbnail sixty animateThis">
            <div className={isVisible ? "newAnimate animateRightUpBig" : "newAnimate"}>
              <PreviewCompatibleImage imageInfo={frontmatter.mainpitch.imagepitch} />
            </div>
          </div>
          }
          </VisibilitySensor>
        </div>
        
      </div>
    </section>

    <section className="reliefmap sec-green section what-we-do slicky">    
      <div className="inside-xxl">
        <div className="flex-md flex-end what-we-do-text"><h2 className="forty accent">Industries We Serve</h2></div>
        <BlogRollIndustries />
      </div>
    </section>

    <section className="reliefmap sec-black section projects slicky">    
      <div className="inside-xl extra-padd">
        <div className="flex-md flex-end relative project-push"><h2 className="forty accent">Projects</h2></div>
        <BlogProjectsSlide />
      </div>
      <div className="gradient"></div>
    </section>

  </div>

  </div>

  </Layout>



  )
}


IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      heading: PropTypes.string,
      subheading: PropTypes.string,
      mainpitch: PropTypes.shape({
        imagepitch: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
      }),
      description: PropTypes.string,
      intro: PropTypes.shape({
        blurbs: PropTypes.array,
      }),
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        heading2
        subheading
        mainpitch {
          title
          description
          link1text
          link1url
          link2text
          link2url
          imagepitch {
            childImageSharp {
              fluid(maxWidth: 648, quality: 70) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        description
      }
    }
  }
`
