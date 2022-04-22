const initState = {
    isCollapsed: false
}

const collapsedReducer = (state = initState, action) => {
    // console.log(action);
    const { type } = action
    switch (type) {
        case 'changeCollapsed':
            const newState = { ...state }
            newState.isCollapsed = !newState.isCollapsed
            return newState
        default:
            return state
    }
}

export default collapsedReducer