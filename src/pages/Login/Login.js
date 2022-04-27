import React from 'react'
import { connect } from 'react-redux'
import { loginAction } from '../../actions/login'
import { Button, Spin } from 'antd'

import './Login.css'


function Login(props) {

    const doLogin = () => {
        props.loginAction(props)
        // console.log(props)
        // localStorage.setItem("token", 'wc')
        // props.history.push('/')
    }


    return (
        <div>
            <Spin size="large" spinning={props.Loading} />
            <div>
                <Button type="primary" onClick={doLogin}>登陆</Button>
            </div>
            {/* {
                props.isLoading &&
                <div className='loading'>Loading...</div>
            } */}
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        ...state.login,
        ...state.global,
        ...state.isLoading
    }
}

export default connect(mapStateToProps, { loginAction })(Login)
