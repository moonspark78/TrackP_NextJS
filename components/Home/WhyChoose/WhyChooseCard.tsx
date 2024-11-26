import Image from 'next/image';
import React from 'react'

type Props ={
    image: string;
    title: string;
    linkText: string;
}

const WhyChooseCard = ({image,title,linkText}:Props) => {
  return (
    <div>
        <Image
            src={image}
            alt={title}
            width={80}
            height={80}
            className='object-contain mx-auto'
        />
        <h1 className='text-center text-lg mt-5 mb-5 font-semibold text-gray-800'>{title}</h1>
        <p className='text-gray-600 font-medium text-center text-sm mb-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, eum!</p>
        <p className='text-center font-semibold text-blue-500 hover:text-blue-700 transition-all duration-200 cursor-pointer'>{linkText}</p>
    </div>
  )
}

export default WhyChooseCard