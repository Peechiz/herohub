import React, { Component } from 'react'
import {connect} from 'react-redux'

import info from '../mock/heroInfo.json'

class TopHeroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroInfo: {},
    }
  }
  componentWillMount(){
    // get sorted array of playtime from playtime object
    this.setState({
      heroInfo: info,
    })
  }
  render(){
    const mode = this.props.mode
    // console.log(this.props.data)
    const playtime = this.props.data.heroes.playtime[mode]
    const sorted = Object.keys(playtime).reduce((arr, key) => {
      arr.push({
        name: key,
        time: playtime[key]
      })
      return arr
    }, []).sort((a,b) => b.time - a.time )

    return (
      <div className="col-md-6">
        <h3>Top Heroes</h3>
        <div className="hero-progress">
          { sorted.map(hero => <HeroProgress key={hero.name} hero={hero} info={this.state.heroInfo[hero.name]}/>) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.players.p1.data,
    mode: state.mode
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

export default connect(mapStateToProps)(TopHeroes)
export { HeroProgress }
