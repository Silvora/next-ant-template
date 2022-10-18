import React from 'react'
import { TinyArea } from '@ant-design/plots';

export default function Footer() {
    const data = [
        264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 513, 546, 983, 340, 539, 243, 226, 192,
    ];
    const config = {
        data,
        smooth: true,
        padding: [0, -53, 0, -53],
        areaStyle: {
            fill: '#31ce36',
            cursor: 'pointer'
        },
    };
    return <TinyArea {...config} style={{ height: '100px' }} />;
}
