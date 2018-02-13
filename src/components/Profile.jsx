import React, { Component } from 'react'
import TopHeroes from './HeroProgress.jsx'
import '../css/topHeroes.css'
import '../css/profile.css'


class Profile extends Component {
  render(){
    return (
      <div className="container">
        <div className="row">
          <PlayerInfo/>
          <TopHeroes/>
        </div>
      </div>
    )
  }
}

const PlayerInfo = (props) => {
  let bk = {
    backgroundImage: `url(https://d1u1mce87gyfbn.cloudfront.net/game/playerlevelrewards/0x025000000000093F_Border.png)`
  }
  return (
    <div className="col-md-6">
      <div className="row">
        <div className="lvl" style={bk}>
          <div className="num">6</div>
        </div>
        <h1>Player Name</h1>
      </div>
      <p>824 games won</p>
    </div>
  )
}


export default Profile
