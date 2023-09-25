"use client";
import CustomButton from '@/utils/Button';
import React from 'react';


const login = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div className='bg-off-white h-screen'>

            <div className='bg-black-10 h-[60px] pl-[48px] align-middle flex'>
                <img src="../../public/images/xing.png" className='w-52 h-full' alt="Main Logo" />
            </div>
            <div className='justify-center flex w-full'>
                <div className=' w-[444px] bg-white h-[420px] mt-[24px]'>
                    <h1 className='title-2 mt-[24px] ml-[24px] font-sf-pro-text text-title font-bold mb-[16px]'>Login</h1>
                    <div className='border-t-[1px] border-primary-dark-100/10'></div>
                    <div className='flex flex-col px-[24px] pt-[16px]'>
                        <label htmlFor="" className='font-sf-pro-text text-small border-primary-dark-100/90'>Enter your email</label>
                        <input type="text" className='border-[2px] mt-[8px] pt-[13.5px] pr-[8px] pb-[13.5px] pl-[16px]' placeholder='Enter your email' />
                    </div>
                    <div>
                        <CustomButton
                            text='Next'
                            width="200px"
                            color="primary-dark-100"
                            onClick={handleClick}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

;

export default login