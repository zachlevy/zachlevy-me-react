import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import zachLevySailing from '../images/zach_levy_sailing_512x512.png'

class Sidebar extends Component {

  render() {
    return (
      <div className={this.props.colClass}>
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
              <li><NavLink to="/blog/i-wrote-a-paperback-book-with-code/">I Wrote A Paperback Book With Code</NavLink></li>
              <li><NavLink to="/blog/i-wrote-a-paperback-book-with-code/">Life Pro Tips: an addendum to life</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
