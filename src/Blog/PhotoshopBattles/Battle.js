import React, { Component } from 'react'
import { Helmet } from "react-helmet"

import uploadImage from '../../images/first_exit_media_logo_1024x512.png'

import { buildPsBattleUrl } from '../../helpers/urls'

class Battle extends Component {
  render() {
    const battle = this.props.battle
    return (
      <div>
        <Helmet>
          <title itemprop="name">PhotoshopBattle | Zach Levy's Blog</title>
          <meta name="description" content="PhotoshopBattles as a fun side project." />
          <meta property="og:title" content={battle.uploadUrl} />
          <meta property="og:type" content="image" />
          <meta property="og:url" content={buildPsBattleUrl(battle.uploadTitle)} />
          <meta property="og:image" content={battle.uploadUrl} />
        </Helmet>
        <div className="row">
          <div className="col-12">
            <div>
              <img className="img-fluid" src={battle.uploadUrl} alt={battle.uploadTitle} />
            </div>
            <br />
            <h2>{battle.uploadTitle}</h2>
            <p><a href={battle.originalUrl} target="_blank">Original Reddit Post</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Battle
