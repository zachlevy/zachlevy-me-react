import React, { Component } from 'react'

import { currentYear, timestampToDateString } from './helpers/dates'

class Footer extends Component {
  render() {
    return (
      <footer className="blog-footer">
        <div className="container">
          <p><a href="https://github.com/zachlevy/zachlevy-me-react" target="_blank">Built</a> by Zach Levy, obviously. &copy; {currentYear}</p>
          <p>Last updated {timestampToDateString(process.env.REACT_APP_TIMESTAMP)}</p>
          <div className="row text-center">
            <div className="col-12">
              <ul className="list-inline social-links">
                <li className="list-inline-item"><h4><a href="https://github.com/zachlevy" target="_blank" ><i className="fa fa-github"></i></a></h4></li>
                <li className="list-inline-item"><h4><a href="https://www.facebook.com/zacharyaaronlevy" target="_blank" ><i className="fa fa-facebook"></i></a></h4></li>
                <li className="list-inline-item"><h4><a href="https://twitter.com/zachary_levy" target="_blank" ><i className="fa fa-twitter"></i></a></h4></li>
                <li className="list-inline-item"><h4><a href="https://www.linkedin.com/in/zacharylevy/" target="_blank" ><i className="fa fa-linkedin"></i></a></h4></li>
                <li className="list-inline-item"><h4><a href="https://www.youtube.com/channel/UC6g3w6cVXLuPvrRjBOmQtag" target="_blank" ><i className="fa fa-youtube"></i></a></h4></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
