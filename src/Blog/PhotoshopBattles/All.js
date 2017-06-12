import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const blogTeasers = []

class All extends Component {
  render() {
    return (
      <div>
        <h1>All Photoshop Battles</h1>
        <br />
        {
          blogTeasers.map((content, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-12 col-sm-2">
                  <Link to={content.url}>
                    {content.img}
                  </Link>
                </div>
                <div className="col-12 col-sm-10">
                  <h4><Link to={content.url}>{content.title}</Link></h4>
                  <p>{content.description}</p>
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
