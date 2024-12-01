import React from 'react'
import Image from 'next/image'
import { FaQuoteLeft, FaStar } from 'react-icons/fa';


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
            {/* Text Content */}
            <div className='col-span-3 order-2 lg:order-1'>
                <p className='mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem]
                 md:leading-[2.5rem] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio voluptate iure quod,
                  beatae labore cupiditate exercitationem praesentium minima architecto, nostrum ipsa eligendi! 
                  Velit odit totam voluptatem maxime,
                  explicabo optio dolor aut doloribus, quibusdam consectetur mollitia provident culpa asperiores ipsam molestias.
                </p>
                <div className='flex items-center mt-4'>
                    <FaStar className='text-yellow-300 w-6 h-6'/>
                    <FaStar className='text-yellow-300 w-6 h-6'/>
                    <FaStar className='text-yellow-300 w-6 h-6'/>
                    <FaStar className='text-yellow-300 w-6 h-6'/>
                    <FaStar className='text-yellow-300 w-6 h-6'/>
                </div>
                <h1 className='text-xl font-semibold mt-8'>{name}</h1>
                <p className='mt-2 text-lg text-gray-600 font-medium mb-6'>FullStack Web Developer</p>
            </div>
            {/* Image */}
            <div className='col-span-2 mx-auto order-1 lg:order-2'>
                <Image
                    src={image}
                    alt={name}
                    width={250}
                    height={150}
                    className='rounded-full'
                />
            </div>
        </div>
    </div>
  )
}

export default ReviewCard