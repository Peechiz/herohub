import { combineReducers } from 'redux'
import data from '../mock/blob.json'
import data2 from '../mock/blob2.json'
import info from '../mock/heroInfo.json'

const initialState = {
  mode: 'quickplay',
  p1: {
    data: data.us
  },
  p2: {},
  role: null
}

function createPlayer(playerName = '', data) {
  return function playerReducer(state = data, action) {
    const { player } = action;
    if(player !== playerName) return state;

    switch (action.type) {
      case 'CHANGE_PLAYER':
        return {
          ...state,
          battletag: action.battletag
        }
      default:
        return state
    }
  }
}

const role = (state = initialState.role, action) => {
  switch (action.type) {
    case 'SELECT_ROLE':
      return action.role
    default:
      return state
  }
}

const mode = (state = initialState.mode, action) => {
  switch (action.type) {
    case 'TOGGLE_MODE':
      const mode = state === 'quickplay' ? 'competitive' : 'quickplay';
      return mode
    default:
      return state
  }
}

const selectedHero = (state = '', action) => {
  return action.type === 'SELECT_HERO' ?
    action.hero : state
}

const heroInfo = (state = info, action) => {
  return state
}

const heroHub = combineReducers({
  mode,
  p1: createPlayer('p1', data),
  p2: createPlayer('p2', data2),
  role,
  heroInfo,
  selectedHero
})


export default heroHub;
