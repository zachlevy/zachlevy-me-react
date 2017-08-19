import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Helmet } from "react-helmet"

import All from './All'

import SubscriptionForm from '../Subscriptions/Form'

class Products extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <Helmet>
            <title>Zach Levy's Products</title>
            <meta name="description" content="Side Projects, Side Hustles, Hackathons." />
          </Helmet>
          <div className="row">
            <div className="col-12">
              <Route exact path="/products/" component={All} />
            </div>
          </div>
        </div>
        <div className="container-fluid stats-block">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2">
              <br />
              <SubscriptionForm callToAction="Want to find out about my latest products?" buttonText="Sure"></SubscriptionForm>
              <br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Products
