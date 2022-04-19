import React, { useEffect } from 'react'
import axios from 'axios'


export default function Goodslist() {
  useEffect(() => {
    axios.get('https://api.github.com/repos/wangchao2000/sky/contents').then(res => {
      console.log(res)
    })

  }, [])

  return (
    <div>Goodslist</div>
  )
}
