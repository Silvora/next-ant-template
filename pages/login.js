import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from "../styles/login.module.scss"
import { setToken } from '../utils/token'
import { Alert, Spin, Switch } from 'antd';

import Loading from '../layouts/loading/loading';
export default function login() {

    const [username, SetUserName] = useState('')
    const router = useRouter()
    const [loading, setLoading] = useState(false);


    const onChangeInput = (e) => {
        SetUserName(e.target.value)
    }
    const onLogin = (e) => {
        //console.log(e, "aaa")
        //console.log(username)
        setLoading(true)

        // fetch("http://127.0.0.1:8520/api/login", {
        //     method: "post",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     },
        //     body: `name=${username}`
        // }).then(function (res) {
        //     return res.json()
        // }).then(function (data) {
        //     //console.log(data);
        //     setToken("name", data.name)
        //     setToken("Token", data.name)
        //     setLoading(false)
        //     router.push("/")
        // }).catch(function (err) {
        //     console.log(err);
        // });

        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }

    return (
        <Spin spinning={loading} size="large" delay={300} indicator={<Loading></Loading>}>
            <div className={styles.loginBg}>

                <section className={styles.w3lLoginForm}>
                    <div className={styles.formSection}>
                        <div className={styles.wrapper}>

                            {/* logo */}
                            <div className={styles.logo}>
                                <a className={styles.brandLogo} href="index.html">Login</a>
                            </div>


                            {/*  form  */}
                            <div className={styles.loginForm}>
                                <form action="#" method="GET">
                                    <div className={`${styles.formFields} ${styles.dgrid}`} >
                                        <input type="text" name="username" placeholder="Username"
                                            onChange={onChangeInput}
                                            required="required" />
                                    </div>
                                    <button type='button' onClick={onLogin}>Login</button>
                                </form>
                            </div>

                            {/*  copyright  */}
                            <div className={styles.copyRight}>
                                <p>&copy; 2022 Decent Login Form. All rights reserved | Design by <a href="http://www.github.com/Zjs-7579" target="_blank" rel="noreferrer">github</a></p>
                            </div>


                        </div>
                    </div >
                </section >

            </div >
        </Spin>
    )
}
