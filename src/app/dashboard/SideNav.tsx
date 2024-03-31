'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { usePathname } from 'next/navigation';
import { useStateContext } from '@/contexts/ContextProvider';
import { MdOutlineCancel } from 'react-icons/md';

const SideNav = () => {

    const pathName = usePathname()

    const { activeMenu, setactiveMenu, screenSize } = useStateContext()

    const handleCloseSidebar = () => {
        if (activeMenu && screenSize < 900) {
            setactiveMenu(false)
        }
    }

    return (
        <div className='h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto'>
            {activeMenu &&
                <div className='w-full h-full p-10 bg-[#EDF6F9]'>
                    <div className='w-full flex justify-end md:hidden text-button-blue font-bold'>
                        <MdOutlineCancel onClick={handleCloseSidebar}/>
                    </div>
                    <Link href='/' className=' my-2 mx-auto'>
                        <Image
                            alt='logo'
                            src='/logo.png'
                            width={150}
                            height={30}
                            // className=' w-52 h-9'
                            priority
                        />
                    </Link>
                    <div className='my-20 flex flex-col gap-5 text-sm items-start'>
                        <Link href='/dashboard' className={`flex items-center gap-2 ${pathName.includes('/dashboard') ? 'text-button-blue' : 'text-black'}`}><MdOutlineDashboard /> <span>Dashboard</span></Link>
                        <Link href='#' className={`flex items-center gap-2 ${pathName.includes('/library') ? 'text-button-blue' : 'text-black'}`}><IoLibraryOutline /> <span>Library</span></Link>
                        <Link href='#' className={`flex items-center gap-2 ${pathName.includes('/account') ? 'text-button-blue' : 'text-black'}`}><RxAvatar /> <span>My Account</span></Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default SideNav