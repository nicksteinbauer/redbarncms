import React from 'react'

import Layout from '../../components/Layout'
import BlogWhat from '../../components/BlogWhat'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="whatwedo">
          <div className="whatwedo-banner align-vertical">
            
            <div className="callto-content inside-xxl">
              <h3 className="accent">Red Barn Engineering</h3>
              <h1>What We Do</h1>
              <p>Red Barn brings technical experts to each project with highly trained construction managers, engineers, inspectors, and scientists. </p>
            </div>
            
          </div>
          <section className="whatwedo-section section inside-xxl sec-black p-lot">
                <BlogWhat />
          </section>
        </div>
      </Layout>
    )
  }
}
