import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa';


type Props ={
    name: string;
    image: string;
}
const ReviewCard = ({name, image}:Props) => {
  return (
    <div className='w-full lg:w-[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg'>
        <div>
            <FaQuoteLeft className='w-9 h-9 oppacity-10 absolute top-8'/>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 items-center'>
            <div className='col-span-3 order-2 lg:order-1'>
                <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus reiciendis, qui asperiores ducimus odio similique.</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard