import React, { Component } from 'react';

import { HashRouter, Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <HashRouter>
        <div className="blog-masthead">
          <div className="container">
            <nav className="nav blog-nav">
              <Link className="nav-link active" to="/">Home</Link>
              <Link className="nav-link" to="/blog">Blog</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Navbar;
