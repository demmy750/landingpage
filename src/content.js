import React from 'react'
import '../src/content.css'
import discount from '../src/asset/Rectangle 76 (3).png'
export const Content = () => {
  return (
  <div>
      <div className='flex justify-center w-[200px]'>
    <img className='discountpics' src={discount} alt=''/> 
  </div>
   <div className='border rounded-2xl p-[30px] w-[100px]  bg-white mt-[-400px]'>
      <h1 className='text-3xl'>Get your content needs catered</h1>
      <h1 className='text-3xl'> and <span className='text-[#55BDB3]'> boost your business </span> with this</h1>
      <h1 className='text-3xl'> amazing discount of 20%.</h1>
      <div className='mt-10 flex gap-2   '>
        <div className=' bg-[#0F2435] text-white px-6                                                                                                    .z": py-[10px] rounded-[8px] cursor-pointer '>Free Proposal</div>
        <div className=' bg-white border border-[#000] rounded-[8px] px-6 py-[10px] cursor-pointer'>Chat Now</div>
      </div>
    </div>
  </div>
  )
}
