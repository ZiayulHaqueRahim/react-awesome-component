import React from 'react';

const PricingCard = ({pricing}) => {
    console.log(pricing);
    
    return (
        <div className='border-amber-300 border-2 px-3 py-2 flex flex-col gap-5 '>
            {/* //header */}
            <h1 className='text-5xl text-white' >Plan:{pricing.title}</h1>
            <p className='text-5xl text-white'>price:{pricing.price}</p>
            <p className='text-5xl text-white'>info:{pricing.description}</p>
            <p className='text-5xl text-white'>Billing cycle:{pricing.billingCycle}</p>
        </div>
    );
};

export default PricingCard;