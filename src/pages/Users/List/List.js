import React, { useState, useEffect } from 'react'
import { Form, Input, Table, Button, Space, Modal } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'




import { GetUsersApi, AddUsersApi } from '../../../request/api'

const { Column } = Table;

function List() {

    const [pagenum, setPagenum] = useState(1)
    const [pagesize, setPagesize] = useState(5)
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [mobile, setmobile] = useState('')
    const [list, setList] = useState([])
    const [visible, setVisible] = useState(false)
    const [form] = Form.useForm();


    const getList = () => {
        GetUsersApi({
            pagenum,
            pagesize
        }).then(res => {
            console.log(res)
            const { pagenum, users, total } = res.data.data
            setPagenum(pagenum)
            setPagesize(total)
            setList(users)
        })
    }

    useEffect(() => {
        getList()
    }, [])

    const showModal = () => {
        setVisible(true)
    }
    const hideModal = () => {
        setVisible(false)
    }

    const handleOk = () => {
        // form.validateFields().then((values) => {
        //     console.log(values)
        //     AddUsersApi({
        //         username,
        //         password
        //     })
        //         .then((res) => {
        //             console.log(res)
        //         })
        // })
        AddUsersApi({
            username: '1',
            password: '123'
        }).then((res) => {
            console.log(res)
        })
    }

    return (
        <div>
            <Button type="primary" style={{ marginBottom: "15px" }} onClick={() => showModal()}>添加用户</Button>

            <Modal
                title="Modal"
                visible={visible}
                onOk={() => handleOk()}
                onCancel={hideModal}
                okText="确认"
                cancelText="取消"
            >
                <Form form={form}>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: '请输入邮箱!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
                    </Form.Item>

                    <Form.Item
                        name="mobile"
                        rules={[
                            {
                                required: true,
                                message: '请输入手机号!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入手机号" />
                    </Form.Item>
                </Form>
            </Modal>


            <Table dataSource={list}>

                <Column title="role_name" dataIndex="role_name" key="id" />
                <Column title="username" dataIndex="username" key="id" />
                <Column title="mobile" dataIndex="mobile" key="id" />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <Button type='primary'>Delete</Button>
                        </Space>
                    )}
                />
            </Table>
        </div>
    )
}

export default List
