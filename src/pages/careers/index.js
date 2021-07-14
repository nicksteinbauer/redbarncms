import React from 'react'

import Layout from '../../components/Layout'
import CareersRoll from '../../components/CareersRoll'

export default class CareersIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <div className="black p-lot services-page">
            <div className="services-banner align-vertical">
                
                <div className="callto-content inside-xxl">
                <h3 className="accent">Red Barn Group</h3>
                <h1>Careers</h1>
                </div>
                
            </div>
        </div>
        <section className="services-section section black p-lot">
            <div className="inside-xxl">
                <CareersRoll />
            </div>
        </section>


       
      </Layout>
    )
  }
}
