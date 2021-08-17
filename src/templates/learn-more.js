import React from "react";

import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
//import PreviewCompatibleImage from '../components/PreviewCompatibleImage'


export const LearnPageInternshipTemplate = ({ title, content, contentComponent, teamtitle, description }) => {
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
      

      
      
    </div>
  
  )
}

LearnPageInternshipTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const LearnPageInternship = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <LearnPageInternshipTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

LearnPageInternship.propTypes = {
  data: PropTypes.object.isRequired,
}

export default LearnPageInternship

export const LearnPageInternshipQuery = graphql`
  query LearnPageInternship($id: String!) {
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
