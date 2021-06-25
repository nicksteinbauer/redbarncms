import React from "react";

import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
//import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import BlogPeopleSlide from '../components/BlogPeopleSlide'


export const AboutPageCorporateTemplate = ({ title, content, contentComponent, teamtitle, description }) => {
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
          <aside className="increment-side">

          </aside>
      </section>
      <section className="section black p-lot team-buffer">
          <div className="inside-xxl flex-md justify">
            <div className="featured-thumbnail fifty animateThis">
              
            </div>
            <div className="forty">
              <h2 className="h1">{teamtitle}</h2>
              {description}
            </div>
          </div>
          <div className="team-padding">
            <BlogPeopleSlide />
          </div>
      </section>

      
      
    </div>
  
  )
}

AboutPageCorporateTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPageCorporate = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageCorporateTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPageCorporate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPageCorporate

export const aboutPageCorporateQuery = graphql`
  query AboutPageCorporate($id: String!) {
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
