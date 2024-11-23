import { navLinks } from '@/constants/Constants'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className='w-full transition-all duration-200 h-[12vh] z-[1000]'>
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
        </div>
    </div>
  )
}

export default Nav