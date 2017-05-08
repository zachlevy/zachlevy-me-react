import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'

import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

import Blog from './Blog'
import Home from './Home'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HashRouter basename="/">
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </div>
        </HashRouter>
        <Footer />
      </div>
    )
  }
}

export default App
