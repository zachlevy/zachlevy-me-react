import React, { Component } from 'react'

import { HashRouter, NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <HashRouter>
        <div className="blog-masthead">
          <div className="container">
            <nav className="nav blog-nav">
              <NavLink className="nav-link" exact to="/">Home</NavLink>
              <NavLink className="nav-link" to="/blog">Blog</NavLink>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </nav>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Navbar
