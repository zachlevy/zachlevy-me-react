import React, { Component } from 'react'

import Header from './Header'

class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Email Zach</h2>
              <p><a href="mailto:zach@zachlevy.me">zach@zachlevy.me</a></p>
              <h2>Contract Work</h2>
              <p>I do all my freelancing through <a href="http://firstexitmedia.com" target="_blank">First Exit Media</a>.</p>
              <p><a href="mailto:zach@firstexitmedia.com">zach@firstexitmedia.com</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
