import React from 'react'
import Router from './router/index'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import store from './redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <Router></Router>
    </Provider>
  )
}
