import React from 'react';
import CenterAlign from '../../Helper/CenterAlign';
import getCustomizeData from './demoData';
import Tittle from '../../Ui/Tittle';

const Customize = () => {
    return (
        <CenterAlign>
            <Tittle text="Customize Your Keyboard" />
            <div className='grid lg:grid-cols-2 grid-cols-1 px-4 gap-4'>
                {
                    getCustomizeData()?.map((item,idx)=>{
                        return(
                            <div data-aos="fade-up" className='flex items-center pr-4 justify-between bg-white border rounded-lg' key={idx}>
                                <img src={item.image} className='h-[80px] w-[160px] object-contain rounded-lg' alt="" />
                                <h1 className='font-semibold'>{item.name}</h1>
                                <h1 className='font-bold'>{item.price}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </CenterAlign>
    );
};

export default Customize;