import React from 'react'
import ReactDOM from 'react-dom'
// import { createStore } from 'redux'
import Profile from './components/Profile.jsx'
import Header from './components/Header.jsx'
import Compare from './components/Compare.jsx'

// import heroHub from './reducers'

// const store = createStore(heroHub)
const app = document.getElementById('app')

const render = () => ReactDOM.render(
  // <div>
  //   <Header/>
  //   <Profile/>
  // </div>,
  <div>
    <Header/>
    <Compare/>
  </div>,
  app
)

render()
// store.subscribe(render)
