import React, { useEffect } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,

    SearchOutlined,
    SoundFilled,
    BellFilled,
} from '@ant-design/icons';
import { Layout, Space, Input, Avatar } from 'antd';

const { Header } = Layout;
//const { Search } = Input;
import Styles from "../../styles/layout.module.scss"

import { useDispatch, useSelector } from "react-redux"
import { setCollapsed } from '../../store/modules/toggle';


export default function header() {

    const dispatch = useDispatch()
    const { collapsed } = useSelector(state => state.toggle)

    const onSearchEnter = (e) => {
        console.log(e.target.value)
    }


    return (
        <Header
            className={Styles.Header}
        >
            <span style={{ padding: '0 25px' }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: () => dispatch(setCollapsed(!collapsed)),
                })}
            </span>

            <div style={{ width: '100%', height: '100%' }} >
                <Input
                    placeholder="Search"
                    ///onSearch={onSearch}
                    allowClear
                    bordered={false}
                    prefix={<SearchOutlined style={{ fontSize: '24px', paddingRight: '5px' }} />}
                    className={Styles.SearchInput}
                    onPressEnter={onSearchEnter}
                />


            </div>
            <Space style={{ padding: '0 25px' }}>
                <SoundFilled />
                <BellFilled />
                <Avatar src="https://joeschmoe.io/api/v1/random" style={{ width: 40, height: 40, lineHeight: 64, backgroundColor: '#fff' }} />
            </Space>


        </Header>
    )
}
