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
      <div className='landing-container'>
        <div className='showcase background-tint'>
          <h1 className='logo'>JOB STATUS</h1>
        </div>
      </div>

    )
  }
}
export default LandingPage
