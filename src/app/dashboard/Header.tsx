'use client'
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React, { useEffect } from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { useStateContext } from '@/contexts/ContextProvider';
import { CiMenuFries } from 'react-icons/ci';

const Header = () => {
    const { activeMenu, setactiveMenu, screenSize, setscreenSize } = useStateContext()

    useEffect(() => {
        const handleScreen = () => {
            setscreenSize(window.innerWidth)
        }

        window.addEventListener("resize", handleScreen)

        handleScreen()

        return () => {
            window.removeEventListener("resize", handleScreen)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (screenSize <= 900) {
            setactiveMenu(false)
        } else {
            setactiveMenu(true)
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [screenSize])
    return (
        <div className='bg-white sticky top-0 z-20 m-0'>
            <div className=' box-border m-5 shadow-sm mx-auto p-5 flex gap-10 md:gap-0 items-center md:-start justify-between w-full h-auto'>
                <div className='block w-fit md:hidden text-button-blue' onClick={()=>{setactiveMenu(((previousMenu:number)=> !previousMenu ))}}>
                    <CiMenuFries/>
                </div>
                <div className='md:flex hidden flex-col gap-1 w-fit text-black'>
                    <h1 className=' text-3xl font-semibold'>Hi, Nenny</h1>
                    <small className='text-xs'>Let's start learning!</small>
                </div>
                <div className=' w-2/3 md:w-1/3 block'>
                    <input
                        type=' search'
                        className=' rounded-xl border-[1.5px] border-black w-full placeholder:text-[#717070] placeholder:text-sm search py-2 px-3 placeholder:pl-7'
                        placeholder='What do you want to learn?'
                    />
                </div>
                <div className='w-fit flex items-center text-black gap-2'>
                    <IoIosNotificationsOutline size={20} />
                    <Image
                        alt='user'
                        src='/avatars/avatar1.svg'
                        width={30}
                        height={30}
                        className='rounded-full'
                    />
                </div>
            </div>
        </div>
    )
}

export default Header