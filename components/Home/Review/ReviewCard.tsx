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
            <FaQuoteLeft className='w-9 h-9 oppacity-10 absolute text-gray-600 top-8'/>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-6 items-center pt-4'>
            <div className='col-span-3 order-2 lg:order-1'>
                <p className='mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem]
                 md:leading-[2.5rem] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio voluptate iure quod,
                  beatae labore cupiditate exercitationem praesentium minima architecto, nostrum ipsa eligendi! 
                  Velit odit totam voluptatem maxime,
                  explicabo optio dolor aut doloribus, quibusdam consectetur mollitia provident culpa asperiores ipsam molestias.</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewCard