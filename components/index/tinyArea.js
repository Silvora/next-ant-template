import React, { useState, useEffect } from 'react';
import { TinyArea } from '@ant-design/plots';
import Styles from "../../styles/index.module.scss"
import dayjs from 'dayjs';
export default function TinyAreaChart() {
    const data = [
        550, 530, 525, 492, 567, 613, 546, 492, 467, 413, 446, 492, 467, 413, 446
    ];
    const config = {
        padding: [0, -20, 0, -20],
        data,
        //autoFit: true,
        smooth: true,
        // areaStyle: {
        //     fill: "#ccc",
        // },
    };
    const onDayDate = () => {
        let day = dayjs().day()
        switch (day) {
            case 0:
                return '日'
                break;
            case 1:
                return '一'
                break;
            case 2:
                return '二'
                break;
            case 3:
                return '三'
                break;
            case 4:
                return '四'
                break;
            case 5:
                return '五'
                break;
            case 6:
                return '六'
                break;
        }

    }
    return (
        <>
            <div className={Styles.tinyAreaTitle}>
                <p>Daily</p>
                <p> {dayjs().format('YYYY-MM-DD')}
                    {
                        " 星期" + onDayDate()
                    }</p>
            </div>
            <TinyArea {...config} style={{ height: '142px' }} />
        </>
    )

};