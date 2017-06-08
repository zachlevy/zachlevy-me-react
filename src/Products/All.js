import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class All extends Component {
  render() {
    return (
      <div>
        <h1>All Products</h1>
        <br />
        <div className="row">
          <div className="col-12 col-sm-6">
            <h4>Life Pro Tips: an addendum to life</h4>
            <p>I wrote a book and put it on Amazon.</p>
            <ul>
              <li><Link to="http://a.co/jjzqlpf" target="_blank">Available at Amazon.com</Link></li>
              <li><Link to="/blog/i-wrote-a-paperback-book-with-code/">How I made it</Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default All
