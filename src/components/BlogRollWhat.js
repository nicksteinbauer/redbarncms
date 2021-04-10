import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import Slider from "react-slick"

class BlogRollWhat extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const settings = {
        className: "slide-center",
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      };

      return (
        <div className="the-trigger">
            <Slider {...settings}>
            {posts &&
                posts.map(({ node: post }) => (
                <div key={post.id}>
                    <article
                    className={`blog-list-item tile is-child box notification ${
                        post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                    >
                    <div className="flex-md">
                        
                        {post.frontmatter.featuredimage ? (
                        <div className="featured-thumbnail sixty animateThis">
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
                            <h2 className="h1">{post.frontmatter.prettytitle1}<br/><span>{post.frontmatter.prettytitle2}</span></h2>
                            <p>{post.excerpt}</p>
                            <div className="flex-xs space-around text-center buffer">
                                <Link className="button thirty3" to={post.fields.slug}>View More</Link>
                                <Link className="button thirty3" to="/services">View Services</Link>
                            </div>
                                
                        </div>
                        
                    </div>
                </article>
                </div>
                
            ))}
            </Slider>
        </div>
      )
  }
}

BlogRollWhat.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogRollWhatQuery {
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
    render={(data, count) => <BlogRollWhat data={data} count={count} />}
  />
)
