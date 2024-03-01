import React from 'react'
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { PiHouseLine, PiCoins, PiFigmaLogo } from "react-icons/pi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { GiStarSwirl, GiVisoredHelm } from "react-icons/gi";
import { LiaBriefcaseMedicalSolid } from "react-icons/lia";

interface Button {
    icon: any,
    category: string,
    number: number
}

const Button = (items : Button)=>{
    return(
        <div className=' flex gap-5 items-center'>
            <div className=' w-32 h-28 border rounded-xl border-[#717070]/70 text-black flex items-center justify-center font-bold text-2xl'>
                {items.icon}
            </div>
            <div className=' flex flex-col gap-1'>
                <small className=' font-bold text-lg text-black'>{items.category}</small>
                <small className=' text-[#717070] text-base'>{items.number} learners</small>
            </div>
        </div>
    )
}

const Category = () => {
    return (
        <div className=' my-20 px-5 md:px-20'>
            <div className='w-full md:w-1/2'>
                <h2 className=' text-left font-bold text-3xl text-black'>Find a subject that suits your needs</h2>
            </div>
            <div className=' my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14'>
                <Button icon={<HiOutlinePaintBrush/>} category='Arts' number={300}/>
                <Button icon={<HiOutlineDesktopComputer/>} category='Computer Science' number={300}/>
                <Button icon={<PiHouseLine/>} category='Architecture' number={300}/>
                <Button icon={<GiStarSwirl/>} category='Astronomy' number={300}/>
                <Button icon={<PiCoins/>} category='Finance' number={300}/>
                <Button icon={<PiFigmaLogo/>} category='Design' number={300}/>
                <Button icon={<LiaBriefcaseMedicalSolid/>} category='Health' number={300}/>
                <Button icon={<GiVisoredHelm/>} category='History' number={300}/>
            </div>
        </div>
    )
}

export default Category