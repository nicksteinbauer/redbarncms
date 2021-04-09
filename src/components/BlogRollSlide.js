
import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'




const BlogRollSlide = ( {data} ) => {
  
    const { edges: posts } = data.allMarkdownRemark

    let animateThis2 = useRef(null);
    let animateThat2 = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
        gsap.to( animateThis2, {
          scrollTrigger: {
            trigger: '.the-trigger', 
            scrub: 1,

          },
          duration: 2,
          y: '100',
          ease: "ease-in",
          
        })

        gsap.to( animateThat2, {
          scrollTrigger: {
            trigger: '.the-trigger', 
            scrub: 1,

          },
          duration: 2,
          x: '-40',
          y: '-40',
          ease: "ease-in",
          
        })
      
    }, [])
      
    
    

    return (
      <div className="the-trigger">
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
                    <div className="featured-thumbnail sixty animateThis" ref={el => {animateThis2 = el}}>
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

BlogRollSlide.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollSlideQuery {
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
    render={(data, count) => <BlogRollSlide data={data} count={count} />}
  />
)
