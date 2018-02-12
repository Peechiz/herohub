import React, { Component } from 'react'
import heroes from '../mock/topHeroes.json'
import playtime from '../mock/playtime.json'
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
      <div class="row">
        <div class="lvl" style={bk}>
          <div class="num">6</div>
        </div>
        <h1>Player Name</h1>
      </div>
      <p>824 games won</p>
    </div>
  )
}


class TopHeroes extends Component {
  constructor() {
    super();
    this.state = {
      heroes: {},
      playtime: []
    }
  }
  componentWillMount(){

    // get sorted array of playtime from playtime object
    let sorted = Object.keys(playtime).reduce((arr, key) => {
      arr.push({
        name: key,
        time: playtime[key]
      })
      return arr
    }, []).sort((a,b) => b.time - a.time )

    this.setState({
      heroes,
      playtime: sorted
    })
  }
  render(){
    let playtime = this.state.playtime
    let info = this.state.heroes
    return (
      <div className="col-md-6">
        <h3>Top Heroes</h3>
        <div className="hero-progress">
          { playtime.map(hero => <HeroProgress key={hero.name} hero={hero} info={info}/>) }
        </div>
      </div>
    )
  }
}

const HeroProgress = (props) => {
  let {hero, info} = props;
  return (
    <div className="progress-item">
      <img src={info[hero.name].thumb} alt={`${hero.name}`}/>
      <div className="bar-container">
        <div className="bar" style={{ backgroundColor:info[hero.name].color, boxShadow:info[hero.name].shadow}}></div>
        <div className="bar-text">
          <div className="title">{hero.name}</div>
          <div className="description">{Math.round(hero.time)} hours</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
