import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="blog-masthead">
        <div className="container">
          <nav className="nav blog-nav">
            <a className="nav-link active" href="/">Home</a>
            <a className="nav-link" href="#">Side Projects</a>
            <a className="nav-link" href="http://firstexitmedia.com" target="_blank">First Exit Media</a>
            <a className="nav-link" href="/blog">Blog</a>
            <a className="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
