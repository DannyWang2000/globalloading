import React from 'react'

import { Layout, Menu, Spin } from 'antd';
import routes from './router/index'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import SubMenu from 'antd/lib/menu/SubMenu';
import Header from './component/Header/Header'
import { connect } from 'react-redux'

const { Content, Sider } = Layout;

const route = routes.filter((item) => item.path)
const newRoute = routes.filter((item) => item.children).map((item) => {
  return item.children
}).flat()
// console.log(newRoute)
const R = [...route, ...newRoute]
// console.log(R)

const renderMenu = (routeList) => {
  // console.log(routeList)
  return routeList.map((item) => {
    if (item.children?.length > 0) {
      return <SubMenu key={item.path} title={item.title}>
        {renderMenu(item.children)}
      </SubMenu>
    }

    return <Menu.Item key={item.path}><NavLink to={item.path}>{item.title}</NavLink></Menu.Item>
  })
}

// const renderContent = (routeList) => {
//   console.log(routeList)
//   return routeList.map((item) => {
//     if (item.children?.length > 0) {
//       return <Route key={item.path} path={item.path} componnet={item.componnet} />
//     }
//     return <Route key={item.path} path={item.path} componnet={item.componnet} />
//   })
// }


function App(props) {
  return (
    <Layout>
      <Sider trigger={null} collapsible>
        <Menu theme="dark" mode="inline"
          defaultSelectedKeys={['1']}>
          {renderMenu(route)}
        </Menu>
      </Sider>
      <Layout>
        <Header></Header>
        <Content className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}>
          <Spin size="large" spinning={props.Loading}>
            <Switch>
              {
                R.map((item) => {
                  // console.log(item.path)
                  // console.log(item.component)
                  return <Route
                    key={item.path}
                    path={item.path}
                    component={item.component}
                    exact
                  />
                })
              }
              <Redirect to="/users/list" exact />
            </Switch>
          </Spin>
        </Content>
      </Layout>
    </Layout>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    ...state.isLoading
  }
}

export default connect(mapStateToProps)(App)
