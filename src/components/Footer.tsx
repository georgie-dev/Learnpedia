import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaXTwitter, FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {

    const date = new Date()
    return (
        <section>
        <div className=' relative p-5 md:p-20 flex flex-col lg:flex-row gap-10 lg:gap-0 justify-around'>
            <div className=' flex flex-col gap-5'>
                <Image
                    alt='logo'
                    src='/logo.png'
                    width={250}
                    height={100}
                />
                 <div className=' flex gap-3 items-center text-black text-base font-semibold ml-2'>
                        <FaLocationDot/>
                        <small>Aliqua mollit sit aliquip cupidatat excepteur.</small>
                </div>
                <div className=' flex gap-3 items-center text-black text-base font-semibold ml-2'>
                        <MdMail/>
                        <small>support@learnpedia.com</small>
                </div>
                <div className='flex items-center gap-2'>
                    <Link href='#' className=' border-2 rounded-full w-8 h-8 flex items-center justify-center text-black'>
                        <FaXTwitter/>
                    </Link>
                    <Link href='#' className=' border-2 rounded-full w-8 h-8 flex items-center justify-center text-black'>
                        <FaInstagram/>
                    </Link>
                    <Link href='#' className=' border-2 rounded-full w-8 h-8 flex items-center justify-center text-black'>
                        <FaTiktok/>
                    </Link>
                </div>
            </div>
            <div className=' w-full lg:w-1/2 flex flex-col gap-10 md:gap-0 md:flex-row items-start justify-between'>
                <div className=' text-black'>
                    <small className='font-semibold text-2xl'>Our Links</small>
                    <ul className=' mt-5 list-none text-sm flex flex-col gap-3'>
                        <li className=' hover:underline hover:underline-offset-4'><Link href='#'>Sign up</Link></li>
                        <li className=' hover:underline hover:underline-offset-4'><Link href='#'>Login</Link></li>
                        <li className=' hover:underline hover:underline-offset-4'><Link href='#'>Become a creator</Link></li>
                    </ul>
                </div>
                <div className=' text-black'>
                    <small className='font-semibold text-2xl'>About</small>
                    <ul className=' mt-5 list-none text-sm flex flex-col gap-3'>
                        <li className=' hover:underline hover:underline-offset-4'><Link href='#'>FAQ</Link></li>
                        <li className=' hover:underline hover:underline-offset-4'><Link href='#'>Learnpedia</Link></li>
                    </ul>
                </div>
                <div className=' text-black'>
                    <small className='font-semibold text-2xl'>Privacy &amp; Security</small>
                    <ul className=' mt-5 list-none text-sm flex flex-col gap-3'>
                        <li className=' hover:underline hover:underline-offset-4'><Link href='#'>Privacy Policy</Link></li>
                        <li className=' hover:underline hover:underline-offset-4'><Link href='#'>Copyright Policy</Link></li>
                        <li className=' hover:underline hover:underline-offset-4'><Link href='#'>Terms and Conditions</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className=' my-5 text-center text-xs font-serif italic text-black'>
           Copyright &copy; {date.getFullYear()} Learnpedia.com. All rights reserved. 
        </div>
        </section>
    )
}

export default Footer