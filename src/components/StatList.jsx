import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';

class Arrow extends Component {
  render() {
    const {stat1, stat2} = this.props
    const direction = stat1 > stat2 ? <span>
      <i className="fa fa-caret-left"></i>{this.props.children}
    </span> : <span>
      {this.props.children} <i className="fa fa-caret-right"></i>
    </span>

    return direction
  }
}

const Stat = ({title, stat1, stat2}) => {

  title = title.replace(/_/ig, ' ').toUpperCase();

  return (
    <div className="row">
      <div className="col p1">
        <p>{stat1}</p>
      </div>
      <div className="col stat-ctn">
        <div className="stat">
          <Arrow stat1={stat1} stat2={stat2}>{title}</Arrow>
        </div>
      </div>
      <div className="col p2">
        <p>{stat2}</p>
      </div>
    </div>
  )
}

const StatList = ({p1, p2, mode}) => {

  const general = Object.keys(p1.us.heroes.stats['quickplay'][p1.hero.key].general_stats)

  let stat1 = p1.us.heroes.stats[mode][p1.hero.key]
  let stat2 = p2.us.heroes.stats[mode][p2.hero.key]

  function getStat(path, stat) {
    return path ? path.general_stats[stat] : 0
  }

  return (
      general.map(stat =>
      <Stat key={stat} title={stat} stat1={getStat(stat1, stat)}
        stat2={getStat(stat2,stat) || 0} />
      )
  )
}

export default StatList
