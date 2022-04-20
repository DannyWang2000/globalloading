import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Detail/Header'


export default function Detail(props) {
    const [data, setData] = useState([])


    const fullName = props.location.state.info

    useEffect(() => {
        axios.get(`https://api.github.com/repos/${fullName}/contents`).then(res => {
            console.log(res)
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
