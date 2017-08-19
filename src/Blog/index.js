import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Helmet } from "react-helmet"

import Sidebar from './Sidebar'

import BookPublishing from './BookPublishing'
import Example from './Example'
import All from './All'

// use a different layout for sidebar if photoshopbatle or not
import { isPhotoshopBattle } from '../helpers/urls'

import PhotoshopBattles from './PhotoshopBattles'
import DataIsBeautiful from './DataIsBeautiful'

import SubscriptionForm from '../Subscriptions/Form'

class Blog extends Component {
  // use a different layout for sidebar if photoshopbatle or not
  render() {
    return (
      <div>
        <div className="container">
          <Helmet>
            <title>Zach Levy's Blog</title>
            <meta name="description" content="Side Projects, Side Hustles, and Opinionated Insights" />
          </Helmet>
          <div className="row">
            <div className={`col-12 ${isPhotoshopBattle() ? "col-sm-9" : "col-sm-8"}`}>
              <Route exact path="/blog/" component={All} />
              <Route path="/blog/i-wrote-a-paperback-book-with-code/" component={BookPublishing} />
              <Route path="/blog/example/" component={Example} />
              <Route path="/blog/photoshopbattles/" component={PhotoshopBattles} />
              <Route path="/blog/dataisbeautiful/" component={DataIsBeautiful} />
            </div>
            <Sidebar colClass={`col-12 col-sm-3 ${isPhotoshopBattle() ? "" : "offset-sm-1"}`} />
          </div>
        </div>
        <div className="container-fluid stats-block">
          <div className="row">
            <div className="col-12 col-sm-8 offset-sm-2">
              <br />
              <SubscriptionForm callToAction="Want to find out about my latest blog posts?" buttonText="Sure"></SubscriptionForm>
              <br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Blog
