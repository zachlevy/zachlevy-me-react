import React, { Component } from 'react'

import Header from './Header'

import SubscriptionForm from './Subscriptions/Form'
import zachLevyDrinking from './images/zach_levy_drinking_512x512.png'
import { Helmet } from 'react-helmet'

class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Contact Zach Levy | Entrepreneur and Developer in Toronto, Canada</title>
          <meta name="description" content="Contact Zach Levy about contract web development or personal side projects" />
          <meta property="og:title" content="Zach Levy's personal website" />
          <meta property="og:description" content="Contact Zach Levy about contract web development or personal side projects" />
          <meta property="og:image" content={process.env.REACT_APP_URL + zachLevyDrinking} />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={process.env.REACT_APP_URL + this.props.location.pathname} />
          <meta property="fb:app_id" content={process.env.REACT_APP_FB_APP_ID} />
        </Helmet>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Email Zach</h2>
              <p><a href="mailto:zach@zachlevy.me">zach@zachlevy.me</a></p>
              <h2>Contract Work</h2>
              <p>I do all my freelancing through <a href="http://firstexitmedia.com" target="_blank">First Exit Media</a>.</p>
              <p><a href="mailto:zach@firstexitmedia.com">zach@firstexitmedia.com</a></p>
            </div>
          </div>
        </div>
        <div className="container-fluid call-to-action-container">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2">
              <br />
              <SubscriptionForm callToAction="Just want to stay connected?" buttonText="Subscribe"></SubscriptionForm>
              <br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
