import React, { useState } from 'react'
import axios from 'axios'
// import { NavLink } from 'react-router-dom'
import { Input, message, List, Button } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
const { Search } = Input;



export default function Users(props) {
  const [username, setUsername] = useState([])
  // const [useData, setUseData] = useState([])


  const onSearch = value => {
    // console.log(value)
    axios.get(`https://api.github.com/users/${value}/repos`).then(res => {
      console.log(res);
      if (res.request.status === 200) {
        message.success('查询成功')
        setUsername(res.data)
      } else
        message.error('查询失败,GitHub暂无该用户')
    })
  }

  const showDetail = (item) => {
    // console.log(item.full_name);
    // axios.get(`https://api.github.com/repos/${item.full_name}/contents`).then(res => {
      // setUseData(res.data)
      // console.log(useData);
      // props.history.push(`/goodslist?${item.full_name}`)
      props.history.push({ pathname: '/detail', state: { info: item.full_name } })
      // console.log(res.data);
    // })
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
          // next={setUsername}
          style={{ display: 'flex', flexDirection: 'column-reverse' }}
          inverse={true} //
          hasMore={true}
          // loader={<h4>Loading...</h4>}
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
      {/* <ul>
        {
          useData.map((item) => {
            return <li key={item.name}>{item.name}</li>
          })
        }
      </ul> */}
    </div>
  )
}
