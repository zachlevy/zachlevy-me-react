import React from 'react'
import { render } from 'react-snapshot'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'

render(
  <Router basename="/">
    <App />
  </Router>,
  document.getElementById('root')
)
