import { TOGGLE_GLOBAL_LOADING } from './actionType'

export const toggleGlobalLoading = (isLoading) => {
    return {
        type: TOGGLE_GLOBAL_LOADING,
        payload:{
            isLoading
        }
    }
}