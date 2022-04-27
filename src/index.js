// import React from 'react'
// import App from "./App"
// import { createRoot } from 'react-dom/client'

// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(<App />)

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css'
import App from './App';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Login from './pages/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <Switch>
                {/* <Route path="/" component={App} /> */}
                <Route path="/login" component={Login} />
                <Route path="/" render={() => {
                    return localStorage.getItem("token") ?
                        <App /> : <Redirect to="/login" />
                }} />
            </Switch>
        </Router>
    </Provider>
)
