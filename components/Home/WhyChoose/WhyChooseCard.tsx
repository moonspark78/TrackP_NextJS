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
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, eum!</p>
    </div>
  )
}

export default WhyChooseCard