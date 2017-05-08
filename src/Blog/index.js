import React, { Component } from 'react'

import Sidebar from './Sidebar'
import BookPublishingPost from './BookPublishing'
import ExamplePost from './Example'


class Navbar extends Component {
  render() {
    return (
      <div className="container">

        <div className="row">

          <div className="col-sm-8 blog-main">

            <BookPublishingPost />
            <ExamplePost />

            <nav className="blog-pagination">
              <a className="btn btn-outline-primary" href="#">Older</a>
              <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
            </nav>

          </div>

          <Sidebar />

        </div>

      </div>

    )
  }
}

export default Navbar
