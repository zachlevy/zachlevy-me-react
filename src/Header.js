import React, { Component } from 'react'

import { testimonials } from './Testimonials/testimonials'
import { shuffleArray } from './helpers/math'

import Testimonials from './Testimonials'

// import zachLevyDrinking from './images/zach_levy_drinking_512x512.png'
import zachLevyEntrepreneur from './images/zach_levy_20220313_x512.png'

class Header extends Component {
  shuffledTestimonials = []
  constructor(props) {
    super(props)
    this.shuffledTestimonials = shuffleArray(testimonials)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-2">
            <img src={zachLevyEntrepreneur} className="img-fluid rounded-circle" alt="Zach Levy Sailing" />
          </div>
          <div className="col-12 col-sm-5">
            <h1>Zach Levy</h1>
            <p>Entrepreneur and Developer in Toronto, Canada</p>
          </div>
          <div className="col-12 col-sm-5">
            <div className="col-12">
              <Testimonials slides={this.shuffledTestimonials} height={"200px"} width={"320px"} />
            </div>
          </div>
        <hr />
        </div>
        <hr />
      </div>
    )
  }
}

export default Header
