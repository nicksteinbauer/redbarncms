import React from "react";

import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
//import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import BlogPeopleSlideSpecialty from '../components/BlogPeopleSlideSpecialty'


export const AboutPageSpecialtyTemplate = ({ title, content, contentComponent, teamtitle, description }) => {
  const PageContent = contentComponent || Content

  

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
          
      </section>
      <section className="section sec-black p-lot team-buffer">
          
          <div className="not-team-padding">
            <BlogPeopleSlideSpecialty />
          </div>
      </section>

      
      
    </div>
  
  )
}

AboutPageSpecialtyTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPageSpecialty = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageSpecialtyTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPageSpecialty.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPageSpecialty

export const aboutPageSpecialtyQuery = graphql`
  query AboutPageSpecialty($id: String!) {
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
