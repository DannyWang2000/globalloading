// import React from 'react'
// import { connect } from 'react-redux'
// import { loginAction } from '../../actions/login'
// import { Button, Spin, Form, Input } from 'antd'

// import './Login.css'


// function Login(props) {

//     const doLogin = () => {
//         props.loginAction(props)
//         // console.log(props)
//         // localStorage.setItem("token", 'wc')
//         // props.history.push('/')
//     }

//     const onFinish = (values) => {
//         console.log('Success:', values);
//     };

//     const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//     };

//     return (
//         <div>
//             <Spin size="large" spinning={props.Loading} />
//             <div>
//                 <Button type="primary" onClick={doLogin}>登陆</Button>
//             </div>
//             {/* {
//                 props.isLoading &&
//                 <div className='loading'>Loading...</div>
//             } */}
//             <Form
//                 name="basic"
//                 initialValues={{ remember: true }}
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//             >
//                 <Form.Item
//                     label="Username"
//                     name="username"
//                     initialValue="admin"
//                     rules={[{ required: true, message: 'Please input your username!' }]}
//                 >
//                     <Input placeholder="请输入用户名" />
//                 </Form.Item>

//                 <Form.Item
//                     label="Password"
//                     name="password"
//                     initialValue="123"
//                     rules={[{ required: true, message: 'Please input your password!' }]}
//                 >
//                     <Input.Password placeholder="请输入密码" />
//                 </Form.Item>

//                 <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
//                     <Button type="primary" htmlType="submit">
//                         登陆
//                     </Button>
//                 </Form.Item>
//             </Form>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     // console.log(state)
//     return {
//         ...state.login,
//         ...state.global,
//         ...state.isLoading
//     }
// }

// export default connect(mapStateToProps, { loginAction })(Login)


import React from 'react'
import { Form, Input, Button, Spin } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { loginAction } from '../../actions/login'

import './Login.css'

function Login(props) {
    const onFinish = (values) => {
        props.loginAction({
            props,
            username: values.username,
            password: values.password
        })
        // if (values.username === "admin" && values.password === "123456") {
        //     message.success('登录成功')
        //     localStorage.setItem('token', 'wc')
        //     // console.log(props);
        //     props.history.push('/users')
        // } else {
        //     message.error('登录失败')
        // }
    }

    return (
        <div className="login">
            <div className="login_box">
                <Spin size="large" spinning={props.Loading}>
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                            ]}
                            initialValue="admin"
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            initialValue="123456"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        ...state.login,
        ...state.isLoading
    }
}

export default connect(mapStateToProps, { loginAction })(Login)
