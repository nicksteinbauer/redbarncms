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
              <h3 className="accent">Red Barn Engineering</h3>
              <h1>Projects</h1>
            </div>
            
          </div>
          <section className="projects-section section inside-xxl black p-lot">
                <BlogRollProjects />
          </section>
        </div>
      </Layout>
    )
  }
}
