import React from 'react';
import CenterAlign from '../../Helper/CenterAlign';
import getBrandData from './demoData/DemoData';
import Tittle from '../../Ui/Tittle';

const TopBrands = () => {
    return (
        <CenterAlign>
            <Tittle text="Top Featured Brands" />
            <div className='lg:flex grid grid-cols-2 flex-col lg:flex-row gap-4 px-4'>
                {
                    getBrandData()?.map((item,idx)=>{
                        return(
                            <div data-aos="fade-up" key={idx} className='bg-gradient-to-tr p-3 from-[#eeeeee] to-[#fefefe] shadow-lg  lg:w-full to-center flex-col gap-4'>
                                <img className='w-[90px] h-[90px] object-contain' src={item.logo} alt="" />
                                <h1 className='font-semibold text-xl'>{item.tittle}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </CenterAlign>
    );
};

export default TopBrands;