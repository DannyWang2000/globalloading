import React, {  useState } from 'react'
import axios from 'axios'
// import { NavLink } from 'react-router-dom'
import { Input, message, List } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
const { Search } = Input;



export default function Users() {
  const [username, setUsername] = useState([])
  // const [List, setList] = useState([])
  // useEffect(() => {
  //   axios.get('https://api.github.com/users/wangchao2000/repos').then(res => {
  //     console.log(res)
  //     setList(res.data)
  //   })
  // }, [])


  const onSearch = username => {
    // axios
    // .get(`https://api.github.com/users/${username}`)
    // .then(resp => {
    //   props.onSubmit(resp.data)
    //   setUsername('')
    // })
    console.log(username)
    axios.get(`https://api.github.com/users/${username}/repos`).then(res => {
      console.log(res);
      if (res.data !== [] && res.request.status === 200) {
        message.success('查询成功')
        setUsername(res.data)
      } else
        message.error('查询失败,GitHub暂无该用户')
    })
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
          style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
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
            // renderItem={item => (
            //   <List.Item>
            //     <List.Item.Meta
            //       // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            //       // title={<a href="https://ant.design">{item.title}</a>}
            //       // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            //     />
            //     {/* {
            //       username.map((item) => {
            //         return <li key={item.id}>{item.name}</li>
            //       })
            //     } */}
            //   </List.Item>
            // )}
            renderItem={item => (
              <List.Item>
                {item.name}
                {<button style={{float:'right'}}>1</button>}
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
      {/* <ul>
        {
          username.map((item) => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul> */}
    </div>
  )
}
