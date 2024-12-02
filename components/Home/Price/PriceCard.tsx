import React from 'react'

type Props ={
    price: number;
    plan: string;
}

const PriceCard = ({plan}:Props) => {
  return (
    <div className='bg-white p-12 rounded-lg shadow-lg'>
        <p className='mt-8'>
            {plan}
        </p>
    </div>
  )
}

export default PriceCard