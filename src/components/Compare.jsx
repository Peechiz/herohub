import React, {Component} from 'react'
import { HeroProgress } from './HeroProgress.jsx'

import info from '../mock/heroInfo.json'
import '../css/compare.css'

let dva = {
  name: 'dva',
  time: 12.468
}

class Compare extends Component {
  render() {
    return (<div>
      <div className="row">
        <div className="col-md-5">
          <img src="/img/dva.png" height="200" alt=""/>
        </div>
        <div className="col-md-2 flex-mid">
            <select className="form-control">
              <option value="">Fav Tank</option>
              <option value="">Fav Support</option>
              <option value="">Fav DPS</option>
            </select>
        </div>
        <div className="col-md-5">
          <img src="/img/dva.png" height="200" style={{transform: 'scaleX(-1)'}}alt=""/>
        </div>
      </div>


      <div className="row">
        <div className="col-md-5 left-side">
          <div style={{"padding": '0 1em'}}>
            <h1>Player1 Name</h1>
          <div>
              <HeroProgress invert="true" hero={dva} info={info[dva.name]}/>
            </div>
          </div>
        </div>

        <div className="col-md-2 flex-mid">
          <select className="form-control">
            <option value="">stat category1</option>
          </select>
        </div>

        <div className="col-md-5">
          <div style={{padding: '0 1em'}}>
            <h1>Player2 Name</h1>
            <div>
              <HeroProgress hero={dva} info={info[dva.name]}/>
            </div>
          </div>
        </div>
      </div>

      <Stat title="test" stat1={7} stat2={12}/>
      <Stat title="test" stat1={7} stat2={12}/>

    </div>)
  }
}

const Stat = ({title, stat1, stat2}) => {
  const arrow = stat1 > stat2 ? 'left' : 'right';
  return (
    <div className="row">
      <div className="col-md-5 p1">
        <p>{stat1}</p>
      </div>
      <div className="col-md-2 stat-ctn">
        <div className={`stat stat-${arrow}`}>
          {title}
        </div>
      </div>
      <div className="col-md-5 p2">
        <p>{stat2}</p>
      </div>
    </div>
  )
}

export default Compare
