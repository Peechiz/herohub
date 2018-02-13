import { combineReducers } from 'redux'

const initialState = {
  // player1: {
  //   mode: null, // quickPlay or comp
  //   selectedHero: null
  //   data: {
  //     isFetching: false,
  //     // content: // get the json
  //   }
  // },
  // player2: {
  //   mode: null,
  //   selectedHero: null,
  //   data: null
  // }
  mode: 'qp'
}

// const hero = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_PLAYER':
//       return {}
//     default:
//       return state
//   }
// }

const mode = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODE':
    const mode = state.mode === 'qp' ? 'comp' : 'qp';
    return {...state,
      mode
    }
    default:
    return state
  }
}

const heroHub = combineReducers({
  mode
})


export default heroHub;
