import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import CellTower from "../img/cell-tower-2.mp4"

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  //title,
  heading,
  heading2,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div className="video-contain">
      <video autoPlay="autoplay" muted loop="loop" id="bgvid">
        <source src={CellTower} type="video/mp4" />
      </video>
      <div className="video-contain__gradient"></div>
    </div>

    <div className="the-rest">
      <div className="callto align-vertical">
        <div className="callto-content">
          <h3 className="accent">
            {subheading}
          </h3>
          <h1>
            {heading}<br/><span>{heading2}</span>
          </h1>
        </div>
      </div>


      <section
        className="section black p-lot"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `relative`,
        }}
      >

        <div className="inside-xl flex-md space-around">
          <div className="forty-five">
            <h2 className="accent">{mainpitch.title}</h2>
            <div className="content">
              {mainpitch.description}
            </div>
          </div>
          <div className="forty-five">
            <PreviewCompatibleImage imageInfo={mainpitch.image} />
          </div>
        </div>


      </section>

    
      <section>
        
              
        <div className="content">
          
          <div className="columns">
            <div className="column is-12">
              <h3 className="has-text-weight-semibold is-size-2">
                {heading}
              </h3>
              <p>{description}</p>
            </div>
          </div>
          <Features gridItems={intro.blurbs} />
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
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  //mainpitch: PropTypes.object,
  mainpitch: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  }),
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        heading2={frontmatter.heading2}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
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
          image {
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
