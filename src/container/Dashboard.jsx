import React from 'react'
import DashboardComponent from '../component/Dashboard.jsx'
import {
  PopinFixed,
  PopinFixedHeader,
  PopinFixedOption,
  PopinFixedContent
} from 'tracim_lib'
import i18n from '../i18n.js'

class Dashboard extends React.Component {
  render () {
    return (
      <PopinFixed customClass='appdashboard'>
        <PopinFixedHeader
          customClass='appdashboard'
          icon='fa fa-fw fa-th'
          name='title of the header'
          onClickCloseBtn={() => {}}
        />

        <PopinFixedOption customClass='appdashboard__option' i18n={i18n} />

        <PopinFixedContent customClass='appdashboard'>

          <DashboardComponent />

        </PopinFixedContent>
      </PopinFixed>
    )
  }
}

export default Dashboard
