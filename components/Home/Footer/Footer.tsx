import React from 'react'
import { FaClock, FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-white py-10 '>
        <div className='w-[90%] mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {/* Logo & Description */}
                <div>
                    {/* Logo */}
                    <h1 className='text-xl md:text-2xl font-bold'>Track. <span className='text-3xl md:text-4xl text-blue-600'>P</span></h1>
                    {/* Description */}
                    <p className='mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque earum fuga fugit.
                    </p>
                </div>
                {/* About Us Links*/}
                <div>
                    <h3 className='text-lg font-semibold text-gray-800'>About Us</h3>
                    <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                        <li>Support Center</li>
                        <li>Customer Support </li>
                        <li>About Us</li>
                        <li>CopyRight</li>
                        <li>Popular Campaign</li>
                    </ul>
                </div>
                {/* Our Informations */}
                <div>
                    <h3 className='text-lg font-semibold text-gray-800'>Our Information</h3>
                    <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                        <li>Return Policy</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>SiteMap</li>
                        <li>Store Hours</li>
                    </ul>
                </div>
                {/* Contact */}
                <div>
                    <h3 className='text-lg font-semibold text-gray-800'>Contact Info</h3>
                    <ul className='mt-4 space-y-4 text-sm font-semibold text-gray-500'>
                        <li className='flex items-center'>
                            <FaMapMarkedAlt className='mr-2'/>
                            Paris, France</li>
                        <li className='flex items-center'>
                        <FaPhoneAlt className='mr-2'/>
                            +33 1 45 44 45 56</li>
                        <li className='flex items-center'> <FaClock className='mr-2'/> 7/7 - 24/24</li>
                        <li className='flex items-center'> <FaEnvelope className='mr-2'/> info@trackP.fr</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer