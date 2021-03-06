import React from "react";
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'




const BlogRollProjects = ( {data} ) => {

    const { edges: posts } = data.allMarkdownRemark


    return (
      <div className="the-trigger">
            <div className="team-grid projects-grid">

            
            {posts &&
                posts.map(({ node: post }) => (
                
                    <article
                    key={post.id}
                    className={`blog-list-item tile is-child box notification ${
                        post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                    >
                    
                        
                        {post.frontmatter.featuredimage ? (
                          <div className="image-padding">
                            <div className="featured-thumbnail animateThis">
                                <div className="animateThat">
                                  <PreviewCompatibleImage
                                  imageInfo={{
                                  image: post.frontmatter.featuredimage,
                                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                  }}
                                  />
                                </div>
                            </div>
                          </div>
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
                            
                            <div className="text-center buffer">
                                <Link className="button thirty3" to={post.fields.slug}>View Project</Link>
                            </div>
                                
                        </div>
                        
                    
                </article>
                
                
            ))}
            </div>
        </div>
    )
  }


BlogRollProjects.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollProjectsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: {featuredprojects: {eq: true} } }
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
                featuredprojects
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 1400, quality: 70) {
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
    render={(data, count) => <BlogRollProjects data={data} count={count} />}
  />
)
