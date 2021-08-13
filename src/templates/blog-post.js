import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  featuredimage,
  title,
  helmet,
  prettytitle1,
  prettytitle2,
}) => {
  const PostContent = contentComponent || Content

  
  return (
    <section className="blogpost actual-blog">
      {helmet || ''}
      

          <article>
            <div className="black p-lot services-page">
              <div className="services-banner align-vertical">
                  
                  <div className="callto-content inside-xxl">
                    <h3 className="accent">Red Barn Group</h3>
                    {prettytitle1 
                      ? <h1 className="h1">{prettytitle1}<br/><span>{prettytitle2}</span></h1>
                      : <h1 className="h1">{title}</h1>
                    }
                    <div className="flex-md text-center buffer">
                      <Link
                        className="button blog-button"
                        to="/blog"
                      >
                        Back to Blog
                      </Link>
                    </div>
                  </div>
                  
              </div>
            </div>
            <VisibilitySensor partialVisibility>
            {({isVisible}) =>
            <section className="services-section section black p-lot blog-white-padd">
              <div className="blog-white inside-xxl">
                <div className="featured-thumbnail forty-float animateThis">
                  <div className={isVisible ? "newAnimate animateRightUpBig" : "newAnimate"}>
                    <PreviewCompatibleImage imageInfo={featuredimage} />
                  </div>
                </div>
                <PostContent content={content} />
              </div>
            </section>
            }
            </VisibilitySensor>
          </article>

    </section>
  )
}

BlogPostTemplate.propTypes = {
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

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Blog">
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

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
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
