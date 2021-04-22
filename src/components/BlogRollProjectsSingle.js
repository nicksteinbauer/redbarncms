import React, { useRef, useEffect } from "react";
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const BlogRollProjectsSingle = ( {data} ) => {

    const { edges: posts } = data.allMarkdownRemark

    //let animateThat2 = useRef(null);
    //let animateThis2 = useRef(null);

    const revealRefs = useRef([]);
    revealRefs.current = [];

    useEffect(() => {

      revealRefs.current.forEach((el, index) => {

      gsap.to( el, {
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el, 
          scrub: 1,

        },
        duration: 2,
        x: '60',
        y: '-60',
        ease: "ease-in",
        
      })

    });

      /*
      gsap.to( animateThis2, {
        scrollTrigger: {
          trigger: '.projects', 
          scrub: 1,

        },
        duration: 2,
        y: '60',
        ease: "ease-in",
        
      })
      */

    }, [])

    const addToRefs = el => {
      if (el && !revealRefs.current.includes(el)) {
          revealRefs.current.push(el);
      }
    };

    return (
      <div className="project-pre-loop">
        {posts &&
          posts.map(({ node: post }) => (
          <div className="pro-loop" key={post.id}>
              <article
              className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredprojects ? 'is-featured' : ''
              }`}
              >
              <div className="flex-md flex-end">
                  
                {post.frontmatter.featuredimage ? (
                <div className="featured-thumbnail animateThis">
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
                    <h2 className="h1">{post.frontmatter.prettytitle1}<br/><span>{post.frontmatter.prettytitle2}</span></h2>
                    <p>{post.excerpt}</p>
                    <div className="flex-xs space-around text-center buffer">
                        <Link className="button thirty3" to={post.fields.slug}>View More</Link>
                        <Link className="button thirty3" to="/projects">All Projects</Link>
                    </div>
                </div>
                  
              </div>
          </article>
          </div>
          
        ))}
      </div>
    )
  }


BlogRollProjectsSingle.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollProjectsSingleQuery {
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
    render={(data, count) => <BlogRollProjectsSingle data={data} count={count} />}
  />
)
