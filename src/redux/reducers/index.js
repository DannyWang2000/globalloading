import { combineReducers } from 'redux'

import collapsedReducer from './collapsedReducer'
import dataReducer from './dataReducer'

export default combineReducers({
    collapsedReducer,
    dataReducer
})