import React, {Component} from 'react'
import { HeroProgress } from './HeroProgress.jsx'
import StatList from './StatList.jsx'
import { connect } from 'react-redux'
import { selectRole, heroSelect } from '../actions'
import zeroComp from '../mock/zeroComp.json'

// import info from '../mock/heroInfo.json'
import '../css/compare.css'
import { getInfoArray } from '../util'

class Compare extends Component {

  constructor(props) {
    super(props);
    [
      'roleSelect',
      'heroSelect'
    ].forEach(fn => this[fn] = this[fn].bind(this))
  }

  roleSelect(e) {
    this.props.dispatch(selectRole(e.target.value))
    this.props.dispatch(heroSelect('top'))
  }

  heroSelect(e) {
    this.props.dispatch(heroSelect(e.target.value))
  }

  render() {
    const {
      p1, p2, role, mode, selectedHero, heroInfo, filteredHeroes
    } = this.props

    if (selectedHero === 'top') {
      p1.hero = getTopHero(role, mode, p1, heroInfo);
      p2.hero = getTopHero(role, mode, p2, heroInfo);
    } else if (selectedHero) {
      console.log(selectedHero)
      p1.hero = getHeroPlaytime(selectedHero, mode, p1);
      p2.hero = getHeroPlaytime(selectedHero, mode, p2);
    }

    const p1BottomOffset = p1.battletag ? -56 : -8;
    const p2BottomOffset = p2.battletag ? -56 : -8;

    return (<div>
      <div className="row">
        <div className="col-md-12">
          <h1 style={{'textAlign': 'center', color: '#F0EDF2', margin: '.25em 0 1em 0'}}>Select heroes to compare</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          {p1.hero ?
            <img src={`/img/${p1.hero.key}.png`} height="200" style={{ position:'relative', left: -150, bottom: p1BottomOffset}} alt=""/> : null
          }
        </div>
        <div className="col-md-2">
          <RoleSelect handleChange={this.roleSelect}/>
          <br/>
          { this.props.role ?
            <HeroSelect handleChange={this.heroSelect} info={filteredHeroes}/>
            : ''
          }
        </div>
        <div className="col-md-5">
          {
            p2.hero ?
            <img src={`/img/${p2.hero.key}.png`} height="200" style={{transform: 'scaleX(-1)', position: 'relative', right: -250, bottom: p2BottomOffset}}alt=""/> : null
          }
        </div>
      </div>


      <div className="row">
        <div className="col-md-5 left-side">
          <div style={{"padding": '0 1em'}}>
            <h1>{p1.battletag}</h1>
          <div>
              {p1.hero ?
                <HeroProgress invert="true" hero={p1.hero} info={heroInfo[p1.hero.key]}/> : null
              }
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
            <h1>{p2.battletag}</h1>
            <div>
              {p2.hero ?
                <HeroProgress hero={p2.hero} info={heroInfo[p2.hero.key]}/> : null
              }
            </div>
          </div>
        </div>
      </div>

      {
        role ? <StatList p1={p1} p2={p2} mode={mode}/> : null
      }

    </div>)
  }
}

const filterHeroesByRole = (heroes,role) => {
  switch (role) {
    case 'tank':
      return heroes.filter(hero => hero.role === 'tank')
    case 'offense':
      return heroes.filter(hero => hero.role === 'offense')
    case 'defense':
      return heroes.filter(hero => hero.role === 'defense')
    case 'support':
      return heroes.filter(hero => hero.role === 'support')
    default:
      return heroes
  }
}



function getTopHero (role, mode, player, heroInfo) {
  const heroInfoArr = getInfoArray(heroInfo)
  let heroesInRole = heroInfoArr.filter(h => h.role === role)
  let playtime = player.us.heroes.playtime[mode]

  if (!playtime) playtime = zeroComp;

  const top = heroesInRole.map(hero => {
    let h = {}
    h.time = playtime[hero.key]
    h.key = hero.key
    return h
  }).sort((a,b) => b.time - a.time )[0]

  return top
}

function getHeroPlaytime(hero, mode, player, heroInfo){
  let playtime = player.us.heroes.playtime[mode]
  if (!playtime) playtime = zeroComp;
  return {
    key: hero,
    time: playtime[hero],
  }
}

const mapStateToProps = (state) => {
  const heroes = getInfoArray(state.heroInfo)

  return {
    ...state,
    filteredHeroes: filterHeroesByRole(heroes,state.role)
  }
}

const RoleSelect = (props) => {
  return (
    <select defaultValue='' onChange={props.handleChange} className="form-control">
      <option disabled></option>
      <option value="offense">Offense</option>
      <option value="defense">Defense</option>
      <option value="tank">Tank</option>
      <option value="support">Support</option>
    </select>
  )
}

const HeroSelect = ({handleChange, info}) => {
  return (
    <select defaultValue='' className="form-control" onChange={handleChange}>
      <option value='top'>Top Played</option>
      { info.map(hero => <option key={hero.key} value={hero.key}>{hero.name}</option>) }
    </select>
  )
}

export default connect(mapStateToProps)(Compare)
