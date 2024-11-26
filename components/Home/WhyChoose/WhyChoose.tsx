import React from 'react'

const WhyChoose = () => {
  return (
    <div className='pt-16 pb-16'>
        <h1 className='mt-6 text-2xl md:text-3xl capitalize font-bold text-center'>
            Why you choose this application
        </h1>
        <div className='mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          <div>
            <WhyChooseCard
              image="/images/i1.png"
              title="Create Free Account"
              linkText="Start Earning"
            />
          <div>
            <WhyChooseCard
              image="/images/i2.png"
              title="Create Free Account"
              linkText="Start Earning"
            />
          <div>
            <WhyChooseCard
              image="/images/i3.png"
              title="Create Free Account"
              linkText="Start Earning"
            />
          <div>
            <WhyChooseCard
              image="/images/i4.png"
              title="Create Free Account"
              linkText="Start Earning"
            />
          </div>
        </div>
    </div>
  )
}

export default WhyChoose