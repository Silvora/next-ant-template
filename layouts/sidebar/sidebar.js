import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import Image from 'next/image';
import { useRouter } from 'next/router'


import Logo from "../../assets/img/logo.svg"
import minLogo from "../../assets/img/icon.svg"
import Routes from "../../router/routes"
import Styles from "../../styles/layout.module.scss"


import { useSelector } from "react-redux"

export default function sidebar() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    //const [collapsed, setCollapsed] = useState(false);
    const { collapsed } = useSelector(state => state.toggle)
    const router = useRouter()

    const onMenuItem = (item) => {
        //console.log(item, key, keyPath, domEvent)
        router.push(item.key)
    }

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}
            width={230}
            style={{ backgroundColor: '#1a2035', borderRight: '1px solid #fff' }}
        >
            <div className={Styles.Logo} >
                {
                    collapsed ? (
                        <div className={Styles.minLogoImg}>
                            <Image src={minLogo} />
                        </div>
                    ) : (
                        <div className={Styles.LogoImg}>
                            <Image src={Logo} />
                        </div>
                    )
                }
            </div>
            <p className={Styles.MenuTitle}>
                {
                    collapsed ? "" : "COMPONENTS"
                }
            </p>
            <Menu
                theme="dark"
                mode="inline"
                //defaultSelectedKeys={['1']}
                items={Routes}
                onClick={onMenuItem}
            />
        </Sider>
    )
}
