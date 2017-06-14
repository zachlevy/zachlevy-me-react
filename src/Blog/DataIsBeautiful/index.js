import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { Helmet } from "react-helmet"

import GDP from './GDP'

class DataIsBeautiful extends Component {

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Data Is Beautiful | Zach Levy's Blog</title>
          <meta name="description" content="Beautiful representations of data with Photoshop and d3.js" />
        </Helmet>
        <div className="row">
          <div className="col-12">
            <Route path="/blog/dataisbeautiful/gdp/" component={GDP} />
          </div>
        </div>
      </div>

    )
  }
}

export default DataIsBeautiful
