import * as actionType from './actionType'

import { GetLoginApi } from '../request/api'

import { message } from 'antd'

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
        GetLoginApi(props).then(res => {
            console.log(res)
            if (res.data.meta.status !== 200) {
                message.error('登陆失败')

            } else {
                message.success('登陆成功')
                dispatch(loginSuccess(res.data.data.username))
                localStorage.setItem("id", res.data.data.id)
                localStorage.setItem("rid", res.data.data.rid)
                localStorage.setItem("username", res.data.data.username)
                localStorage.setItem("mobile", res.data.data.mobile)
                localStorage.setItem("email", res.data.data.email)
                window.sessionStorage.setItem('token', res.data.data.token)
                props.props.history.push('/')
            }
            // console.log(res.data)
            // dispatch(loginSuccess(res))
            // props.history.push('/')
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