import React from 'react'
import { NavLink } from 'react-router-dom';
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
  // {
  //   id: "2",
  //   path: "/goodslist",
  //   title: "Goodslist",
  //   icon: <UserOutlined />
  // }
]

export default function Side() {


  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div className="logo" />
      <Menu theme="dark" mode="inline"
        defaultSelectedKeys={['1']}>
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
