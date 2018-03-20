import React, {Component} from 'react'
import {connect} from 'react-redux'
import {toggleMode, updatePlayer, updateStats} from '../actions'
import '../css/header.css'
var debounce = require('debounce')

class Header extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this)
    this.onPlayerChange = this.onPlayerChange.bind(this)
  }

  onClick(e) {
    this.props.dispatch(toggleMode())
  }
  // i.e. 'p1', 'jabujo'
  onPlayerChange = (id, val) => {
    // TODO this needs a server
    fetch(`/hero/${val}`).then(res => {
      return res.json()
    }).then(data => {
      this.props.dispatch(updatePlayer(id, val))
      this.props.dispatch(updateStats(id, data))
    })
 
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

class Switches extends Component {
  constructor(props){
    super(props)
    this.change = debounce(this.props.handleChange,300)
  }

  handleChange = e => {
    const {id, value} = e.target;
    this.change(id, value)
  }

  render(){
    return (
      <div className="switchCTN">
      <input id="p1" onChange={this.handleChange}
      className="playerSearch" type="text"
      placeholder="battletag"/>
      <input id="p2" onChange={this.handleChange}
      className="playerSearch" type="text"
      placeholder="battletag"/>

      <div className="switches">
      <Switch type="quickplay" handleClick={this.props.handleClick} mode={this.props.mode}>Quick Play</Switch>
      <Switch type="competitive" handleClick={this.props.handleClick} mode={this.props.mode}>Competitive</Switch>
      </div>
      </div>
    )
  }
}

const Switch = (props) => {
  if (props.mode === props.type) {
    return <div className="switch selected">{props.children}</div>
  } else {
    return (<div className="switch" onClick={props.handleClick}>{props.children}</div>)
  }
}

export default connect(mapStateToProps)(Header)
