import type { Metadata } from "next";
import React from 'react'
import { Article } from '@/components'
import { Books } from '@/components/data'

export const metadata: Metadata = {
    title: 'Dashboard',
  };


const Page = () => {
  return (
    <div>
        <div className='flex items-center gap-3 text-xs'>
            <button className=' rounded-md p-2 font-semibold w-fit bg-[#03355C] text-white'>All</button>
            <button className=' rounded-md p-2 font-semibold w-fit bg-[#EDF6F9] text-black'>Art</button>
            <button className=' rounded-md p-2 font-semibold w-fit bg-[#EDF6F9] text-black'>Science</button>
            <button className=' rounded-md p-2 font-semibold w-fit bg-[#EDF6F9] text-black'>Tech</button>
        </div>

        <div className='mt-3 flex-wrap flex items-start w-full md:gap-8 gap-28'>
            {Books.map((book, index)=>(
                <Article key={index} id={book.id} title={book.title} image={book.image} overview={book.overview}
                avatar={book.avatar} author={book.author} authorTitle={book.authorTitle}/>
            ))}
        </div>
    </div>
  )
}

export default Page