import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'

import Blog from './Blog'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="blog-header">
          <div className="container">
            <h1 className="blog-title">The Bootstrap Blog</h1>
            <p className="lead blog-description">An example blog template built with Bootstrap.</p>
          </div>
        </div>
        <Blog />
        <Footer />
      </div>
    );
  }
}

export default App;
