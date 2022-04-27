import { TOGGLE_GLOBAL_LOADING } from '../actions/actionType'


const initState = {
    isLoading: false
}

export default (state = initState, action) => {
    // const { type,isLoading } = action
    switch (action.type) {
        case TOGGLE_GLOBAL_LOADING:
            return {
                ...state,
                isLoading:action.payload.isLoading
            }
        default:
            return state
    }
}