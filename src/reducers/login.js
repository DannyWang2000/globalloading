import * as actionType from '../actions/actionType'

const initState = {
    isLogin: false,
    username: []
}

export default (state = initState, action) => {
    // console.log(action)
    // const { type, payload } = action
    switch (action.type) {
        case actionType.LOGIN_SUCCESS:
            return {
                ...state,
                username:action.payload,
                isLogin: true
            }
        default:
            return state
    }
}