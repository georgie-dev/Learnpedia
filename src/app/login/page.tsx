/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState } from 'react'
import { Header } from '@/components'
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Link from 'next/link';

const Login = () => {

    const [passwordSH, setPasswordSH] = useState(false)
    return (
        <main>
            <Header />
            <section className=' p-10'>
                <div className='w-full md:w-1/2 lg:w-1/3 mx-auto'>
                    <h1 className='text-3xl text-center font-semibold text-black'>Get back to learning!</h1>
                    <form className='w-full md:w-3/4 mx-auto my-7 flex flex-col items-center gap-8'>
                        <div className=' flex flex-col w-full gap-1'>
                            <label className=' text-xs font-semibold text-black'>Email</label>
                            <input
                                type='email'
                                name='email'
                                placeholder='Enter your email address'
                                className='w-full rounded-lg text-black p-3 border border-black placeholder:text-xs'
                            />
                        </div>
                        <div className=' flex flex-col w-full gap-1 relative'>
                            <label className=' text-xs font-semibold text-black'>Password</label>
                            <input
                                type={passwordSH ? 'text' : 'password'}
                                name='password'
                                placeholder='Enter password'
                                className='w-full rounded-lg text-black p-3 border border-black placeholder:text-xs '
                            />
                            <div className=' absolute right-2 top-1/2 text-black'>
                                {!passwordSH ?
                                    <span><FaRegEye onClick={() => { setPasswordSH(!passwordSH) }} /></span>
                                    :
                                    <span><FaRegEyeSlash onClick={() => { setPasswordSH(!passwordSH) }} /></span>
                                }
                            </div>
                        </div>
                        {/* <button type='submit' className=' py-2 px-5 w-fit bg-button-blue text-sm hover:bg-blue rounded-lg text-white'> Login</button> */}
                        <Link href='/dashboard' className=' py-2 px-5 w-fit bg-button-blue text-sm hover:bg-blue rounded-lg text-white'> Login</Link>

                        <div className=' flex flex-col gap-2 text-black items-center font-medium'>
                            <Link href='#' className= 'text-sm hover:underline hover:underline-offset-4'>Forgot password?</Link>
                            <small className='font-medium text-sm'>Don't have an account? <Link href='/signup' className=' text-button-blue hover:underline hover:underline-offset-4'>Sign up</Link></small>
                        </div>
                    </form>

                    <div className='flex flex-col gap-3 w-full md:w-3/4 mx-auto items-center'>
                        <h1 className='text-semibold text-center text-black'> or</h1>

                        <button className=' flex items-center rounded-lg border border-black text-black justify-center gap-3 p-3 w-full'>
                            <span><FcGoogle /></span> <span className=' text-sm'>Continue with Google</span>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login