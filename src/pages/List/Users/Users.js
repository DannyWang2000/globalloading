import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from 'antd';

export default function Users() {
  const [List, setList] = useState([])
  useEffect(() => {
    axios.get('http://rap2api.taobao.org/app/mock/data/2243194').then(res => {
      // console.log(res.data.array)
      setList(res.data.array)
    })
  }, [])
  return (
    <div>
      {/* <Button type="primary">Button</Button> */}
      <ul>
        {
          List.map((item) => {
            return <li key={item.foo}>{item.bar}</li>
          })
        }
      </ul>
    </div>
  )
}
