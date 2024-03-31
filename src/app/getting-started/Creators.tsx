import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';
import { Books } from '@/components/data';
import Link from 'next/link';

const Creators = () => {
    const [selectedBoxes, setSelectedBoxes] = useState<number[]>([])


    const handleSelect = (index: number): void => {
        if (selectedBoxes.includes(index)) {
            setSelectedBoxes(selectedBoxes.filter((item) => item !== index))
        } else {
            setSelectedBoxes([...selectedBoxes, index])
        }
    }
    return (
        <div className='my-20 pl-4 w-full lg:w-4/5'>
            <small className='text-gray-600 text-lg'>Select three Creators that further describe your preference:</small>
            <motion.div
                className='my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16'
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.9,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                {Books.map((creator, index) => (
                    <button key={index} onClick={() => handleSelect(index)} className='flex gap-2 items-center  disabled:cursor-not-allowed text-black disabled:text-gray-400'
                        disabled={selectedBoxes.length >= 3 && !selectedBoxes.includes(index)}
                    >
                        <div className={`w-24 h-24 rounded-full ${selectedBoxes.includes(index) ? ' border-button-blue border-2 text-button-blue' : 'border-[#717070]/70 border'}`}>
                            <Image
                                alt='user'
                                src={creator.avatar}
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className={` flex flex-col items-start gap-0 ${selectedBoxes.includes(index) ? ' text-button-blue' : ''}`}>
                            <div className='text-base font-bold '>{creator.author}</div>
                            <small className='text-sm'>{creator.authorTitle}</small>
                        </div>
                    </button>
                ))}
            </motion.div>
            <small className='text-sm text-black'>{selectedBoxes.length}/3 selected</small>
            <div className='w-full mt-7'>
                <Link href='/dashboard'  type='submit' className={`bg-button-blue text-white font-semibold px-4 rounded-md py-2 text-base w-fit transition-opacity ${selectedBoxes.length < 3 ? 'opacity-0' : ' opacity-100'}`}>
                    Next
                </Link>
            </div>
        </div>
    )
}

export default Creators