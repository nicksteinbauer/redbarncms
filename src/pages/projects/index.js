import React from 'react'

import Layout from '../../components/Layout'
import BlogRollProjects from '../../components/BlogRollProjects'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="projects projects-page">
          <div className="projects-banner align-vertical">
            
            <div className="callto-content inside-xxl">
              <h3 className="accent">Red Barn Group</h3>
              <h1>Projects</h1>
            </div>
            
          </div>
          <section className="projects-section section sec-black p-lot">
            <div className="inside-xxl">
              <BlogRollProjects />
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
