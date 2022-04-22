const initState = {
    arr: []
}


const dataReducer = (state = initState, action) => {
    console.log(action)
    const { type, data } = action
    switch (type) {
        case 'search':
            const newState = { ...state }
            newState.arr = data
            return newState
        // return {...state,data}
        default:
            return state
    }
}

export default dataReducer
