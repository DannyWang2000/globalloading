import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Users() {
  const [List, setList] = useState([])
  useEffect(() => {
    axios.get('https://api.github.com/users/wangchao2000').then(res => {
      console.log(res)
      // setList(res.data.list)
    })
  }, [])
  return (
    <div>
      {/* <ul>
        {
          List.map((item) => {
            return <li key={item.key}>{item.name}</li>
          })
        }
      </ul> */}
    </div>
  )
}
