import React, { Component } from 'react'
import { Helmet } from "react-helmet"

import { buildPsBattleUrl, getPsBattleTitle } from '../../helpers/urls'

class Battle extends Component {
  render() {
    const battle = this.props.battle
    const uploadImg = `/images/psbattles/${battle.uploadUrl}`
    return (
      <div>
        <Helmet>
          <title itemprop="name">PsBattles | Zach Levy's Blog</title>
          <meta name="description" content="PhotoshopBattles as a fun side project." />
          <meta property="og:title" content={`PsBattle ${battle.uploadTitle} | Zach Levy's Blog`} />
          <meta property="og:type" content="image" />
          <meta property="og:url" content={`${window.location.origin}${buildPsBattleUrl(getPsBattleTitle(battle.originalUrl))}`} />
          <meta property="og:image" content={`${window.location.origin}${uploadImg}`} />
        </Helmet>
        <div className="row">
          <div className="col-12">
            <div>
              <img className="img-fluid" src={uploadImg} alt={battle.uploadTitle} />
            </div>
            <br />
            <h2>{battle.uploadTitle}</h2>
            <p><a href={battle.originalUrl} target="_blank">Original Reddit Post</a></p>
            <div>
              <img className="img-fluid" src={battle.originalImageUrl} />
            </div>
            <br />
          </div>
        </div>
      </div>
    )
  }
}

export default Battle
