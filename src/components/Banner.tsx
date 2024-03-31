'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { HiOutlineExternalLink } from "react-icons/hi";

const Banner = () => {

    const slideData: any[] = [
        {
            title: 'Making Learning Open Source.',
            text: 'Say Goodbye to boring, one-size fits all learning, and hello to one that suits your needs.',
            img: '/libraryy.svg'
        },
        {
            title: 'Bringing Learning to life.',
            text: 'Learnpedia provides you with the chance to make meaningful contributions to people..',
            img: '/life.svg'
        }
    ]
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slideData.length);
      }, 30000); // Change slide every 3 seconds
  
      return () => clearInterval(interval);
    }, [slideData.length]);
  
    return (
      <div className="slideshow relative h-screen mb-0 md:mb-8 lg:mb-20">
        {slideData.map((slider, index) => (
          <div
            key={index}
            className={`absolute inset-0 slide transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className='w-full'>
              <div className='w-full lg:w-1/2 mx-auto mt-4'>
                <h1 className='text-7xl text-center text-black'>{slider.title.split(' ')[0]} <span className='text-button-blue'>{slider.title.split(' ')[1]}</span> <br/> {slider.title.split(' ')[2]} {slider.title.split(' ')[3]} </h1>
              </div>
              <div className='w-full md:w-3/5 lg:w-1/3 mx-auto my-5'>
                <h4 className='text-base text-center font-medium text-black'>{slider.text}</h4>
              </div>
            </div>
            <div className='flex items-center justify-center gap-3'>
              <Link href='#' className='rounded-lg py-2 px-3 bg-button-blue text-white text-sm'>Start learning now</Link>
              <Link href='#' className='underline underline-offset-4 text-black text-sm font-semibold flex items-center gap-0 group'><span>Sign up as a creator</span> <span className='invisible group-hover:visible'><HiOutlineExternalLink size={15} /></span></Link>
            </div>
            <div className='max-w-full pt-10 md:pt-0 h-auto bg-transparent'>
              <Image
                alt='Learner'
                width={800}
                height={480}
                src={slider.img}
                className='w-full md:w-1/2 h-auto mx-auto'
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

export default Banner