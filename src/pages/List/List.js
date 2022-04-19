import React from 'react'
import { Redirect } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import Side from '../../components/List/Side'
import Top from '../../components/List/Top'
import Goodslist from './Goodslist/Goodslist'
import Notfound from './Notfound/Notfound'
import Users from './Users/Users'

import './List.css'
import { Layout } from 'antd';
const { Content } = Layout;

export default function List() {
  return (
    <Layout>
      <Side></Side>
      <Layout className="site-layout">
        <Top></Top>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            {/* {localStorage.clear()} */}
            <Route path="/users" component={Users} />
            <Route path="/goodslist" component={Goodslist} />

            <Redirect to="/users" from='/' exact />
            <Route path="*" component={Notfound} />

          </Switch>
        </Content>
      </Layout>
    </Layout >
  )
}
