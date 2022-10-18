import React from 'react'
import { Avatar, List } from 'antd';
import { PlusCircleFilled } from "@ant-design/icons"

import Styles from '../../styles/index.module.scss'

export default function Tickets() {
    const data = [
        {
            title: 'Title 1',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Title 3',
        },
        {
            title: 'Title 4',
        },
        {
            title: 'Title 5',
        },
        {
            title: 'Title 6',
        }
    ];
    return (
        <div>
            <div className={Styles.ListTitle}>
                <span>Support Tickets</span>
            </div>
            <div className={Styles.ListBox}>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    split={false}
                    renderItem={(item) => (
                        <List.Item
                            style={{ color: "#FFF !important" }}
                            actions={[<PlusCircleFilled style={{ fontSize: "20px", color: "#1572e8" }} />]}>
                            <List.Item.Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title={<span style={{ color: "#1572e8" }}>{item.title}</span>}
                                description={<span style={{ color: "#b9babf" }}>Ant Design</span>}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}
