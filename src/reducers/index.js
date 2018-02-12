import { combineReducers } from 'redux'

const initialState = {
  player1: {
    mode: null, // quickPlay or comp
    selectedHero: null
    data: {
      isFetching: false,
      // content: // get the json
    }
  },
  player2: {
    mode: null,
    selectedHero: null,
    data: null
  }
}

const hero = (state, action) => {
  switch (action.type) {
    case 'FETCH_PLAYER':
      return {}
    default:
      return state
  }
}

const heroHub = combineReducers({
  hero
})

export default heroHub;

// export default (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }
