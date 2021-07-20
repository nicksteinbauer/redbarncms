import React from 'react'

import Layout from '../../components/Layout'
import BlogRollProjectsWater from '../../components/BlogRollProjectsWater'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="projects projects-page">
          <div className="projects-banner align-vertical">
            
            <div className="callto-content inside-xxl">
              <h3 className="accent">Red Barn Group</h3>
              <h1>Water Projects</h1>
            </div>
            
          </div>
          <section className="projects-section section sec-black p-lot">
            <div className="inside-xxl">
              <BlogRollProjectsWater />
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
