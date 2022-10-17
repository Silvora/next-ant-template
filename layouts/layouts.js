import React from 'react'
import Header from "./header/header"
import Sidebar from "./sidebar/sidebar"
import Main from "./main/main"
//import NavBar from './navBar/navBar'
import { Layout } from 'antd';


export default function Layouts({ children }) {
    return (
        // <div class="wrapper">
        //     <Header></Header>
        //     <NavBar></NavBar>
        // </div>
        <>
            <Layout style={{ width: '100vw', height: '100vh' }}>
                <Sidebar></Sidebar>
                <Layout>
                    <Header></Header>
                    <Main>
                        {children}
                    </Main>
                </Layout>
            </Layout >
        </>
    )
}
