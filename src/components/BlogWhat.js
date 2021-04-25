import React, { useRef, useEffect } from "react";
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

  const BlogWhat = ( {data} ) => {
  
    const { edges: posts } = data.allMarkdownRemark

    const revealRefs = useRef([]);
    revealRefs.current = [];


    //let animateThat2 = useRef(null);
    //let animateThis2 = useRef(null);
    
    useEffect(() => {

      
      revealRefs.current.forEach((el, index) => {

        gsap.to( el, {
          scrollTrigger: {
            id: `section-${index+1}`,
            trigger: el, 
            scrub: 1,
  
          },
          duration: 2,
          x: '20',
          y: '-20',
          ease: "ease-in",
          
        })

      });

      /*

      triggers.forEach(animateThat2 => {
        
        gsap.to( animateThat2, {
          scrollTrigger: {
            trigger: triggers, 
            scrub: 1,
  
          },
          duration: 2,
          x: '20',
          y: '-20',
          ease: "ease-in",
          
        })

      });

      */
      
    }, [])

    const addToRefs = el => {
      if (el && !revealRefs.current.includes(el)) {
          revealRefs.current.push(el);
      }
    };

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
                        <div className="featured-thumbnail sixty animateThis">
                            <div className="animateThat" ref={addToRefs}>
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
