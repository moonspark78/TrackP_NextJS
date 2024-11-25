import { navLinks } from '@/constants/Constants'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean
  closeNav: () => void;
}

const MobileNav = ({showNav,closeNav}:Props) => {

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]" ;


  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen`}></div>
      {/* NavLinks */}
      <div className={`text-white  ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300
      w-[100%] sm:w-[100%] bg-indigo-900 space-y-6 z-[10006]`}>
        {navLinks.map((link) => {
                    return (
                        <Link href={link.url} key={link.id}>
                            <p className='nav__link text-white text-[20px] ml-12 border-b-[1.5px] pb-1
                             border-white sm:text-[25px]'>{link.label}</p>
                        </Link>
                    )
                  })}
                  {/* Close Icon */}
                  <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-12 sm:h-12 w-9 h-9 cursor-pointer transition-transform duration-200 active:scale-90 active:text-indigo-600 active:shadow-lg'/>

      </div>
    </div>
  )
}

export default MobileNav