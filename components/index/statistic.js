import React from 'react'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

import Styles from "../../styles/index.module.scss"


export default function StatisticList() {
    return (
        <Row gutter={20} className={Styles.Statistic}>
            <Col span={8}>
                <Card className={Styles.StatisticList_1}>
                    <Statistic
                        title="Users online"
                        value={11.28}
                        precision={2}
                        valueStyle={{
                            color: '#fff',
                        }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={8} >
                <Card className={Styles.StatisticList_2}>
                    <Statistic
                        title="New Users"
                        value={9.3}
                        precision={2}
                        valueStyle={{
                            color: '#fff',
                        }}
                        prefix={<ArrowDownOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
            <Col span={8} >
                <Card className={Styles.StatisticList_3}>
                    <Statistic
                        title="Transactions"
                        value={11.28}
                        precision={2}
                        valueStyle={{
                            color: '#fff',
                        }}
                        prefix={<ArrowUpOutlined />}
                        suffix="%"
                    />
                </Card>
            </Col>
        </Row>
    )
}
