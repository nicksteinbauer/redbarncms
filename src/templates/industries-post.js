import React from "react";
import VisibilitySensor from "react-visibility-sensor";


import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IndustriesPostTemplate = ({
  content,
  contentComponent,
  jobtitle,
  jobtitle2,
  featuredimage,
  title,
  helmet,
  prettytitle1,
  prettytitle2,
  //description
}) => {
  const PostContent = contentComponent || Content

  

  return (
    <section className="section blogpost sec-black">
      {helmet || ''}
      <div className="inside-xxl">

          <article>
            <header className="blog-header">
            {prettytitle1 
              ? <h1 className="h1">{prettytitle1}<br/><span>{prettytitle2}</span></h1>
              : <h1 className="h1">{title}</h1>
            }
            {jobtitle
              ? <><h4 className="jobtitle">{jobtitle}</h4><p className="jobdescrip">{jobtitle2}</p></>
              : null
            }
            </header>
            <div className="flex-md">
              <VisibilitySensor partialVisibility>
                {({isVisible}) =>
                <div className="featured-thumbnail forty animateThis">
                  <div className={isVisible ? "newAnimate animateRightUpBig" : "newAnimate"}>
                    <PreviewCompatibleImage imageInfo={featuredimage} />
                  </div>
                </div>
              }
              </VisibilitySensor>
              <div className="sixty"><PostContent content={content} /></div>

            </div>
            
          </article>

      </div>
    </section>
  )
}

IndustriesPostTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  prettytitle1: PropTypes.string,
  prettytitle2: PropTypes.string,
  jobtitle: PropTypes.string,
  jobtitle2: PropTypes.string,
  helmet: PropTypes.object,
}

const IndustriesPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IndustriesPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Industries We Serve | Red Barn Group">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        prettytitle1={post.frontmatter.prettytitle1}
        prettytitle2={post.frontmatter.prettytitle2}
        jobtitle={post.frontmatter.jobtitle}
        jobtitle2={post.frontmatter.jobtitle2}
      />
    </Layout>
  )
}

IndustriesPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default IndustriesPost

export const pageQuery = graphql`
  query IndustriesPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        prettytitle1
        prettytitle2
        jobtitle
        jobtitle2
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 840, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
