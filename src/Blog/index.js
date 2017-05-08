import React, { Component } from 'react'

import Sidebar from './Sidebar'
import BookPublishingPost from './BookPublishing'
import ExamplePost from './Example'


class Blog extends Component {
  render() {
    return (
      <div className="container">

        <div className="row">

          <div className="col-sm-8 blog-main">

            <BookPublishingPost />

          </div>

          <Sidebar />

        </div>

      </div>

    )
  }
}

export default Blog
