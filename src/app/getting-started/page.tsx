'use client'
import React, { useState, useRef } from 'react'
import Categories from './Categories';
import Creators from './Creators';


const GettingStarted = () => {
    const [showDiv, setShowDiv] = useState<Boolean>(false);
    const targetRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        setShowDiv(true);
        setTimeout(() => {
          if (targetRef.current) {
            window.scrollTo({
              top: targetRef.current.offsetTop,
              behavior: 'smooth',
            });
          }
        }, 100);
      };



    return (
        <div className="w-full bg-light-blue p-5 md:p-20">
            <div className=" flex flex-col gap-5">
                <h1 className=" text-6xl font-semibold text-button-blue">Getting Started</h1>
                <small className=" text-base text-gray-600 pl-4"> Let us help you find the contents that suit you the most</small>
                <Categories scroll={handleScroll}/>
            </div>
            {showDiv &&
                <div ref={targetRef}>
                    <Creators/>
                </div>
            }
        </div>
    )
}

export default GettingStarted