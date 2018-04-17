import React, { Component } from 'react'

import './Testimonials.css'

class Testimonials extends Component {
  render() {
    const slides = this.props.slides
    return (
      <div className="csslider">
        {
          slides.map((slide, index) => {
            return (
              <input key={index} type="radio" name="slides" id={`slides_${index}`} defaultChecked={index === 0} />
            )
          })
        }
        <ul style={{height: this.props.height || "300px", width: this.props.width || "320px"}}>
          {
            slides.map((slide, index) => {
              return <li key={index}>{slide}</li>
            })
          }
        </ul>
        <div className="arrows">
          {
            slides.map((slide, index) => {
              return <label key={index} htmlFor={`slides_${index}`}></label>
            })
          }
          </div>
          <div className="navigation">
          <div>
            {
              slides.map((slide, index) => {
                return <label key={index} htmlFor={`slides_${index}`}></label>
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials
