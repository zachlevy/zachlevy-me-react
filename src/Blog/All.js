import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import lifeProTipsCoverImg from '../images/life_pro_tips_book_cover_792x1024.png'
import zachLevyDrinking from '../images/zach_levy_drinking_512x512.png'
import developmentAidByCountryZachLevy from '../images/dataisbeautiful/development_aid_by_country_zach_levy.png'
import { Helmet } from 'react-helmet'

const blogTeasers = [
  {
    url: "/blog/i-wrote-a-paperback-book-with-code/",
    img: <img src={lifeProTipsCoverImg} className="img-fluid" alt="Life Pro Tips: An Addendum To Life. Book Cover" />,
    description: "A side project of mine where I wrote and published a paperback book available on Amazon.",
    title: "I Wrote A Paperback Book With Code"
  }, {
    url: "/blog/dataisbeautiful/development-aid-by-gdp/",
    img: <img src={developmentAidByCountryZachLevy} className="img-fluid" alt="DataIsBeautiful Development Aid By GDP" />,
    description: "Beautiful graphs for representing development aid by country.",
    title: "DataIsBeautiful: Development Aid By GDP"
  }
]

class All extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Zach Levy's Blog</title>
          <meta name="description" content="Blog posts about things I make." />
          <meta property="og:title" content="Zach Levy's Blog" />
          <meta property="og:description" content="Blog posts about things I make." />
          <meta property="og:image" content={process.env.REACT_APP_URL + zachLevyDrinking} />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={process.env.REACT_APP_URL + this.props.location.pathname} />
          <meta property="fb:app_id" content={process.env.REACT_APP_FB_APP_ID} />
        </Helmet>
        <h1>Blog Posts</h1>
        <br />
        {
          blogTeasers.map((content, index) => {
            return (
              <div key={index}>
                <div className="row">
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
