import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'

import Blog from './Blog'
import Jobs from './Jobs'
import Products from './Products'
import Domains from './Domains'
import Home from './Home'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/blog/" component={Blog} />
          <Route path="/jobs/" component={Jobs} />
          <Route path="/products/" component={Products} />
          <Route path="/domains/" component={Domains} />
          <Route path="/contact/" component={Contact} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App
