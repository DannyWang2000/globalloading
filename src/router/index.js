import React from 'react'
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  List,
  Login,
  Register
} from '../pages'
//Detailpage Listpage
export default function index() {
  return (
    <Router>
      <Switch>
            {localStorage.clear()}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* <Route path="/" component={List}/> */}
        <Route path="/" render={() =>
          localStorage.getItem("token") ?
            <List></List> :
            <Redirect to="login" />
        } />
      </Switch>
    </Router>
  )
}
