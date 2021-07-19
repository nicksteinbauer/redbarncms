import React, { useRef, useEffect } from "react";
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { gsap } from 'gsap';

const BlogRoll = ( {data} ) => {

  const { edges: posts } = data.allMarkdownRemark

  //let animateThat2 = useRef(null);
  //let animateThis2 = useRef(null);

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
      <div className="auto-grid blog">
      {posts &&
          posts.map(({ node: post }) => (
          <div className="what-loop animateThis" key={post.id} ref={addToRefs}>
              <article
              className={`blog-article ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
              }`}
              >
              <div>
                  
                  {post.frontmatter.featuredimage ? (
                  <div className="sixty">
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
                      
                        {post.frontmatter.title}<br/>
                     
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


BlogRoll.propTypes = {
data: PropTypes.shape({
  allMarkdownRemark: PropTypes.shape({
    edges: PropTypes.array,
  }),
}),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: {featuredblog: {eq: true} } }
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
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 740, quality: 100) {
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
