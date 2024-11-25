import React from 'react'

const MobileNav = () => {
  return (
    <div>
      {/* Overlay */}
      <div className='fixed inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen'></div>
      {/* NavLinks */}
      <div className='text-white fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300
      w-[100%] sm:w-[100%] bg-indigo-900 space-y-6 z-[10006]'>

      </div>
    </div>
  )
}

export default MobileNav