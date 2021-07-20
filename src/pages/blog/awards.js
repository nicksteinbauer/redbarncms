import React from 'react'

import Layout from '../../components/Layout'
import BlogRollAwards from '../../components/BlogRollAwards'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <div className="black p-lot services-page">
            <div className="services-banner align-vertical">
                
                <div className="callto-content inside-xxl">
                <h3 className="accent">Red Barn Group</h3>
                <h1>Awards Blog Entries</h1>
                </div>
                
            </div>
        </div>
        <section className="services-section section black p-lot">
            <div className="inside-xxl">
                <BlogRollAwards />
            </div>
        </section>


       
      </Layout>
    )
  }
}
