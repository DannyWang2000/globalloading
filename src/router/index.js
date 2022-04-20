import React from 'react'
import { Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  List,
  Login,
  Detail
} from '../pages'
export default function index() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/Detail" component={Detail} />
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
