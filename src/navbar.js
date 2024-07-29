import React from 'react'
import './index.css'
export const Navbar = () => {
  return (
    <div className= ' flex bg-[#F0F8F8] justify-center shadow-md ' style={{zIndex:'1000', }}>
      <br/>
      <div className=' flex gap-96 bg-white items-center pt-[10px] ml-[45px]  pr-[10px]  pb-[10px] mt-[20px] rounded-[15px] fixed top-0' style={{paddingLeft:'170px'}}>
       <div>LOGO</div>
        <div className=' flex col gap-11 items-center w-full '>
          <ul className=' flex gap-5'>
            <li><a href='#Home' className='text-[#55BDB3] hover:underline'>Home</a></li>
            <li><a href='#Services'>Our Services</a></li>
            <li><a href='#Process'>Our Process</a></li>
            <li><a href='#Choose'>Why Choose Us</a></li>
          </ul>
          <div className='flex col gap-2 '>
            <div className=' bg-[#55BDB3] text-white  py-[5px] rounded-lg cursor-pointer p-5  '>Order Now</div>
            <div className='border-x-[2px] border-y-[2px] border-[#55BDB3] rounded-lg  text-[#55BDB3] px-[30px] cursor-pointer mr-4 '>Login</div>
          </div>
        </div>
      </div>
    </div>
  )
}