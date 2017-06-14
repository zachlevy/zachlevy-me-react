import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import lifeProTipsCoverImg from '../images/life_pro_tips_book_cover_792x1024.png'

const blogTeasers = [
  {
    url: "/blog/i-wrote-a-paperback-book-with-code/",
    img: <img src={lifeProTipsCoverImg} className="img-fluid" alt="Life Pro Tips: An Addendum To Life. Book Cover" />,
    description: "A side project of mine where I wrote and published a paperback book available on Amazon.",
    title: "I Wrote A Paperback Book With Code"
  }, {
    url: "/blog/dataisbeautiful/foreign-aid-by-gdp/",
    img: <img src={"http://placehold.it/400x300"} className="img-fluid" alt="DataIsBeautiful Foreign Aid By GDP" />,
    description: "Beautiful graphs for representing foreign aid by country.",
    title: "DataIsBeautiful: Foreign Aid By GDP"
  }
]

class All extends Component {
  render() {
    return (
      <div>
        <h1>Blog Posts</h1>
        <br />
        {
          blogTeasers.map((content, index) => {
            return (
              <div>
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
                <br />
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default All
