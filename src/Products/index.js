import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Helmet } from "react-helmet"

import All from './All'

class Products extends Component {

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Zach Levy's Products</title>
          <meta name="description" content="Side Projects, Side Hustles, Hackathons." />
        </Helmet>
        <div className="row">
          <div className="col-sm-12">
            <Route exact path="/products/" component={All} />
          </div>
        </div>
      </div>

    )
  }
}

export default Products
