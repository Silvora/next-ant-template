import React, { useState, useEffect } from 'react';

import { Area } from '@ant-design/plots';

import Styles from "../../styles/index.module.scss"

import chartsData from '../../assets/json/charts';
export default function AreaCharts() {
    const [data, setData] = useState([]);


    const config = {
        data: chartsData,
        padding: [50, 25, 80, 65],
        xField: 'date',
        yField: 'value',
        seriesField: 'country',

        legend: {
            position: 'bottom',
            //padding: 1,
            //padding: '50',
            //bottom: 200
            // left: 200
            //bottom: 2020,
        },
    };

    return (
        <div>
            <div className={Styles.areaTitle}>
                <span>User Statistics</span>
            </div>
            <Area {...config} />
        </div>
    );
};

