import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div className="blog-masthead">
        <div className="container">
          <nav className="nav blog-nav">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
            <NavLink className="nav-link" to="/blog/">Blog</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </nav>
        </div>
      </div>
    )
  }
}

export default Navbar
