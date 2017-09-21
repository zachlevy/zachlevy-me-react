import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Helmet } from "react-helmet"


import All from './All'

import SubscriptionForm from '../Subscriptions/Form'

class Jobs extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Helmet>
            <title>Zach Levy's Jobs Section</title>
            <meta name="description" content="Jobs jobs jobs. Let me introduce you." />
          </Helmet>
          <div className="row">
            <div className="col-12">
              <Route exact path="/jobs/" component={All} />
            </div>
          </div>
        </div>
        <div className="container-fluid call-to-action-container">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2">
              <br />
              <SubscriptionForm callToAction="Want to find out about my latest blog posts?" buttonText="Sure" />
              <br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Jobs
