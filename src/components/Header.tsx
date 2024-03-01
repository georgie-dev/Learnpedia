'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiExternalLink } from 'react-icons/hi'
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineCancel } from 'react-icons/md';

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) => {

    return (
        <div
            className={`fixed top-0 left-0 w-72 h-full bg-white transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-72"
                } z-50`}
        >
            <div className="w-full flex items-center border-b border-[#717070] py-[1.6rem] px-3 justify-between">
                <Image
                    alt='logo'
                    src='/logo.png'
                    width={140}
                    height={30}
                    // className=' w-52 h-9'
                    priority
                />
            </div>

            <div className='py-10 flex flex-col gap-10 px-3'>
                <div className=' full'>
                <input
                        type=' search'
                        className=' rounded-xl border-[1.5px] border-black w-full placeholder:text-[#717070] placeholder:text-sm search py-2 px-3 placeholder:pl-7'
                        placeholder='What do you want to learn?'
                    />
                </div>
                <div className='flex flex-col text-sm font-semibold text-white gap-6'>

                    <Link href='#' className='  px-5 py-2 bg-button-blue hover:bg-blue rounded-lg'>Become a creator</Link>
                    <Link href='#' className=' px-5 py-2 bg-button-blue hover:bg-blue rounded-lg'> Login</Link>
                    <Link href='#' className=' bg-button-blue hover:bg-blue rounded-lg px-5 py-2'> Sign up</Link>
                </div>
            </div>
        </div>
    );
};

const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className=' border-b bg-white border-[#717070] sticky top-0 z-20 m-0'>
            <div className=' box-border my-0 mx-auto max-w-[80rem] flex items-center justify-between py-0 px-4 w-full h-[4.75rem]'>
                <div className=''>
                    <Image
                        alt='logo'
                        src='/logo.png'
                        width={140}
                        height={30}
                        // className=' w-52 h-9'
                        priority
                    />
                </div>
                <div className='w-1/3 hidden md:block'>
                    <input
                        type=' search'
                        className=' rounded-xl border-[1.5px] border-black w-full placeholder:text-[#717070] placeholder:text-sm search py-2 px-3 placeholder:pl-7'
                        placeholder='What do you want to learn?'
                    />
                </div>
                <div className='hidden md:flex items-center text-sm font-semibold text-black gap-6'>

                    <Link href='#' className=' hover:underline hover:underline-offset-4 flex items-end gap-0 group'> <span>Become a creator</span> <span className='invisible group-hover:visible'><HiExternalLink size={15} /></span> </Link>
                    <Link href='#' className='hover:underline hover:underline-offset-4'> Login</Link>
                    <Link href='#' className=' border border-[#717070] hover:bg-[#717070]/20 rounded-lg px-5 py-2'> Sign up</Link>
                </div>
                <div className=' block md:hidden text-button-blue font-bold'>
                    {isSidebarOpen ?
                        <MdOutlineCancel onClick={toggleSidebar} />
                        :
                        <CiMenuFries onClick={toggleSidebar}/>
                    }
                </div>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default Header