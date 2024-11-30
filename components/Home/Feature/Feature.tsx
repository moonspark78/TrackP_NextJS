import React from 'react'
import { FaBook, FaCog, FaDesktop, FaHeadset, FaInfinity, FaLaptop, FaLayerGroup, FaMobileAlt, FaShieldAlt } from 'react-icons/fa'

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
        {
            icon: <FaHeadset className='text-green-500'/>,
            text: "Humanly Support",
        },
        {
            icon: <FaInfinity className='text-pink-500'/>,
            text: "Lifetime Updates",
        },
        {
            icon: <FaBook className='text-indigo-500'/>,
            text: "Rich Documentation",
        },
        {
            icon: <FaShieldAlt className='text-orange-500'/>,
            text: "Enhanced Security",
        },
    ]
  return (
    <div>Feature</div>
  )
}

export default Feature