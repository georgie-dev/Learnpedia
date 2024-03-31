import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Books } from '@/components/data'
import { MdLibraryAdd } from "react-icons/md";
import { FaArrowCircleLeft } from "react-icons/fa";

const Page = ({ params }: { params: { book: string } }) => {

    // console.log(params)

    const book = Books.find((item) => item.id === params.book)
    // console.log(book)
    return (
        <div className=' p-4'>
            <Link  href='/dashboard' className='w-full text-button-blue text-xl bg-red-400'>
                <FaArrowCircleLeft/>
            </Link>
            <div className='w-full my-10 flex justify-between items-center'>
                <div className=' flex gap-3 items-end'>
                    <Link href={`/dashboard/${book?.id}`} className=' w-12 h-12 rounded-full'>
                        <Image
                            alt='user'
                            src={book?.avatar || '/avatars/avatar1.svg'}
                            width={48}
                            height={48}
                        />
                    </Link>
                    <div className='flex flex-col gap-0 text-black'>
                        <Link href={`/dashboard/${book?.id}`} className=' text-sm font-bold  hover:underline hover:underline-offset-4'>{book?.author}</Link>
                        <small className=' text-sm'>{book?.authorTitle}</small>
                    </div>
                </div>
                <div className=' rounded-md p-2 text-sm bg-[#EDF6F9] text-button-blue flex items-center font-semibold gap-2'><MdLibraryAdd /> Add to library</div>
            </div>
            <div className='my-7 w-full'>
                <h1 className='text-3xl font-semibold text-black'>{book?.title}</h1>
                <div>
                    <div className=' rounded-md w-full my-5 h-[24rem] bg-red-200 relative'>
                        <Image
                            alt='book'
                            src={book?.image || '/books/book1.svg'}
                            fill 
                            quality={100}
                            objectFit='cover'
                            className='rounded-md mx-auto'
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Page