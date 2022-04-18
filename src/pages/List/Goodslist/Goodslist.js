import React, { useEffect } from 'react'
import axios from 'axios'


export default function Goodslist() {
  useEffect(() => {
    axios.get('https://github.com/wangchao2000').then(res => {
      console.log(res)
    })

  }, [])

  return (
    <div>Goodslist</div>
  )
}
