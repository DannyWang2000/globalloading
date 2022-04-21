import { legacy_createStore as createStore } from 'redux'

import rootReducer from './reducers/index'

export default createStore(rootReducer)