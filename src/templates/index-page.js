import React, { useState, useEffect } from "react";

import CellTower from "../img/cell-tower-2.mp4"
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'


import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
//import Mainvideo from "../components/Mainvideo"

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'





const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  const [offsetY, setOffsetY] = useState(0);
    const handleSroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleSroll);

        return () => window.removeEventListener("scroll", handleSroll);
    }, []);
  

  return (
    
  <Layout>

  <div>
      
  <div className="video-contain"
      style={{ transform: `translateY(${offsetY * 0.5}px)` }}
  >
      
      <video autoPlay="autoplay" muted loop="loop" id="bgvid">
      <source src={CellTower} type="video/mp4" />
      </video>
      <div className="video-contain__gradient"></div>
        
  </div>

  <div className="the-rest">
    <div className="callto align-vertical">
      <div className="callto-content">
      
        <h3 className="accent">
          {frontmatter.subheading}
        </h3>
        
        <h1>
          {frontmatter.heading}<br/><span>{frontmatter.heading2}</span>
        </h1>
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

      <div className="inside-xl flex-md space-around">
        <div className="forty-five">
          <h2 className="accent">{frontmatter.mainpitch.title}</h2>
          <div className="content">
            {frontmatter.mainpitch.description}
          </div>
          <div className="flex-md space-around text-center buffer">
            <Link className="button thirty3" to={frontmatter.mainpitch.link1url}>{frontmatter.mainpitch.link1text}</Link>
            <Link className="button thirty3" to={frontmatter.mainpitch.link2url}>{frontmatter.mainpitch.link2text}</Link>
          </div>
        </div>
        
        <div className="forty-five fudge"
          style={{ transform: `translateY(${offsetY * 0.1}px)` }}
        >
          <PreviewCompatibleImage imageInfo={frontmatter.mainpitch.imagepitch} />
        </div>
        
      </div>


    </section>

    <section className="reliefmap section">
      
            
      <div className="inside-xl">
        
        <div className="columns">
          <div className="column is-12">
            <h3 className="has-text-weight-semibold is-size-2">
              {frontmatter.heading}
            </h3>
            <p>{frontmatter.description}</p>
          </div>
        </div>
        <Features gridItems={frontmatter.intro.blurbs} />
        <div className="columns">
          <div className="column is-12 has-text-centered">
            <Link className="btn" to="/products">
              See all products
            </Link>
          </div>
        </div>
        <div className="column is-12">
          <h3 className="has-text-weight-semibold is-size-2">
            Latest stories
          </h3>
          <BlogRoll />
          <div className="column is-12 has-text-centered">
            <Link className="btn" to="/blog">
              Read more
            </Link>
          </div>
        </div>
        
      </div>
            
      
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
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
