import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'

import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'

import Blog from './Blog'
import Home from './Home'

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
        <HashRouter basename="/">
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
          </div>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
