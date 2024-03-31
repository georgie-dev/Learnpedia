import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const NewsLetter = () => {
  return (
    
    <section className="px-5 md:px-20 py-10 my-14 flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between border-y bg-grey/40">
    <div className="w-full lg:w-1/2 ">
      <h1 className=" text-black font-semibold text-4xl">Stay informed</h1>
      <small className=" text-base text-[#717070]">Sign up for our newsletter</small>
    </div>
    <div className=" flex flex-col md:flex-row lg:justify-end w-full lg:w-1/2 gap-3 md:gap-10 md:items-center">
      <input
        type="email"
        className=" w-full md:w-1/2 bg-grey/80 py-2 placeholder:p-2 placeholder:text-sm placeholder:text-black/50"
        placeholder="Your Email Address"
      />
      <button
        type="submit"
        className=" w-fit text-xs md:text-base px-4 py-2 flex items-center gap-1 bg-button-blue text-white"
      >Subscribe <IoIosArrowRoundForward />
      </button>
    </div>
  </section>
  )
}

export default NewsLetter