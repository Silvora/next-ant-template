import React, { useState, useEffect } from 'react';
import { WordCloud } from '@ant-design/plots';

import HotData from "../../assets/json/hot"
export default function WordCloudCharts() {

    const config = {
        data: HotData,
        wordField: 'name',
        weightField: 'value',
        colorField: 'name',
        wordStyle: {
            fontFamily: 'Verdana',
            fontSize: [6, 20],
            rotation: 0,
        },
        // 返回值设置成一个 [0, 1) 区间内的值，
        // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
        random: () => 0.5,
    };

    return <WordCloud {...config} style={{ padding: 25 }} />;
}
