import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Helmet } from "react-helmet"

import Sidebar from './Sidebar'

import BookPublishing from './BookPublishing'
import Example from './Example'
import All from './All'

class Blog extends Component {

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Zach Levy's Blog</title>
          <meta name="description" content="Side Projects, Side Hustles, and Opinionated Insights" />
        </Helmet>
        <div className="row">
          <div className="col-sm-8">
            <Route exact path="/blog/" component={All} />
            <Route path="/blog/i-wrote-a-paperback-book-with-code" component={BookPublishing} />
            <Route path="/blog/example" component={Example} />
          </div>
          <Sidebar />
        </div>
      </div>

    )
  }
}

export default Blog
