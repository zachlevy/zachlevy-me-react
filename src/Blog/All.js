import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import zachLevySailing from '../images/zach_levy_sailing_512x512.png'

const blogTeasers = [
  (
    <div>
      <h4><Link to="/blog/i-wrote-a-paperback-book-with-code">I Wrote A Paperback Book With Code</Link></h4>
      <p>A side project of mine where I wrote and published a paperback book available on Amazon.</p>
    </div>
  )
]

class All extends Component {
  render() {
    return (
      <div>
        <h1>All Blog Posts</h1>
        <br />
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

export default All
