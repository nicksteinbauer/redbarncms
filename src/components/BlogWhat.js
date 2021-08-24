import React from "react";
import VisibilitySensor from "react-visibility-sensor";


import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'


  const BlogWhat = ( {data} ) => {
  
    const { edges: posts } = data.allMarkdownRemark

    
      return (
        <div className="auto-grid">
            {posts &&
                posts.map(({ node: post }) => (
                <div className="what-loop" key={post.id}>
                    <article
                    className={`blog-list-item tile is-child box notification ${
                        post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                    >
                    <div>
                        
                        {post.frontmatter.featuredimage ? (
                          <VisibilitySensor partialVisibility>
                          {({isVisible}) =>
                          <div className="featured-thumbnail sixty animateThis">
                              <div className={isVisible ? "newAnimate animateRightUpBig" : "newAnimate"}>
                              <PreviewCompatibleImage
                              imageInfo={{
                              image: post.frontmatter.featuredimage,
                              alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                              }}
                              />
                              </div>
                          </div>
                          }
                          </VisibilitySensor>
                        ) : null}
                        
                        <div className="forty">
                          <h2 className="h1">
                            {post.frontmatter.prettytitle1 ? (
                              <>
                              {post.frontmatter.prettytitle1}<br/>
                              </>
                            ) : null}
                            <span>{post.frontmatter.prettytitle2}</span>
                          </h2>
                            <p>{post.frontmatter.description}</p>
                            <div className="flex-xl flex-start text-center buffer">
                                <Link className="button thirty3" to={post.fields.slug}>View More</Link>
                            </div>
                                
                        </div>
                        
                    </div>
                </article>
                </div>
                
            ))}
        </div>
      )
  
}

BlogWhat.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogWhatQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: {featuredpost: {eq: true} } }
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
                prettytitle1
                prettytitle2
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                description
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 80) {
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
    render={(data, count) => <BlogWhat data={data} count={count} />}
  />
)
