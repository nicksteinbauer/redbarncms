import React from 'react'

import Layout from '../../components/Layout'
import BlogIndustries from '../../components/BlogIndustries'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="whatwedo">
          <div className="whatwedo-banner align-vertical">
            
            <div className="callto-content inside-xxl">
              <h3 className="accent">Red Barn Group</h3>
              <h1>Industries We Serve</h1>
              <p>Red Barn brings highly trained construction managers, engineers, inspectors, and scientists to every project and market sector we serve.</p>
            </div>
            
          </div>
          <section className="whatwedo-section section sec-black p-lot">
            <div className="inside-xxl">
              <BlogIndustries />
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}
