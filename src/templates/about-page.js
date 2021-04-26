import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <>
    <div className="black p-lot services-page">
      <div className="about-banner align-vertical">
          
        <div className="callto-content inside-xxl">
          <h3 className="accent">Red Barn Engineering</h3>
          <h1>{title}</h1>
        </div>
         <div className="about-over"></div> 
      </div>
    </div>
    <section className="services-section section black p-lot">
        <div className="inside-xxl side-adjust">
          <PageContent className="content" content={content} />
        </div>
        <aside className="increment-side">

        </aside>
    </section>
    <section className="section black p-lot">
        <div className="inside-xxl">
        
        
        </div>
    </section>
  </>
  
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
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
      }
    }
  }
`
