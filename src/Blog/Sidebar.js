import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import zachLevySailing from '../images/zach_levy_sailing_512x512.png'

class Sidebar extends Component {
  render() {
    return (
      <div className="col-sm-3 offset-sm-1">
        <div className="row">
          <div className="col-12">
            <div className="sidebar-profile-img-wrap">
              <img src={zachLevySailing} className="img-fluid rounded-circle" alt="Zach Levy Sailing" />
            </div>
            <h1>Zach Levy</h1>
            <p>Entrepreneur and Developer in Toronto, Canada</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h4>Recommended</h4>
            <ul className="">
              <li><Link to="/blog/i-wrote-a-paperback-book-with-code">I Wrote A Paperback Book With Code</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
