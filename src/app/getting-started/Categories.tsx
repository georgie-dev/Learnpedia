import React, { useState, useRef } from 'react'
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { PiHouseLine, PiCoins, PiFigmaLogo } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { GiStarSwirl, GiVisoredHelm } from "react-icons/gi";
import { LiaBriefcaseMedicalSolid } from "react-icons/lia";
import { LuCode2 } from "react-icons/lu";
import { motion } from 'framer-motion';

const categories = [
    {
        'icon': <HiOutlinePaintBrush />,
        'category': 'Arts'
    },
    {
        'icon': <HiOutlineDesktopComputer />,
        'category': 'Computer Science'
    },
    {
        'icon': <PiHouseLine />,
        'category': 'Architecture'
    },
    {
        'icon': <GiStarSwirl />,
        'category': 'Astronomy'
    },
    {
        'icon': <PiCoins />,
        'category': 'Finance'
    },
    {
        'icon': <PiFigmaLogo />,
        'category': 'Design'
    },
    {
        'icon': <LiaBriefcaseMedicalSolid />,
        'category': 'Health'
    },
    {
        'icon': <GiVisoredHelm />,
        'category': 'History'
    },
    {
        'icon': <LuCode2 />,
        'category': 'Coding'
    },
]

const Categories = ({ scroll }: any) => {
    const [selectedBoxes, setSelectedBoxes] = useState<number[]>([])


    const handleSelect = (index: number): void => {
        if (selectedBoxes.includes(index)) {
            setSelectedBoxes(selectedBoxes.filter((item) => item !== index))
        } else {
            setSelectedBoxes([...selectedBoxes, index])
        }
    }
    return (
        <div>
            <div className='my-10 pl-4 w-full lg:w-3/4'>
                <small className='text-gray-600 text-lg'> Select three categories that best describes your preference:</small>
                <motion.div
                    className=' my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14'
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 2,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    {categories.map((category, index) => (
                        <button onClick={() => handleSelect(index)} key={index} className='flex gap-5 items-center disabled:cursor-not-allowed text-black disabled:text-gray-400'
                            disabled={selectedBoxes.length >= 3 && !selectedBoxes.includes(index)}
                        >
                            <div className={` w-24 relative h-24 rounded-xl flex items-center justify-center font-bold disabled:text-green-400 text-2xl ${selectedBoxes.includes(index) ? ' border-button-blue border-2 text-button-blue' : 'border-[#717070]/70 border'}`}>
                                {category.icon}
                            </div>
                            <div className=' flex flex-col gap-1'>
                                <small className={`font-bold text-lg ${selectedBoxes.includes(index) ? ' text-button-blue' : ''}`}>{category.category}</small>
                            </div>
                        </button>
                    ))}
                </motion.div>
                <small className='text-sm text-black'>{selectedBoxes.length}/3 selected</small>
                <div className='w-full mt-7'>
                    <button onClick={scroll} type='submit' className={`bg-button-blue text-white font-semibold px-4 rounded-md py-2 text-base w-fit transition-opacity ${selectedBoxes.length < 3 ? 'opacity-0' : ' opacity-100'}`}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories