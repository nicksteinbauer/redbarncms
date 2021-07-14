import React from "react";
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'



const CareersRoll = ( {data} ) => {

    const { edges: posts } = data.allMarkdownRemark

    


    return (
        <div className="auto-grid">
        {posts &&
            posts.map(({ node: post }) => (
            <div className="what-loop" key={post.id}>
                <article
                className={`blog-list-item tile is-child box notification `}
                >
                <div>
                    
                    
                    
                    <div className="forty">
                      <h2 className="h1">
                        {post.frontmatter.prettytitle1 ? (
                          <>
                          {post.frontmatter.prettytitle1}<br/>
                          </>
                        ) : null}
                        <span>{post.frontmatter.prettytitle2}</span>
                      </h2>
                        <p>{post.excerpt}</p>
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


CareersRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query CareersRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: {featuredcareer: {eq: true} } }
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
                featuredcareer
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <CareersRoll data={data} count={count} />}
  />
)
