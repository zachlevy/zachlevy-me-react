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
              <h2>Contact Zach</h2>
              <p><a href="mailto:zach@zachlevy.me">zach@zachlevy.me</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
