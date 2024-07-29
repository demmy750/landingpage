import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
export const Calculator = () => {
  return (
  <section>
    {/* <p className='font-bold text-[20px] flex justify-center'>Calculate Your Price</p> */}
    <div className='flex justify-center '>
      <div className='border p-5 border-x-2 rounded-xl shadow-xl mt-5 w-[930px]'>
        <p className='text-[#55BDB3]'>Service Type</p>
        <div className='flex gap-3'>
          <div className='relative'>
            <input className='border pl-[10px] pr-[150px] py-[5px] bg-[#f1f5f1] rounded-lg mt-1' placeholder='Writing' />
            <div className='absolute right-0 top-0 mt-[13px] mr-1 cursor-pointer'><IoIosArrowDown/></div>
          </div>
          <div className='flex-col mt-[-23px]'>
            <p className='text-[#55BDB3] mt-[px]'> Quantity</p>
            <input className='border pl-[10px] pr-[150px] py-[5px] bg-[#f1f5f1] rounded-lg mt-1' placeholder='100' />
          </div>
        </div>
        <div className='flex gap-7 mt-5'>
          <div className=''>
            <p className='text-[#55BDB3]'>Due Date</p>
            <input className='border pl-[10px] pr-[10px] py-[5px] bg-[#f1f5f1] rounded-lg mt-1' placeholder='May 25,2022' />
          </div>
          <div className='flex-col ml-[20px]'>
            <p className='text-[#55BDB3]'>Words</p>
            <input className='border pl-[10px] pr-[10px] py-[5px] bg-[#f1f5f1] rounded-lg mt-1' placeholder='300' />
          </div>
          <div className='flex-col ml-[20px]'>
            <p className='text-[#55BDB3]'>Quality</p>
            <input className='border pl-[10px] pr-[7px] py-[5px] bg-[#f1f5f1] rounded-lg mt-1' placeholder='Experts' />
          </div>
        </div>
        <div className='mt-[-130px] ml-[720px] '>
        <div className='flex items-center mt-[-50px]  '>
          <div className='mr-4'>
            <FaDollarSign size={50} color='#55BDB3' />
          </div>
          <p className='text-[50px] text-[#55BDB3] ml-[-20px] mt-[-8px] font-bold'>11.7</p>
        </div>
        <div>
          <button className='border mt-[20px] ml-[20px] px-[30px] text-white rounded-lg py-[10px]  bg-[#130F26]'>Order Now</button>
        </div>
        </div>
      </div>
    </div>

  </section>  
  );
};
