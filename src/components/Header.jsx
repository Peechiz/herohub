import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleMode } from '../actions'
import '../css/header.css'

class Header extends Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    console.log(this.props)
    this.props.toggleMode()
    console.log(this.props.mode)
  }

  render() {
    const mode = this.props.mode
    return (
      <header>
        <a href="/profile">Profile</a>
        <a href="/compare">Compare</a>
      <Switches handleClick={this.onClick} mode={mode}/>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return state.mode
}

const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({toggleMode}, dispatch)
}

const Switches = (props) => {
  console.log('switchprops', props)
  return (
    <div className="switchCTN">
      <input className="playerSearch" type="text" placeholder="battletag"/>
      <input className="playerSearch" type="text" placeholder="battletag"/>
      <div className="switches">
        <Switch type="qp" handleClick={props.handleClick} mode={props.mode}>Quick Play</Switch>
        <Switch type="comp" handleClick={props.handleClick} mode={props.mode}>Competitive</Switch>
      </div>
    </div>
  )
}

const Switch = (props) => {
  if (props.mode === props.type){
    return <div className="switch selected">{props.children}</div>
  } else {
    return (
      <div className="switch"
        onClick={props.handleClick}>{props.children}</div>
    )
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(Header)
