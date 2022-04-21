const initState = {
    isCollapsed: false
}

const collapsedReducer = (state = initState, action) => {
    switch (action.type) {
        case 'changeCollapsed':
            const newState = { ...state }
            newState.isCollapsed = !newState.isCollapsed
            return newState
        default:
            return state
    }
}

export default collapsedReducer