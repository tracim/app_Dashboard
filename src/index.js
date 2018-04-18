import React from 'react'
import ReactDOM from 'react-dom'
import Dashboard from './container/Dashboard.jsx'

require('./css/index.styl')

const appInterface = {
  name: 'Dashboard',
  isRendered: false,
  renderApp: data => {
    return ReactDOM.render(
      <Dashboard data={data} />
      , document.getElementById(data.config.domContainer)
    )
  },
  hideApp: domId => {
    return ReactDOM.unmountComponentAtNode(document.getElementById(domId)) // returns bool
  }
}

module.exports = appInterface
