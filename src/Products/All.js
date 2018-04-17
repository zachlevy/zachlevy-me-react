import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import lifeProTipsPromoImg from '../images/life_pro_tips_book_promo_1200x628.jpg'
import historyMappedLogo from '../images/history_mapped_logo_1200x628.png'
import physlyLogo from '../images/physly_logo_1200x628.png'
import absurdHistoryLogo from '../images/absurd_history_podcast_1200x628.jpg'
import nitroxLogo from '../images/nitrox_logo_1200x628.png'

class All extends Component {
  render() {
    return (
      <div>
        <h1>My Products</h1>
        <p>I love building products, here are my favorites.</p>
        <br />
        <div className="row">

          <div className="col-12 col-sm-6">
            <div>
              <a href="https://nitrox.io" target="_blank" >
                <img src={nitroxLogo} className="img-fluid" alt="Nitrox" />
              </a>
            </div>
            <br />
            <h4>Nitrox</h4>
            <h5>Remote Worker Tools</h5>
            <p>Nitrox lets your remote and Work From Home team members feel like they are in the office with the rest of the team. The Nitrox bridge keeps an open audio connection between the office and anyone not at the office.</p>
            <ul>
              <li><Link to="https://nitrox.io" target="_blank">Connect at nitrox.io</Link></li>
            </ul>
          </div>
          <div className="col-12 col-sm-6">
            <div>
              <a href="http://absurdhistory.com" target="_blank" >
                <img src={absurdHistoryLogo} className="img-fluid" alt="Absurd History Podcast" />
              </a>
            </div>
            <br />
            <h4>Absurd History</h4>
            <h5>Podcast</h5>
            <p>Listen to myself and Michael Brown tell you the most absurd stories from history. True tales from Rome and Medieval Europe so insane your jaw will hit the floor.</p>
            <ul>
              <li><Link to="http://absurdhistory.com" target="_blank">Listen on absurdhistory.com</Link></li>
              <li><Link to="https://itunes.apple.com/us/podcast/absurd-history/id1314741089" target="_blank">Listen on iTunes</Link></li>
              <li><Link to="https://play.google.com/music/listen#/ps/I6jhbk4iibgzmhfmd3zkq2ydsp4" target="_blank">Listen on Google Play</Link></li>
            </ul>
          </div>
        </div>
        <hr />
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
            <p itemProp="offers" itemScope itemType="http://schema.org/Offer"><span itemProp="price">$11.99 USD</span></p>
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
            <p>Interactive map and timeline of hugely famous historical battles on YouTube. Zoom around the map and the timeline to get context on the most interesting ancient battles.</p>
            <ul>
              <li><Link to="http://www.historymapped.com" target="_blank">Live at historymapped.com</Link></li>
              <li><a href="https://github.com/zachlevy/history-mapped" target="_blank">History Mapped on GitHub</a></li>
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
