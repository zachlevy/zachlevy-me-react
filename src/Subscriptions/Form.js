import React, { Component } from 'react'

class SubscriptionForm extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  handleSubmitButton(e) {
    e.preventDefault()
    console.log("handleSubmitButton")
    console.log(this.state)
    fetch(`${process.env.REACT_APP_API_URL}/subscriptions`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subscription: {
          source: "zachlevy-me-react subscription form",
          email: this.state.email,
          body: {
            name: this.state.name
          }
        }
      })
    })

  }

  handleInputChange(name, e) {
    console.log("handleInputChange")
    this.setState({
      [name]: e.target.value
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 text-center">
          <h3>{this.props.callToAction}</h3>
          <p>I send out an email every few months with what I'm up to.</p>
          <div className="form-group">
            <input className="form-control" onKeyUp={this.handleInputChange.bind(this, "name")} type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input className="form-control" onKeyUp={this.handleInputChange.bind(this, "email")} type="email" placeholder="example@email.com" />
          </div>
          <br />
          <button onClick={this.handleSubmitButton.bind(this)} className="btn btn-danger btn-block">{this.props.buttonText}</button>
        </div>
      </div>
    )
  }
}

export default SubscriptionForm
