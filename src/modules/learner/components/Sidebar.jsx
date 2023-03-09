import React from 'react'
import Logo from '../../../assets/img/Logo.png'
import { NavLink } from 'react-router-dom';
import {VscLibrary} from 'react-icons/vsc'
import {MdOutlineDashboard} from 'react-icons/md'
import {BiUser} from 'react-icons/bi'
const Sidebar = () => {

    const activeLink = 'flex items-center gap-2 pl-4 pt-3 pb-2.5 rounded-lg bg-sky-500 text-white  text-md m-2 font-sans';
    const normalLink = 'flex items-center gap-2 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 font-sans';
  return (
    <div className=' h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 px-2 fixed bg-sky-100 w-1/6 py-16'>
            <div className=" flex justify-between align-middle m-4 items-center mb-8 ">
              <a href='/'>
                <img src={Logo} width='80%' alt='Logo'/>
              </a>
              </div>

              <div className='mt-10'>
              <NavLink 
              to='/'
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
               >
                <MdOutlineDashboard/> Dashboard
               </NavLink>

               <NavLink 
              to='/'
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
               >
                <VscLibrary/> Library
               </NavLink>

               <NavLink 
              to='/'
                className={({ isActive }) => (isActive ? activeLink : normalLink)}
               >
                <BiUser/> My Profile
               </NavLink>
              </div>
    </div>
  )
}

export default Sidebar