import React, { Component } from 'react'
import './LandingPage.css'

class LandingPage extends Component {
  constructor () {
    super()

    this.state = {
      jobInfo: []
    }
  }

  render () {
    return (
      <div className='landing-page-container'>
        <header className='showcase' />
      </div>
    )
  }
}
export default LandingPage
