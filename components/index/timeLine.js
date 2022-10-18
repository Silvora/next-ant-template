import React from 'react'
import { Timeline } from 'antd';
import Styles from '../../styles/index.module.scss'

export default function TimeLine() {
    return (
        <div>
            <div className={Styles.TimeTitle}>
                <span>Feed Activity</span>
            </div>
            <div className={Styles.TimeLine}>
                <Timeline pending="Recording..." reverse={false} style={{ color: '#b9babf' }}>
                    <Timeline.Item color="#6861ce">
                        <p>2015-09-01</p>
                        <p>创建服务现场 </p>
                    </Timeline.Item>
                    <Timeline.Item color="#31ce36">
                        <p>2015-09-01</p>
                        <p>初步排除网络异常 </p>
                    </Timeline.Item>
                    <Timeline.Item color="#48abf7">
                        <p>技术测试异常 </p>
                        <p>2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item color="#ffad46">
                        <p>网络异常正在修复</p>
                        <p>2015-09-01</p>
                    </Timeline.Item>
                </Timeline>
            </div>
        </div>
    )
}
