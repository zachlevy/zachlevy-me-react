import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Helmet } from "react-helmet"

import All from './All'

import SubscriptionForm from '../Subscriptions/Form'

import zachLevyDrinking from '../images/zach_levy_drinking_512x512.png'

class Products extends Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Zach Levy's Products | Entrepreneur and Developer in Toronto, Canada</title>
          <meta name="description" content="Zach Levy's Products and Personal Side Projects" />
          <meta property="og:title" content="Zach Levy's Products and Personal Side Projects" />
          <meta property="og:description" content="I have a few products related to history, software development, and The Phyiscal Web" />
          <meta property="og:image" content={process.env.REACT_APP_URL + zachLevyDrinking} />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={process.env.REACT_APP_URL + this.props.location.pathname} />
          <meta property="fb:app_id" content={process.env.REACT_APP_FB_APP_ID} />
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Route exact path="/products/" component={All} />
            </div>
          </div>
        </div>
        <div className="container-fluid call-to-action-container">
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
