import React from 'react'
import { NavLink } from 'react-router-dom';
// import axios from 'axios'
import { Layout, Menu } from 'antd';
import {
  UserOutlined,

} from '@ant-design/icons';
const { Sider } = Layout;

const menuList = [
  {
    id: "1",
    path: "/users",
    title: "搜索用户仓库",
    icon: <UserOutlined />
  },
  {
    id: "2",
    path: "/goodslist",
    title: "Goodslist",
    icon: <UserOutlined />
  }
]

export default function Side() {
  // useEffect(() => {
  //   axios.get('http://rap2api.taobao.org/app/mock/data/2243194').then(res => {
  //     console.log(res.data)
  //   })
  // }, [])

  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div className="logo" />
      <Menu theme="dark" mode="inline"
        defaultSelectedKeys={['1']}>
        {/* <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item> */}
        {
          menuList.map((item) => {
            return <Menu.Item
              key={item.id}
              icon={item.icon}
            >
              <NavLink to={item.path}>
                {item.title}
              </NavLink>
            </Menu.Item>
          })
        }
      </Menu>
    </Sider>
  )
}
