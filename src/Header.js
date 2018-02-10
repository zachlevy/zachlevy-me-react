import React, { Component } from 'react'

import zachLevyDrinking from './images/zach_levy_drinking_512x512.png'

class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-2">
            <img src={zachLevyDrinking} className="img-fluid rounded-circle" alt="Zach Levy Sailing" />
          </div>
          <div className="col-12 col-sm-10">
            <h1>Zach Levy</h1>
            <p>Entrepreneur and Developer in Toronto, Canada</p>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default Header
