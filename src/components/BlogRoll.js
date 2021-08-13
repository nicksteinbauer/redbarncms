import React from "react";
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import VisibilitySensor from "react-visibility-sensor";

const BlogRoll = ( {data} ) => {

  const { edges: posts } = data.allMarkdownRemark

  //function onChange (isVisible) {
  //  console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  //}
  


  

  

  return (
    <div className="auto-grid blog">
      {posts &&
        posts.map(({ node: post }) => (
          <VisibilitySensor partialVisibility>
          {({isVisible}) =>
          <div className={isVisible ? "what-loop newAnimate animateRightDown" : "what-loop newAnimate"} key={post.id}>
              <article
              className={`blog-article ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
              >
              <div>
                  
                  {post.frontmatter.featuredimage ? (
                  <div className="sixty">
                      <div className="animateThat">
                      <PreviewCompatibleImage
                      imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                      />
                      </div>
                  </div>
                  ) : null}
                  
                  <div className="forty">
                    <h2 className="h1">
                      
                        {post.frontmatter.title}<br/>
                     
                    </h2>
                      <p>{post.excerpt}</p>
                      <div className="flex-xl flex-start text-center buffer">
                          <Link className="button thirty3" to={post.fields.slug}>View More</Link>
                      </div>
                          
                  </div>
                  
              </div>
            </article>
          </div>
          }
          </VisibilitySensor>
      ))}
    </div>
  )
}


BlogRoll.propTypes = {
data: PropTypes.shape({
  allMarkdownRemark: PropTypes.shape({
    edges: PropTypes.array,
  }),
}),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: {featuredblog: {eq: true} } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 740, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
