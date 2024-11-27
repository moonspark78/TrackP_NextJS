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
            <div></div>
        </div>
    </div>
  )
}

export default AnalyticsFeature