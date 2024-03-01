import React from 'react'
import Image from 'next/image'
import { IoIosArrowRoundForward } from "react-icons/io";

const Recommendations = () => {

  const array = [1, 2, 3, 4, 5, 6]

  return (
    <div className=' my-4 px-5 md:px-20'>
      <div className=' w-full flex justify-between'>
        <h2 className=' text-left font-semibold text-2xl text-black'>Recommended</h2>
        <small className=' flex cursor-pointer items-end group font-semibold gap-0 hover:underline hover:underline-offset-4 text-black'>View all <IoIosArrowRoundForward className=' animate-bounce' /></small>
      </div>
      <div className=' my-7 flex flex-nowrap gap-8 overflow-x-scroll scrollbar-hide items-start'>
        {array.map((i) => (
          <div key={i} className=' w-[280px] max-h-[380px] flex-none'>
            <div className='w-full h-60'>
              <Image
                alt='book'
                src='/sample.png'
                width={280}
                height={380}
                className='w-full h-full'
              />
            </div>
            <div className=' flex flex-col gap-1 my-4 text-black'>
              <small className=' font-bold text-sm'>The Art of Story telling</small>
              <small className=' text-xs'>This article explores what is needed to be a stor teller, written by a stroy teller.</small>
            </div>
            <div className=' flex gap-2 items-center'>
              <div className=' w-12 h-12 rounded-full'>
                <Image
                  alt='user'
                  src='/avatar.png'
                  width={48}
                  height={48}
                />
              </div>
              <div className='flex flex-col gap-0 text-black'>
                <small className=' text-sm font-bold'>Zainab S.</small>
                <small className=' text-xs'>Writer</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Recommendations