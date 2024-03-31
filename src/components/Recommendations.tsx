import React from 'react'
import Image from 'next/image'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Article } from '.';

const Recommendations = () => {

  const array = [1, 2, 3, 4, 5, 6]

  return (
    <div className='my-0 md:my-4 px-5 md:px-20'>
      <div className=' w-full flex justify-between'>
        <h2 className=' text-left font-semibold text-2xl text-black'>Recommended</h2>
        <small className=' flex cursor-pointer items-end group font-semibold gap-0 hover:underline hover:underline-offset-4 text-black'>View all <IoIosArrowRoundForward className=' animate-bounce' /></small>
      </div>
      <div className=' my-0 md:my-7 flex flex-nowrap gap-8 overflow-x-scroll scrollbar-hide items-start'>
        {array.map((i) => (
          <Article id='1' key={i} image='/books/book8.svg' title='The Art of Story Telling' overview='This article explores what is needed to be a stor teller, written by a stroy teller.'
            avatar='/avatars/avatar8.svg' author='Zainab S.' authorTitle='Writer' />
        ))}
      </div>
    </div>
  )
}

export default Recommendations