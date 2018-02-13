import React, { Component } from 'react'
import TopHeroes from './HeroProgress.jsx'
import {connect} from 'react-redux'
import '../css/topHeroes.css'
import '../css/profile.css'


class Profile extends Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <PlayerInfo player={this.props.player} mode={this.props.mode}/>
          <TopHeroes/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.players.p1,
    mode: state.mode
  }
}

const PlayerInfo = (props) => {
  const stats = props.player.data.stats[props.mode].overall_stats

  const bk = {
    backgroundImage: `url(${stats.rank_image})`
  }

  return (
    <div className="col-md-6">
      <div className="row">
        <div className="lvl" style={bk}>
          <div className="num">{stats.level}</div>
        </div>
        <h1>{props.player.battletag || 'Blam'}</h1>
      </div>
      <p>{`${stats.wins} games won`}</p>
    </div>
  )
}

export default connect(mapStateToProps)(Profile)
