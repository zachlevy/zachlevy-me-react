import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Helmet } from "react-helmet"

import zachLevyDrinking from '../images/zach_levy_drinking_512x512.png'

class Domains extends Component {

  render() {

    const domains = [
      "ridiculoushistory.com",
      "instadonation.com",

      "physicalwebads.com",
      "physicalwebinsights.com",
      "physicalwebenabled.com",
      "physicalwebtools.com",
      "physicalwebexpert.com",
      "buyphysicalwebbeacons.com",
      "physicalwebconsultant.com"
    ]

    return (
      <div>
        <Helmet>
          <title>Zach Levy's Products | Entrepreneur and Developer in Toronto, Canada</title>
          <meta name="description" content="Zach Levy's Domains For Sale" />
          <meta property="og:title" content="Zach Levy's Domains For Sale" />
          <meta property="og:description" content="I have a few domains for sale. Feel free to message me to buy." />
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
              <h1>My domains for Sale</h1>
              <p>I'll sell them for a reasonable price.</p>
              <ul>
                {
                  domains.map((domain) => {
                  return (
                    <li>
                      <a href={"http://" + domain} target="_blank">{domain}</a>
                    </li>
                  )})
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Domains
