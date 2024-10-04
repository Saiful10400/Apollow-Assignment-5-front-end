import React, { useEffect, useState } from 'react';
import getNumberArrayFromNumber from '../../../Utils/getNumberArrayFromNumber';
import Button from '../../Ui/Button';

const Pagination = ({data,setterFung}) => {

const totalPage=Math.ceil(data.length/10)
const paginaitonButtonsNumber=getNumberArrayFromNumber(totalPage)


// pagination button onclick handle.
const[btnIndex,setBtnIndex]=useState(1)


const buttonOnclick=(btnIndex)=>{
setBtnIndex(btnIndex)


const SplitedData={data:data?.slice((btnIndex-1)*10,(btnIndex*10)),index:btnIndex}

setterFung(SplitedData)

}

// initial situation handle.
useEffect(()=>{
setterFung({data:data?.slice((btnIndex-1)*10,(btnIndex*10)),index:btnIndex})
setBtnIndex(btnIndex)
},[setterFung,data])


if(data.length<=10) return
    return (
        <div className='to-center gap-3 mb-6 mt-4'>
            {
                paginaitonButtonsNumber?.map(item=><Button onClick={()=>buttonOnclick(item)} className={`${btnIndex===item&&"bg-[black]"} p-0 w-[40px] lg:w-[50px]  lg:h-[40px] rounded-[3px]`} key={item} text={item.toString()}/>)
            }
            
        </div>
    );
};

export default Pagination;