import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Sidebar from './Sidebar'

const blogTeasers = [
  (
    <div>
      <h4><Link to="/blog/i-wrote-a-paperback-book-with-code">I Wrote A Paperback Book With Code</Link></h4>
      <p>A side project of mine where I wrote and published a paperback book available on Amazon.</p>
    </div>
  )
]

class Blog extends Component {
  content() {
    if (this.props.children) {
      return this.props.children
    } else {
      return (
        <div>
          <h1>Blog Index</h1>
          {
            blogTeasers.map((content, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-12">
                    {content}
                  </div>
                </div>
              )
            })
          }
        </div>
      )
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            {this.content()}
          </div>
          <Sidebar />
        </div>
      </div>

    )
  }
}

export default Blog
