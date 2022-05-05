import React, { useState, useEffect } from 'react'

import { Table, Button, Space, Pagination } from 'antd'

import { GetGoodsApi } from '../../../request/api'

const { Column } = Table;



export default function Phone() {

    const [pagenum, setPagenum] = useState(1)
    const [pagesize, setPagesize] = useState(20)
    const [goodsList, setGoodsList] = useState([])

    const getGoods = () => {
        GetGoodsApi({
            pagenum,
            pagesize
        }).then(res => {
            console.log(res)
            const { pagenum, total, goods } = res.data.data
            setPagenum(pagenum)
            setPagesize(total)
            setGoodsList(goods)
        })
    }

    useEffect(() => {
        getGoods()
    }, [])

    return (
        <div>
            <Table
                dataSource={goodsList}
                scroll={{ y: '490px' }}
            >
                <Column title="goods_id" dataIndex="goods_id" key="goods_id" />
                <Column title="goods_name" dataIndex="goods_name" key="goods_id" />
                <Column title="goods_price" dataIndex="goods_price" key="goods_id" />
                <Column title="goods_number" dataIndex="goods_number" key="goods_id" />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <Button type='primary'>Delete</Button>
                        </Space>
                    )}
                />
            </Table>
        </div>
    )
}
