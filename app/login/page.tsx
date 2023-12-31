'use client'
import CustomButton from '@/utils/Button';
import React from 'react';
import styles from './page.module.css';
import googleimage from '../../public/images/google.png';
import Image from 'next/image';
const login = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <img src="../../public/images/xing.png" className='w-52 h-full' alt="Main Logo" />
            </div>
            <div className={styles.mainContent}>
                <div className={styles.loginBox}>
                    <h1 className={styles.title}>Login</h1>
                    <div className={styles.divider}></div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="" className={styles.label}>Enter your email</label>
                        <input type="text" className={styles.textInput} placeholder='Enter your email' />
                    </div>
                    <div className={styles.btnDiv}>
                        <CustomButton
                            text='Next'
                            width="100px"
                            color="primary"
                            onClick={handleClick}
                        />
                    </div>
                    <div className={styles.hrdiv}>
                        <p className={styles.ortag}>or</p>
                    </div>
                    <div className={styles.googlebutton}>
    <Image src="/images/google.png" alt="Main Logo" width={24} height={24} /> 
    <p className={styles.googletext}>Sign in with Google</p>
</div>
                </div>

            </div>
        </div>
    );
};

export default login;
