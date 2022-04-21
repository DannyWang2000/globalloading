const initState = {
    arr: []
}


const dataReducer = (state = initState, action) => {
    // console.log(action);
    const { type, username } = action
    switch (type) {
        case 'search':
            //     const newState = { ...state }
            //     newState.isCollapsed = !newState.isCollapsed
            //     return newState
            return { ...state, username }
        default:
            return state
    }
}

export default dataReducer
