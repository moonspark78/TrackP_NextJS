import React from 'react'
import Image from "next/image"

const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]'>
        <div>
            <div>
                {/* Text content */}
                <div></div>
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