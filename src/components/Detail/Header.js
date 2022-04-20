import React from 'react'
import { Layout } from 'antd';

import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

const { Header } = Layout;

export default function Top() {

    return (
        <Header className="site-layout-background" style={{backgroundColor:'cyan'}}>
            <div style={{ float: 'right' }}>
                <NavLink to="/users">
                    <Button type="primary" danger>返回用户搜索</Button>
                </NavLink>
            </div>
        </Header>
    )
}
