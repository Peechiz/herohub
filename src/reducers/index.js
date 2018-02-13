import { combineReducers } from 'redux'
import data from '../mock/blob.json'

const initialState = {
  mode: 'quickplay',
  players: {
    p1: {
      data: data.us
    },
    p2: {}
  }
}

const players = (state = initialState.players, action) => {
  switch (action.type) {
    case 'CHANGE_PLAYER':
      if (action.player === 'p1'){
        return {
          ...state,
          p1: {
            ...state.p1,
            battletag: action.battletag
          }
        }
      } else {
        return {
          ...state,
          p2: {
            ...state.p2,
            battletag: action.battletag
          }
        }
      }
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

const heroHub = combineReducers({
  mode,
  players
})


export default heroHub;
