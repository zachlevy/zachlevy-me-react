import React, { Component } from 'react'

import Header from './Header'

import lighthouseLabsLogo from './images/lighthouse_labs_logo_1024x512.png'
import firstExitMediaLogo from './images/first_exit_media_logo_1024x512.png'
import zachLevyEntrepreneur from './images/zach_levy_entrepreneur_1024x512.png'

class Home extends Component {
  render() {
    return (
      <div>
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
              <h4>Entrepreneurship</h4>
              <p>I've been trying to solve big problems for years in various industries including Advertising, FinTech, Education, and Accessories. I've learned a ton along the way. I am currently looking for another to solve!</p>
            </div>
            <div className="col-12 col-sm-4">
              <div>
                <img src={firstExitMediaLogo} className="img-fluid" alt="First Exit Media Logo" />
              </div>
              <br />
              <h4>First Exit Media</h4>
              <p>I have done a lot of contract work through <a href="http://firstexitmedia.com" target="_blank">First Exit Media</a>. I've helped 15+ entrepreneurs launch new products for their businesses by rapidly building prototypes for web and mobile apps. I've also made a lot of corporate websites.</p>
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
