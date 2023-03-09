import React, {useState} from 'react'
import {RiNotification3Line} from 'react-icons/ri'

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className='p-4 shadow-sm border-b'>
        <div className='flex justify-between px-6 items-center'>
          <div className='flex flex-col gap-2'>
            <p className=' font-bold text-3xl font-sans'>Hi Nenny.</p>
            <p className=' text-sm font-thin'>Let's Stat Learning!</p>
          </div>
            <div>
                <input
                type='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='border-2 border-black rounded-xl w-96 p-2 placeholder:font-sans'
                placeholder='What do you want to learn?'
                />
            </div>

            <div className='flex justify-between gap-10 items-center'>
              <RiNotification3Line className='text-2xl'/>
              <img src='http://cdn.onlinewebfonts.com/svg/img_110805.png' alt='Profile' className='rounded-full w-8 h-8'/>
            </div>
        </div>
    </div>
  )
}

export default Header