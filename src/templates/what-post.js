import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const WhatPostTemplate = ({
  content,
  contentComponent,
  jobtitle,
  jobtitle2,
  featuredimage,
  title,
  helmet,
  prettytitle1,
  prettytitle2,
}) => {
  const PostContent = contentComponent || Content

  let animateThis1 = useRef(null);
  let animateThat1 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
      gsap.to( animateThis1, {
        scrollTrigger: {
          trigger: '.gsap1', 
          scrub: 1,
        },
        duration: 2,
        x: '-10',
        y: '20',
        ease: "ease-in",
        
      })

      gsap.to( animateThat1, {
        scrollTrigger: {
          trigger: '.gsap1', 
          scrub: 1,
        },
        duration: 2,
        x: '20',
        y: '-20',
        ease: "ease-in",
        
      })

    
  }, [])

  return (
    <section className="section blogpost sec-black">
      {helmet || ''}
      <div className="inside-xxl">

          <article>
            <header className="blog-header">
            {prettytitle1 
              ? <h1 className="h1">{prettytitle1}<br/><span>{prettytitle2}</span></h1>
              : <h1 className="h1">{title}</h1>
            }
            {jobtitle
              ? <><h4 className="jobtitle">{jobtitle}</h4><p className="jobdescrip">{jobtitle2}</p></>
              : null
            }
            </header>
            <div className="flex-md">

              <div className="featured-thumbnail forty animateThis" ref={el => {animateThis1 = el}}>
                <div className="animateThat" ref={el => {animateThat1 = el}}>
                  <PreviewCompatibleImage imageInfo={featuredimage} />
                </div>
              </div>

              <div className="sixty"><PostContent content={content} /></div>

            </div>
            
          </article>

      </div>
    </section>
  )
}

WhatPostTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  prettytitle1: PropTypes.string,
  prettytitle2: PropTypes.string,
  jobtitle: PropTypes.string,
  jobtitle2: PropTypes.string,
  helmet: PropTypes.object,
}

const WhatPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WhatPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | What We Do | Red Barn Group">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        prettytitle1={post.frontmatter.prettytitle1}
        prettytitle2={post.frontmatter.prettytitle2}
        jobtitle={post.frontmatter.jobtitle}
        jobtitle2={post.frontmatter.jobtitle2}
      />
    </Layout>
  )
}

WhatPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default WhatPost

export const pageQuery = graphql`
  query WhatPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        prettytitle1
        prettytitle2
        jobtitle
        jobtitle2
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 840, quality: 60) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
