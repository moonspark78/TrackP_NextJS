"use client";

import { navLinks } from '@/constants/Constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

const Nav = () => {

    const [navBg, SetNavBg] = useState(false);

    useEffect(() =>{
        const handler = () =>{
            if(window.scrollY >= 90) SetNavBg(true)
            if(window.scrollY < 90) SetNavBg(false)
        }

        window.addEventListener("scroll",handler)

        return () => {
            window.addEventListener("scroll",handler)
        }
    },[])




  return (
    <div className={` fixed ${navBg ? "bg-white shadow-md " : "fixed"} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
        <div className='flex items-center h-full justify-between w-[90%] lg:w-[80%] mx-auto'>
            {/* Logo */}
            <h1 className='text-xl md:text-2xl font-bold'>Track. <span className='text-3xl md:text-4xl text-blue-600'>P</span></h1>
            {/* Nav Links */}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link) => {
                    return (
                        <Link href={link.url} key={link.id}>
                            <p className='nav__link'>{link.label}</p>
                        </Link>
                    )
                })}
            </div>
            {/* Button */}
            <div className='flex items-center space-x-4'>
                <button className='md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700
                 hover:bg-blue-900 transition-all duration-200 rounded-full'>
                    Join Now
                </button>
                {/* Buger Menu */}
                <HiBars3BottomRight className='w-9 h-9 text-black cursor-pointer lg:hidden'/>
            </div>
        </div>
    </div>
  )
}

export default Nav