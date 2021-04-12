import React, { useRef, useEffect } from "react";
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BlogRollProjects = ( {data} ) => {

    const { edges: posts } = data.allMarkdownRemark

    let animateThat2 = useRef(null);
    let animateThis2 = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to( animateThat2, {
        scrollTrigger: {
          trigger: '.projects', 
          scrub: 1,

        },
        duration: 2,
        x: '60',
        y: '-60',
        ease: "ease-in",
        
      })

      gsap.to( animateThis2, {
        scrollTrigger: {
          trigger: '.projects', 
          scrub: 1,

        },
        duration: 2,
        y: '60',
        ease: "ease-in",
        
      })

    }, [])

    

    return (
      <div className="nickTest">
        {posts &&
          posts.map(({ node: post }) => (
          <div key={post.id}>
              <article
              className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredprojects ? 'is-featured' : ''
              }`}
              >
              <div className="flex-md flex-end">
                  
                {post.frontmatter.featuredimage ? (
                <div className="featured-thumbnail animateThis" ref={el => {animateThis2 = el}}>
                    <div className="animateThat" ref={el => {animateThat2 = el}}>
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
