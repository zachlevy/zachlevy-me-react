import React, { Component } from 'react'

import Header from './Header'

// import lighthouseLabsLogo from './images/lighthouse_labs_logo_1024x512.png'
import givelaunchLogo from './images/givelaunch_logo_1024x512.png'
import apiBuffLogo from './images/api_buff_logo_1024x512.png'
// import zachLevyDrinking from './images/zach_levy_drinking_512x512.png'
import zachLevyEntrepreneur from './images/zach_levy_20220313_x512.png'
import { Helmet } from "react-helmet"

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Zach Levy | Entrepreneur, Developer, and Voracious Learner in Toronto, Canada</title>
          <meta name="description" content="Zach Levy. Full Stack Developer, Voracious Learner, Entrepreneur." />
          <meta property="og:title" content="Zach Levy" />
          <meta property="og:description" content="Entrepreneur, Contract Developer, Voracious Learner." />
          <meta property="og:image" content={process.env.REACT_APP_URL + zachLevyEntrepreneur} />
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
              <h2>What am I up to?</h2>
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6">
              <div>
                <img src={apiBuffLogo} className="img-fluid" alt="API Buff Logo" />
              </div>
              <br />
              <h4>API Buff</h4>
              <p>We're making it enjoyable to work with outdated APIs at <a href="https://apibuff.com" target="_blank">API Buff</a>.</p>
            </div>
            <div className="col-12 col-sm-6">
              <div>
                <img src={givelaunchLogo} className="img-fluid" alt="Givelaunch Logo" />
              </div>
              <br />
              <h4>Givelaunch</h4>
              <p>We're bringing the data revolution to non-profits at <a href="https://givelaunch.com" target="_blank">Givelaunch</a>.</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <h2>Technical Skills</h2>
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-4">
              <h4>Favorite Stack</h4>
              <ul>
                <li>Node.js</li>
                <li>Reactjs</li>
                <li>MongoDB</li>
              </ul>
              <p>Other than that, anything that solves the problem</p>
            </div>
            <div className="col-12 col-sm-4">
              <h4>Other Tools</h4>
              <ul>
                <li>Ruby on Rails</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
              </ul>
            </div>
            <div className="col-12 col-sm-4">
              <h4>Self-Deprecated Stack</h4>
              <p>Hopefully I'll never have to use these again</p>
              <ul>
                <li>PHP / Drupal</li>
                <li>Python* / Django</li>
                <li>ES5 / CoffeeScript / Angular1</li>
                <li>Objective-C</li>
                <li>Java</li>
                <li>Postgres</li>
              </ul>
              <p>* jk, Python is awesome</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
