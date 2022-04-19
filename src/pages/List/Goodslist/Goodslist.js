import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function Goodslist(props) {
  const [data, setData] = useState([])


  // const str = props.location.search.substr(1)
  const fullName = props.location.state.info

  useEffect(() => {
    axios.get(`https://api.github.com/repos/${fullName}/contents`).then(res => {
      console.log(res)
      setData(res.data)
    })
  }, [])



  return (
    <div>
      <ul>
        {
          data.map((item) => {
            return <li key={item.name}>{item.name}</li>
          })
        }
      </ul>
      {/* {
        console.log(fullName)
      } */}
    </div>
  )
}
