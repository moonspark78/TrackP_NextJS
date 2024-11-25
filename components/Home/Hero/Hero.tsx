import React from 'react'
import Image from "next/image"

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]'>
        <div className='flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                {/* Text content */}
                <div>
                    <div className='w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white'>
                        <div className=''>
                            News
                        </div>
                        <p className=''>We have updated our term & condition policy</p>
                    </div>
                </div>
                {/* Image content */}
                <div className='lg:block'>
                    <Image
                        src="/images/hero.png"
                        alt="hero"
                        width={700}
                        height={700}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero