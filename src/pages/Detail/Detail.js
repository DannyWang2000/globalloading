import React, { useState, useEffect } from 'react'
import Header from '../../components/Detail/Header'
import { GetDetailApi } from '../../request/api'


export default function Detail(props) {
    const [data, setData] = useState([])

    const fullName = props.location.state.info

    useEffect(() => {
        GetDetailApi(fullName).then(res => {
            setData(res.data)
        })
    }, [])

    return (
        <div>
            <Header></Header>
            <ul>
                {
                    data.map((item) => {
                        return <li key={item.name}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
