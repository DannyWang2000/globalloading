import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { NavLink } from 'react-router-dom'
import { Input } from 'antd';
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
      setUsername(res.data)
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
      <ul>
        {
          username.map((item) => {
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  )
}
