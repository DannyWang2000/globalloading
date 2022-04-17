import React, { useState } from 'react'
import { Layout, message } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const { Header } = Layout;

export default function Top() {
  const [collapsed, setcollapsed] = useState(false)
  const changeCollapsed = () => {
    setcollapsed(!collapsed)
  }
  return (
    <Header className="site-layout-background" style={{ padding: '0 16px' }}>
      {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: this.toggle,
      })} */}
      {
        collapsed ?
          <MenuUnfoldOutlined onClick={changeCollapsed} /> :
          <MenuFoldOutlined onClick={changeCollapsed} />
      }
      <div style={{ float: 'right' }}>
        <NavLink to="/login">
        <Button type="primary" danger
          onClick={() => {
            message.success('退出成功，即将返回首页')
            localStorage.clear()
          }}
        >退出登录
        </Button>
        </NavLink>
      </div>
    </Header>
  )
}
