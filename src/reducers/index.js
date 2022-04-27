import { combineReducers } from 'redux'

import login from './login'
import global from './global'
import isLoading from './isLoading'

export default combineReducers({
    login,
    global,
    isLoading
})