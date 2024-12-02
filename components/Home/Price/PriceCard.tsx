import React from 'react'
import { FaCheck } from 'react-icons/fa';

type Props ={
    price: number;
    plan: string;
}

const PriceCard = ({plan, price}:Props) => {
  return (
    <div className='bg-white p-12 rounded-lg shadow-lg'>
        <p className='mt-8 text-xl font-semibold text-blue-600 text-center'>
            {plan}
        </p>
        <div className='font-medium text-3xl mt-4 text-center'>
            $<span className='text-5xl font-bold'>{price}</span>/mo
        </div>
        <p className='mt-2 text-gray-400 text-center'>Per user</p>
        <div className='mt-10'>
            <div className='text-center mb-4 flex items-center space-x-3'>
                <div className='text-center w-8 h-8 bg-gray-300 rounded-full flex justify-center flex-col items-center'>
                    <FaCheck className='text-green-600'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>
                    Unlimited Connection
                </p>
            </div>
            <div className='text-center mb-4 flex items-center space-x-3'>
                <div className='text-center w-8 h-8 bg-gray-300 rounded-full flex justify-center flex-col items-center'>
                    <FaCheck className='text-green-600'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>
                    Basic Actions & Triggers
                </p>
            </div>
            <div className='text-center mb-4 flex items-center space-x-3'>
                <div className='text-center w-8 h-8 bg-gray-300 rounded-full flex justify-center flex-col items-center'>
                    <FaCheck className='text-green-600'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>
                    Draft Payments
                </p>
            </div>
            <div className='text-center mb-4 flex items-center space-x-3'>
                <div className='text-center w-8 h-8 bg-gray-300 rounded-full flex justify-center flex-col items-center'>
                    <FaCheck className='text-green-600'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>
                    Unlimited Flows & Supports
                </p>
            </div>
            <div className='text-center mb-4 flex items-center space-x-3'>
                <div className='text-center w-8 h-8 bg-gray-300 rounded-full flex justify-center flex-col items-center'>
                    <FaCheck className='text-green-600'/>
                </div>
                <p className='text-sm font-semibold text-gray-700'>
                    Lifetime Updates
                </p>
            </div>
        </div>
    </div>
  )
}

export default PriceCard