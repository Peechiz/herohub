import React, { Component } from 'react'
import {connect} from 'react-redux'

// import info from '../mock/heroInfo.json'

class TopHeroes extends Component {
  render(){
    const { p1, mode } = this.props

    const playtime = p1.us.heroes.playtime[mode]
    const sorted = Object.keys(playtime).reduce((arr, key) => {
      arr.push({
        name: key,
        time: playtime[key]
      })
      return arr
    }, []).sort((a,b) => b.time - a.time )

    // console.log('sorted',sorted)

    return (
      <div className="col-md-6">
        <h3>Top Heroes</h3>
        <div className="hero-progress">
          { sorted.map(hero => <HeroProgress key={hero.name} hero={hero} info={this.props.heroInfo[hero.name]}
          max={sorted[0].time}  />) }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    p1: state.p1,
    mode: state.mode,
    heroInfo: state.heroInfo
  }
}

function getPercent(time,max){
  if (time === max){
    return '0'
  }
  return `${(1 - time / max)*100}%`
}

const HeroProgress = (props) => {
  let {hero, info, invert, max} = props;
  let rounded = Math.round(hero.time)

  // percent = '25%' => 75% of bar filled
  const percent = getPercent(hero.time, max)
  console.log('percent', percent)

  if (!invert) {
    return (
      <div className="progress-item">
        <img src={info.thumb} alt={`${info.name}`}/>
        <div className="bar-container">
          <div className="bar" style={{ backgroundColor:info.color, boxShadow:info.shadow,
          right: percent }}></div>
          <div className="bar-text">
            <div className="title">{info.name}</div>
          <div className="description">{rounded} hours</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="progress-item">
        <img src={info.thumb} alt={`${info.name}`} style={{float: 'right'}}/>
        <div className="bar-container">
          <div className="bar" style={{ backgroundColor:info.color, boxShadow:info.shadow,
          right: percent }}></div>
          <div className="bar-text">
            <div className="title" style={{textAlign: 'left'}}>{info.name}</div>
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
