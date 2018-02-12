import React, {Component} from 'react'
import '../css/compare.css'

class Compare extends Component {
  render() {
    return (<div>
      <div>
        <select className = "form-control role-select" >
          <option value="">Fav Tank</option>
          <option value="">Fav Support</option>
          <option value="">Fav DPS</option>
          <option value="">Fav Defense</option>
        </select>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h1>Player1 Name</h1>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h1>Player2 Name</h1>
        </div>
      </div>
    </div>)
  }
}

export default Compare
