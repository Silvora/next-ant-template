//import React from 'react'
//import Link from 'next/link'
import React, { useState } from 'react'
import styles from "../styles/login.module.scss"
export default function login() {

    const [username, SetUserName] = useState('')

    const onChangeInput = (e) => {
        SetUserName(e.target.value)
    }
    const onLogin = (e) => {
        console.log(e, "aaa")
        console.log(username)
    }

    return (
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
    )
}
