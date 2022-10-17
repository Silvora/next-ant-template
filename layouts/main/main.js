import React from 'react'
import Styles from "../../styles/layout.module.scss"
import { Layout } from 'antd';
const { Content } = Layout;

//import

export default function main({ children }) {

    return (
        <Content
            className={Styles.Content}
        // style={{
        //     //margin: '24px 16px',
        //     padding: 15,
        //     //minHeight: 280,
        //     height: calc(100vh - 94)
        // }}
        >
            {children}

        </Content>
    )
}
