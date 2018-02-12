import React, { Component } from 'react'
import '../css/header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <a href="#">Profile</a>
        <a href="#">Compare</a>
        <Switches/>
      </header>
    )
  }
}

const Switches = (props) => (
  <div className="switchCTN">
    <input className="playerSearch" type="text" placeholder="battletag"/>
    <input className="playerSearch" type="text" placeholder="battletag"/>
    <div className="switches">
      <div className="switch selected">Quick Play</div>
      <div className="switch">Competitive</div>
    </div>
  </div>
);

export default Header
