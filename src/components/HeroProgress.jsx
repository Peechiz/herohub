import React, { Component } from 'react'

import info from '../mock/heroInfo.json'
import playtime from '../mock/playtime.json'

class TopHeroes extends Component {
  constructor() {
    super();
    this.state = {
      heroData: {},
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
      heroData: info,
      playtime: sorted
    })
  }
  render(){
    let playtime = this.state.playtime
    let heroData = this.state.heroData
    return (
      <div className="col-md-6">
        <h3>Top Heroes</h3>
        <div className="hero-progress">
          { playtime.map(hero => <HeroProgress key={hero.name} hero={hero} info={heroData[hero.name]}/>) }
        </div>
      </div>
    )
  }
}

const HeroProgress = (props) => {
  let {hero, info, invert} = props;
  // console.log('hero',hero)
  // console.log('info',info)
  let rounded = Math.round(hero.time)

  if (!invert) {
    return (
      <div className="progress-item">
        <img src={info.thumb} alt={`${hero.name}`}/>
        <div className="bar-container">
          <div className="bar" style={{ backgroundColor:info.color, boxShadow:info.shadow}}></div>
          <div className="bar-text">
            <div className="title">{hero.name}</div>
          <div className="description">{rounded} hours</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="progress-item">
        <img src={info.thumb} alt={`${hero.name}`} style={{float: 'right'}}/>
        <div className="bar-container">
          <div className="bar" style={{ backgroundColor:info.color, boxShadow:info.shadow}}></div>
          <div className="bar-text">
            <div className="title">{hero.name}</div>
            <div className="description">
              {rounded} hours
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default TopHeroes
export { HeroProgress }
