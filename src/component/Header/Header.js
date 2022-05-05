import React, { useState } from 'react'
import { Layout, message, Button } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
// import { connect } from 'react-redux'

const { Header } = Layout

function Top() {
  const [collapsed, setcollapsed] = useState(false)
  const changeCollapsed = () => {
    setcollapsed(!collapsed)
    // props.changeCollapsed()
  }
  return (
    <Header className="site-layout-background" style={{ padding: '0 16px' }}>
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
              window.sessionStorage.clear()
            }}
          >退出登录
          </Button>
        </NavLink>
      </div>
    </Header>
  )
}

// const mapStateToProps = ({ collapsedReducer: { isCollapsed } }) => {
//   return {
//     isCollapsed,
//   }
// }

// const mapDispatchToProps = {
//   changeCollapsed() {
//     return {
//       type: "changeCollapsed",
//     }
//   },
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Top)
export default Top
