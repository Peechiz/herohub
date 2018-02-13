import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import Profile from './components/Profile.jsx'
import Header from './components/Header.jsx'
import Compare from './components/Compare.jsx'

import heroHub from './reducers'

const store = createStore(heroHub)
const root = document.getElementById('app')

const pathname = window.location.pathname
const page = pathname === '/compare' ? <Compare/> : <Profile />

const App = () => (
  <div>
    <Header/>
    {page}
  </div>
)

const render = () => ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
  root
)

render()
store.subscribe(render)
