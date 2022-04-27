import { CHANGE_LOADING } from '../actions/actionType'

const initState = {
    Loading: false
}

export default (state = initState, action) => {
    // console.log(action);
    switch (action.type) {
        case CHANGE_LOADING:
            return {
                ...state,
                Loading: action.payload
            }
        default:
            return state
    }
}