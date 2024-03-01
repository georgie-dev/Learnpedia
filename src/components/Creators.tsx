import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'

const Creators = () => {
  return (
    <div className=' flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center w-full px-5 md:px-20 my-10'>
      <div className=' flex flex-col gap-5 text-black w-full lg:w-1/2'>
        <small className='text-5xl'>Discover Creators</small>
        <div className='w-full md:w-1/2 flex flex-col gap-8'>
          <small className='text-2xl'>Learn from and engage with creators you love.</small>
          <Link href='#' className=' underline underline-offset-4 text-black text-base font-semibold flex items-center gap-0 group'> <span>See all creators</span> <span className='invisible group-hover:visible'><HiOutlineExternalLink size={15} /></span> </Link>
        </div>
      </div>
      <div className=' w-full lg:w-1/2 flex items-center flex-nowrap gap-10'>
        <div className=' bg-grey h-auto w-1/2'>
          <Image
            alt='creator'
            src='/AvatarM.png'
            width={500}
            height={298}
            className=' w-full h-full'
          />
        </div>
        <div className=' bg-grey h-auto w-1/2'>
          <Image
            alt='creator'
            src='/AvatarF.png'
            width={500}
            height={298}
            className=' w-full h-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Creators