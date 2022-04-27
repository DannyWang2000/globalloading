import React, { useState, useEffect } from 'react'

import { GetListApi } from '../../request/api'

export default function Detail() {

    const [data, setData] = useState([])

    useEffect(() => {
        GetListApi().then((res) => {
            // console.log(res.data.list)
            setData(res.data.list)
        })
    }, [])

    return (
        <div>
            <ul>
                {
                    data.map((item) => {
                        return <li key={item.key}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
