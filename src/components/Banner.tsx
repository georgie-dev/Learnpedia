import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { HiOutlineExternalLink } from "react-icons/hi";

const Banner = () => {
    return (
        <div className=' p-5 md:p-10'>
            <div className='w-full lg:w-1/2 mx-auto mt-10'>
                <h1 className=' text-8xl text-center text-black'>Making <span className=' text-button-blue'>learning</span> Open source.</h1>
            </div>
            <div className='w-full md:w-3/5 lg:w-1/3 mx-auto my-8'>
                <h4 className=' text-xl text-center font-medium text-black'>Say Goodbye to boring, one-size fits all learning, and hello to one that suits your needs.</h4>
            </div>
            <div className=' flex items-center justify-center gap-3'>
                <Link href='#' className=' rounded-lg py-2 px-3 bg-button-blue text-white text-sm'> Start learning now</Link>
                <Link href='#' className=' underline underline-offset-4 text-black text-sm font-semibold flex items-center gap-0 group'> <span>Sign up as a creator</span> <span className='invisible group-hover:visible'><HiOutlineExternalLink size={15}/></span> </Link>
            </div>
            <div className= 'p-10'>
                <div className = ' max-w-full h-auto bg-grey'>
                    <Image
                    alt='Learner'
                    width={800}
                    height={480}
                    src='/Creator.png'
                    className=' w-full mx-auto'
                    // lazy= 'true'
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner