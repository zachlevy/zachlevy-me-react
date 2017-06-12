import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import All from './All'
import { battles } from './battles'
import { Helmet } from "react-helmet"

import Battle from './Battle'

class PhotoshopBattles extends Component {

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Zach Levy's Blog</title>
          <meta name="description" content="Side Projects, Side Hustles, and Opinionated Insights" />
        </Helmet>
        <div className="row">
          <div className="col-12">
            <Route exact path="/blog/photoshopbattles/" render={() => <All battles={battles} />} />
            {
              battles.map((battle, index) => {
                console.log(battle)
                // extract from reddit url, example: "https://www.reddit.com/r/photoshopbattles/comments/6gr7m4/psbattle_this_tiger_swimming_through_algae/"
                const title = battle.originalUrl.split("/").slice(-2, -1)[0]
                return <Route key={index} path={`/blog/photoshopbattles/${title}/`} render={() => <Battle battle={battle} />}/>
              })
            }
          </div>
        </div>
      </div>

    )
  }
}

export default PhotoshopBattles
