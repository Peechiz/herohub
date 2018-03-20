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
          <PlayerInfo p1={this.props.p1} mode={this.props.mode}/>
          <TopHeroes/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    p1: state.p1,
    mode: state.mode
  }
}

const PlayerInfo = (props) => {
  // console.log(props)

  const {mode, p1} = props
  const stats = p1.us.stats[props.mode].overall_stats

  const bk = {
    backgroundImage: `url(${stats.rank_image})`
  }

  const icon = stats.avatar

  return (
    <div className="col-md-6">
      <div className="row">
        <div className="icon">
          <img className="icon" alt="" src={icon}/>
        </div>
        <div className="lvl" style={bk}>
          <div className="num">{stats.level}</div>
        </div>
        <h1>{props.p1.battletag || 'Blam'}</h1>
      </div>
      <div className="row">
        <p className="wins">{`${stats.wins} game${stats.wins === 1 ? '' : 's'} won`}</p>
      </div>

      <div className="row">
        <table className="table">
          <thead>
            <th>Category</th>
            <th>Stat</th>
          </thead>
          <tbody>
            {
              Object.keys(p1.us.stats[mode].game_stats).map(key => {
                return (
                  <tr>
                    <td>{key}</td>
                    <td>{p1.us.stats[mode].game_stats[key]}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Profile)
