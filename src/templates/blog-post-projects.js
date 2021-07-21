import React, { useRef, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProjectsPostTemplate = ({
  content,
  contentComponent,
  //description,
  //tags,
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
    <section className="section blogpost green sec-black">
      {helmet || ''}
      <div className="inside-xxl">

          <article className="projects-contain">

            {prettytitle1 
              ? <h1 className="h1">{prettytitle1}<br/><span>{prettytitle2}</span></h1>
              : <h1 className="h1">{title}</h1>
            }

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

ProjectsPostTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  prettytitle1: PropTypes.string,
  prettytitle2: PropTypes.string,
  helmet: PropTypes.object,
}

const ProjectsPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProjectsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        helmet={
          <Helmet titleTemplate="%s | Projects | Red Barn Group">
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
      />
    </Layout>
  )
}

ProjectsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProjectsPost

export const pageQuery = graphql`
  query ProjectsPostByIDGreen($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        prettytitle1
        prettytitle2
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
