import React from 'react'
import Styles from '../../styles/index.module.scss'
import { LikeOutlined } from '@ant-design/icons';
import { Col, Row, Statistic } from 'antd';
import { TinyColumn } from '@ant-design/plots';

export default function People() {
    const data = [274, 337, 81, 497, 666, 337, 81, 497, 666, 219, 269];
    const config = {
        data,
        tooltip: {
            customContent: function (x, data) {
                return `NO.${x}: ${data[0]?.data?.y.toFixed(2)}`;
            },
        },
    };
    return (
        <div className='People'>
            <div className={Styles.PeopleTitle}>
                <span>Suggested People</span>
            </div>
            <div className={Styles.PeopleState}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Unmerged" value={93} suffix="/ 100" />
                    </Col>
                </Row>
            </div>
            <div className={Styles.PeopleState}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="Countdown" value={93} />
                    </Col>
                </Row>
            </div>
            <div className={Styles.PeoplesCharts}>
                <TinyColumn {...config} />
            </div>
        </div>
    )
}
