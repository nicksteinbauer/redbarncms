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
                slidesToScroll: 1,
                infinite: false,
              }
            },
            {
              breakpoint: 760,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
              }
            }
          ]
      };

      return (
        <div className="the-trigger inside-xxl">
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
                            <h4 className="jobtitle">{post.frontmatter.jobtitle}</h4>
                            <p className="jobdescrip">{post.frontmatter.description}</p>
                            <div className="text-center buffer">
                                <Link className="button thirty3" to={post.fields.slug}>View Profile</Link>
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
          sort: { order: ASC, fields: [frontmatter___date] }
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
                prettytitle1
                prettytitle2
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
