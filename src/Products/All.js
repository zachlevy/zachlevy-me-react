import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import lifeProTipsPromoImg from '../images/life_pro_tips_book_promo_1200x628.jpg'

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
        </div>
      </div>
    )
  }
}

export default All
