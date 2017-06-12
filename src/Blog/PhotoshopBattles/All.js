import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { buildPsBattleUrl, getPsBattleTitle } from '../../helpers/urls'

class All extends Component {
  render() {
    const battles = this.props.battles
    // originalUrl
    // originalImageUrl
    // uploadUrl
    // uploadTitle
    return (
      <div>
        <h1>All Photoshop Battles</h1>
        <br />
        {
          battles.map((battle, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-12">
                  <Link to={buildPsBattleUrl(getPsBattleTitle(battle.originalUrl))}>
                    {battle.uploadTitle}
                  </Link>
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
