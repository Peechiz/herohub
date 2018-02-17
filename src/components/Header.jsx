import React, {Component} from 'react'
import {connect} from 'react-redux'
import {toggleMode, updatePlayer} from '../actions'
import '../css/header.css'
// import debounce from 'debounce'

class Header extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this)
    this.onPlayerChange = this.onPlayerChange.bind(this)
  }

  onClick(e) {
    this.props.dispatch(toggleMode())
  }

  onPlayerChange(e) {
    this.props.dispatch(updatePlayer(e.target.id, e.target.value))
  }

  render() {
    console.log(this.props)
    const mode = this.props.mode
    return (<header>
      <img src="/img/Herohub.png" alt="" height="30"/>
      <a href="/profile">Profile</a>
      <a href="/compare">Compare</a>
      <Switches handleChange={this.onPlayerChange} handleClick={this.onClick} mode={mode}/>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const Switches = (props) => {
  return (
  <div className="switchCTN">
    <input id="p1" onChange={props.handleChange}
      className="playerSearch" type="text"
      placeholder="battletag"/>
    <input id="p2" onChange={props.handleChange}
      className="playerSearch" type="text"
      placeholder="battletag"/>

    <div className="switches">
      <Switch type="quickplay" handleClick={props.handleClick} mode={props.mode}>Quick Play</Switch>
      <Switch type="competitive" handleClick={props.handleClick} mode={props.mode}>Competitive</Switch>
    </div>
  </div>
  )
}

const Switch = (props) => {
  if (props.mode === props.type) {
    return <div className="switch selected">{props.children}</div>
  } else {
    return (<div className="switch" onClick={props.handleClick}>{props.children}</div>)
  }
}

export default connect(mapStateToProps)(Header)
