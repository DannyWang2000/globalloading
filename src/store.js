import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'

import logger from 'redux-logger'

import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
    middleware.push(logger)
}

const composeEnhancers = typeof window === 'object' && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    ? window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({})
    : compose

const enhancer = composeEnhancers(applyMiddleware(...middleware))

export default createStore(rootReducer, enhancer)