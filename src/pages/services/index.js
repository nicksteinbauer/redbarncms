import React from 'react'

import Layout from '../../components/Layout'
import BlogRollServices from '../../components/BlogRollServices'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <div className="black p-lot services-page">
            <div className="services-banner align-vertical">
                
                <div className="callto-content inside-xxl">
                <h3 className="accent">Red Barn Engineering</h3>
                <h1>Services</h1>
                </div>
                
            </div>
            <section className="projects-section section inside-xxl black p-lot">
                <BlogRollServices />
            </section>

        </div>


       
      </Layout>
    )
  }
}
