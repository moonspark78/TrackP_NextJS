import React from 'react'
import Image from 'next/image'

const AnalyticsFeature = () => {
  return (
    <div className='pt-24 pb-16'>
        {/* Define Grid */}
        <div className='w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {/* Image Content */}
            <div>
                <Image
                    src="/images/a.jpg"
                    alt="images"
                    width={500}
                    height={500}
                    className="object-contain"
                />
            </div>
            {/* Text content */}
            <div className='p-6'>
              <h1 className='text-base font-semibold text-orange-500'>
                Audiance tracking and insight
              </h1>
              <h1 className='mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900'>
                Powerful analytics tools that put you in control and are fully customizable.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iure, dolor? Delectus autem libero cum qui beatae architecto cupiditate, ab ratione.
                 Sint possimus temporibus natus quaerat.
              </p>
            </div>
        </div>
    </div>
  )
}

export default AnalyticsFeature