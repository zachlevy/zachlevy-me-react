import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import lifeProTipsPromoImg from '../images/life_pro_tips_book_promo_1200x628.jpg'
import historyMappedLogo from '../images/history_mapped_logo_1200x628.png'
import physlyLogo from '../images/physly_logo_1200x628.png'


class All extends Component {
  render() {
    return (
      <div>
        <h1>All Products</h1>
        <br />
        <div className="row">
          <div className="col-12 col-sm-6" itemScope itemType="http://schema.org/Product">
            <div>
              <a href="http://a.co/jjzqlpf" target="_blank" >
                <img itemProp="image" src={lifeProTipsPromoImg} className="img-fluid" alt="Life Pro Tips: An Addendum To Life. Book Promo" />
              </a>
            </div>
            <br />
            <h4 itemProp="name">Life Pro Tips: an addendum to life</h4>
            <p itemProp="description">Life Hacks and Pro Tips for life. Improve your life and the lives of those around you in this modern perspective in various aspects of you life including: Social, Career & Work, General, Entertainment.</p>
            <p itemProp="offers" itemScope itemType="http://schema.org/Offer"><span itemProp="price">$14.99 USD</span></p>
            <ul>
              <li><Link to="http://a.co/jjzqlpf" target="_blank">Available at Amazon.com</Link></li>
              <li><Link to="/blog/i-wrote-a-paperback-book-with-code/">Blog post on how I wrote it</Link></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6">
            <div>
              <a href="http://www.historymapped.com" target="_blank" >
                <img src={historyMappedLogo} className="img-fluid" alt="History Mapped" />
              </a>
            </div>
            <br />
            <h4>History Mapped</h4>
            <h5>Famous Battles Map and Timeline</h5>
            <p>Interactive map and timeline of famous historical battles on YouTube. Zoom around the map and the timeline to get context on battles.</p>
            <ul>
              <li><Link to="http://www.historymapped.com" target="_blank">Live at historymapped.com</Link></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 col-sm-6">
            <div>
              <a href="https://phys.ly" target="_blank" >
                <img src={physlyLogo} className="img-fluid" alt="Physly" />
              </a>
            </div>
            <br />
            <h4>Physly</h4>
            <h5>Physical Web URL Shortener</h5>
            <p>Physly is a url shortener specifically designed for the physical web. This is useful for the hardware limitations of the Bluetooth Eddystone protocol used in beacons for the Physical Web.</p>
            <ul>
              <li><Link to="https://phys.ly" target="_blank">Live at phys.ly</Link></li>
              <li><a href="https://github.com/zachlevy/physly" target="_blank">Physly on GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default All
