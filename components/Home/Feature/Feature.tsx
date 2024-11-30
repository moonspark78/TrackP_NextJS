import React from 'react'
import { FaCog, FaDesktop, FaLaptop, FaLayerGroup, FaMobileAlt } from 'react-icons/fa'

const Feature = () => {
    const features = [
        {
            icon: <FaLayerGroup className='text-red-500'/>,
            text: "50+ Unique Design Block",
        },
        {
            icon: <FaLaptop className='text-blue-500'/>,
            text: "Multiple Layouts",
        },
        {
            icon: <FaMobileAlt className='text-yellow-500'/>,
            text: "Mobile First Design",
        },
        {
            icon: <FaDesktop className='text-purple-500'/>,
            text: "Fully responsive",
        },
        {
            icon: <FaCog className='text-teal-500'/>,
            text: "Customizable Features",
        },
    ]
  return (
    <div>Feature</div>
  )
}

export default Feature