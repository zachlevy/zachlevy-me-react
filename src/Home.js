import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="blog-header">
              <div className="container">
                <h1 className="blog-title">Zach Levy</h1>
                <p className="lead blog-description">Entrepreneur and Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-4">
            <h3>Favorite Stack</h3>
            <ul>
              <li>Ruby on Rails</li>
              <li>React</li>
            </ul>
            <p>Other than that, anything that solves the problem</p>
          </div>
          <div className="col-12 col-sm-4">
            <h3>Other Tools</h3>
            <ul>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Trello</li>
            </ul>
          </div>
          <div className="col-12 col-sm-4">
            <h3>Self-Deprecated Stack</h3>
            <p>Hopefully I'll never have to use these again</p>
            <ul>
              <li>PHP / Drupal</li>
              <li>Python* / Django</li>
              <li>ES5 / CoffeeScript / Angular1</li>
              <li>Objective-C</li>
              <li>Java</li>
            </ul>
            <p>*Alright, Python is still pretty awesome</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
