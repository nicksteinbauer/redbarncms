import React from "react";
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const BlogRollProjectsCivilEngineering = ( {data} ) => {

    const { edges: posts } = data.allMarkdownRemark

    //let animateThat2 = useRef(null);
    //let animateThis2 = useRef(null);

    //const revealRefs = useRef([]);
    //revealRefs.current = [];
/*
    useEffect(() => {

      revealRefs.current.forEach((el, index) => {

      gsap.to( el, {
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el, 
          scrub: 1,

        },
        duration: 2,
        x: '40',
        y: '-40',
        ease: "ease-in",
        
      })

    });

      
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

    

    const addToRefs = el => {
      if (el && !revealRefs.current.includes(el)) {
          revealRefs.current.push(el);
      }
    };
*/
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


BlogRollProjectsCivilEngineering.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollProjectsCivilEngineeringQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: {featuredprojects: {eq: true}, category: {eq: "civil-engineering"} } }
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
    render={(data, count) => <BlogRollProjectsCivilEngineering data={data} count={count} />}
  />
)
