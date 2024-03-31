import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Book {
    id: string,
    title: string ,
    overview: string,
    image: string,
    avatar: string,
    author:string,
    authorTitle: string,
}

const Article = (params: Book) => {
    return (
        <div className=' w-full md:w-2/5 lg:w-1/6 max-h-[380px] flex-none'>
            <Link href={`/dashboard/${params.id}`} className='w-full h-52'>
                <Image
                    alt='book'
                    src={params.image}
                    width={280}
                    height={380}
                    className='w-full h-full'
                />
            </Link>
            <div className=' flex flex-col gap-1 my-4 text-black'>
                <Link href={`/dashboard/${params.id}`} className=' font-bold text-sm  hover:underline hover:underline-offset-4'>{params.title}</Link>
                <small className=' text-xs h-12'>{params.overview}</small>
            </div>
            <div className=' flex gap-2 items-center'>
                <Link href={`/dashboard/${params.id}`} className=' w-12 h-12 rounded-full'>
                    <Image
                        alt='user'
                        src={params.avatar}
                        width={48}
                        height={48}
                    />
                </Link>
                <div className='flex flex-col gap-0 text-black'>
                    <Link href={`/dashboard/${params.id}`} className=' text-sm font-bold  hover:underline hover:underline-offset-4'>{params.author}</Link>
                    <small className=' text-xs'>{params.authorTitle}</small>
                </div>
            </div>
        </div>
    )
}

export default Article