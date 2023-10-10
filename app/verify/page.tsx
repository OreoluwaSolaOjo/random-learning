'use client'
import CustomButton from '@/utils/Button';
import React from 'react';
import styles from './page.module.css';
import googleimage from '../../public/images/google.png';
import Image from 'next/image';
import ToastAlert from '@/utils/ToastAlert';
import { useEffect, useState } from 'react';

const verify = () => {
    const [showToast, setShowToast] = useState(false);
    const handleClick = () => {
        setShowToast(false);
        console.log('Button clicked!');
        setShowToast(true);
    };

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <img src="../../public/images/xing.png" className='w-52 h-full' alt="Main Logo" />
            </div>
            <div className={styles.mainContent}>
                <div className={styles.loginBox}>
                    <h1 className={styles.title}>Welcome, Ella</h1>
                    <h1 className={styles.title2}>Enter your verification code</h1>
                    <div className={styles.divider}></div>
              
                    <div className={styles.inputGroup}>
                        <label htmlFor="" className={styles.label}>Confirm new password</label>
                        <input type="text" className={styles.textInput} placeholder='Enter code' />
                    </div>
                    <div className={styles.divider2}></div>
                    <div className={styles.btnDiv}>
                        <CustomButton
                            text='Submit'
                            width="154px"
                            color="primary"
                            onClick={handleClick}
                        />
                    </div>
               
                </div>
                
            </div>
            {showToast && <ToastAlert text="Action was successful!" />}
        </div>
    );
};

export default verify;
