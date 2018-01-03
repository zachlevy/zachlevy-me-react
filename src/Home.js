import React, { Component } from 'react'

import Header from './Header'

import lighthouseLabsLogo from './images/lighthouse_labs_logo_1024x512.png'
import firstExitMediaLogo from './images/first_exit_media_logo_1024x512.png'
import zachLevyEntrepreneur from './images/zach_levy_entrepreneur_1024x512.png'
import zachLevySailing from './images/zach_levy_sailing_512x512.png'
import { Helmet } from "react-helmet"

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Zach Levy | Entrepreneur and Developer in Toronto, Canada</title>
          <meta name="description" content="Zach Levy's personal website. Entrepreneur, Contract Developer, Voracious Learner, Coding Bootcamp Mentor." />
          <meta property="og:title" content="Zach Levy's personal website" />
          <meta property="og:description" content="Entrepreneur, Contract Developer, Voracious Learner, Coding Bootcamp Mentor." />
          <meta property="og:image" content={process.env.REACT_APP_URL + zachLevySailing} />
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
            <div className="col-12 col-sm-4">
              <div>
                <img src={zachLevyEntrepreneur} className="img-fluid" alt="Future Logo" />
              </div>
              <br />
              <h4>Vora Learning</h4>
              <p>I am the Founder of <a href="http://www.voralearning.com" target="_blank">Vora Learning</a>. Our mission is to find the smartest way to learn.</p>
            </div>
            <div className="col-12 col-sm-4">
              <div>
                <img src={firstExitMediaLogo} className="img-fluid" alt="First Exit Media Logo" />
              </div>
              <br />
              <h4>First Exit Media</h4>
              <p>I have done a lot of contract work through First Exit Media. I've helped 15+ entrepreneurs launch new products for their businesses by rapidly building prototypes for web and mobile apps. I've also made a lot of corporate websites.</p>
            </div>
            <div className="col-12 col-sm-4">
              <div>
                <img src={lighthouseLabsLogo} className="img-fluid" alt="Lighthouse Labs Logo" />
              </div>
              <br />
              <h4>Lighthouse Labs</h4>
              <p>I answer questions from students in the <a href="https://lighthouselabs.ca/web-bootcamp" target="_blank">Web Bootcamp</a>. Questions range from debugging tough environment issues to architecture decisions about their web apps. I've been mentoring at Lighthouse since July 2015 and it's been great!</p>
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
                <li>Ruby on Rails</li>
                <li>React</li>
              </ul>
              <p>Other than that, anything that solves the problem</p>
            </div>
            <div className="col-12 col-sm-4">
              <h4>Other Tools</h4>
              <ul>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Trello</li>
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
              </ul>
              <p>*Alright, Python is still pretty awesome</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
