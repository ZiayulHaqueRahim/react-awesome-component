import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise);
 
    
    return (
        <div>
            <h2 className='text-9xl text-center py-5  '>Get our Membership</h2>
            <div className='bg-black rounded-b-3xl text-center grid grid-cols-3 gap-5 px-2 py-5 '>
                {
                    pricingData.map(pricing =><PricingCard pricing={pricing} key={pricing.id} /> )
                }
            </div>
            
        </div>
    );
};

export default PricingOptions;