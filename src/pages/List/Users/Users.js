import React, { useState } from 'react'
import { Input, message, List, Button } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GetUsersApi } from '../../../request/api';
const { Search } = Input;



export default function Users(props) {
  const [username, setUsername] = useState([])


  const onSearch = value => {
    GetUsersApi(value).then(res => {
      console.log(res)
      if (res.status !== 200) {
        message.error('查询失败')
      } else {
        message.success('查询成功')
        setUsername(res.data)
      }
    })
  }

  const showDetail = (item) => {
    props.history.push({ pathname: '/detail', state: { info: item.full_name } })
  }


  return (
    <div>
      <Search
        placeholder="Github username"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <div
        id="scrollableDiv"
        style={{
          height: 300,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column-reverse',
        }}
      >
        <InfiniteScroll
          dataLength={username.length}
          style={{ display: 'flex', flexDirection: 'column-reverse' }}
          inverse={true} //
          hasMore={true}
          scrollableTarget="scrollableDiv"
        >
          <List
            itemLayout="horizontal"
            dataSource={
              username
            }
            renderItem={(item, index) => (
              <List.Item >
                {item.name}
                {<Button
                  type="primary"
                  onClick={() => showDetail(item)}
                  style={{ float: 'right' }}
                >查看详情</Button>}
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    </div>
  )
}
