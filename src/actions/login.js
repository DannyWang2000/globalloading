import * as actionType from './actionType'

import { GetLoginApi } from '../request/api'

// import { toggleGlobalLoading } from './global'


export const loginSuccess = (payload) => {
    // console.log(payload)
    return {
        type: actionType.LOGIN_SUCCESS,
        payload
    }
}

export const loginAction = (props) => {
    // console.log(props)
    return dispatch => {
        // dispatch(toggleGlobalLoading(true))
        GetLoginApi().then(res => {
            // console.log(res)
            dispatch(loginSuccess(res.data.account))
            localStorage.setItem("token", 'wc')
            props.history.push('/')
        })
        // .catch(error => {
        //     console.log(error)
        // }).finally(() => {
        //     setTimeout(() => {
        //         dispatch(toggleGlobalLoading(false))
        //     }, 2000);
        // })
    }
}