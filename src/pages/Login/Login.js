import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
// import { Link, NavLink } from 'react-router-dom'
import './login.css'
// import { LoginApi } from '../../request/api'

export default function Login(props) {
  // const navigate = useNavigate()
  const onFinish = (values) => {
    // LoginApi({
    //   username: values.username,
    //   password: values.password
    // }).then(res => {
    //   console.log(res.account);
    //   // if (res.meta.status !== 200) {
    //   //   message.error('登陆失败')
    //   // } else {
    //   //   message.success('登陆成功')
    //   //   localStorage.setItem('token', 'token')
    //   //   props.history.push('/users')
    //   // }
    // })
    // LoginApi({
    //   username: values.username,
    //   password: values.password,
    // }).then((res) => {
    //   // console.log(res)
    //   if (res.meta.status !== 200) {
    //     message.error('登陆失败')
    //   } else {
    //     message.success('登陆成功')
    //     localStorage.setItem('token',res.data['token'])
    //     setTimeout(() => {
    //       navigate('/list')
    //     }, 1500)
    //   }
    // })
    // console.log('Success:', values)


    if (values.username === "admin" && values.password === "123456") {
      message.success('登录成功')
      localStorage.setItem('token', 'wc')
      console.log(props);
      props.history.push('/users')
    } else {
      message.error('登录失败')
    }
  }

  return (
    <div className="login">
      <div className="login_box">
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

          {/* <Form.Item name="remember" valuePropName="checked">
            <Checkbox>记住账号</Checkbox>
          </Form.Item>

          <Form.Item>
            <Link to="/register">立即注册账号</Link>
          </Form.Item> */}

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
