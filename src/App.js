import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Helmet } from "react-helmet"

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
        <Helmet>
          <title>Zach Levy | Entrepreneur and Developer in Toronto, Canada</title>
          <meta name="description" content="Zach Levy's personal website. Entrepreneur, Contract Developer, Coding Bootcamp Mentor. Blog included." />
        </Helmet>
        <Navbar />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/blog/" component={Blog} />
          <Route path="/contact/" component={Contact} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
