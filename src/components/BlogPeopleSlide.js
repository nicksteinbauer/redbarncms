import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import Slider from "react-slick"

class BlogPeopleSlide extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    const settings = {
        className: "slide-center",
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
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
                    <div>
                        
                        {post.frontmatter.featuredimage ? (
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
                        ) : null}
                        
                        <div className="forty">
                          <h2 className="h1">
                            
                            {post.frontmatter.title}
                          </h2>
                            <p>{post.frontmatter.jobtitle}</p>
                            <p>{post.frontmatter.description}</p>
                            <div className="text-center buffer">
                                <Link className="button thirty3" to={post.fields.slug}>View More</Link>
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

BlogPeopleSlide.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
    query BlogPeopleSlideQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { peoplekey: { eq: "people" } } }
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
                peoplekey
                jobtitle
                description
                date(formatString: "MMMM DD, YYYY")
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
    render={(data, count) => <BlogPeopleSlide data={data} count={count} />}
  />
)
