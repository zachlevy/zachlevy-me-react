import React, { Component } from 'react'

import PropTypes from 'prop-types'

class Block extends Component {
  render() {
    return (
      <div>
        <div className="stats-block text-center">
          <h1>{this.props.statistic}</h1>
          <p>{this.props.description}</p>
        </div>
        <br />
      </div>
    )
  }
}

Block.propTypes  = {
  statistic: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Block
