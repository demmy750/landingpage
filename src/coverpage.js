import React from 'react'
import jetPics from '../src/asset/Group 9.png'
import greenTick from '../src/asset/6 - action, check, circle, checkmark, button, ok icon.png'
export const Coverpage = () => {
  return (
    <div className=''>
      <div id='Home' className='bg-[#F0F8F8] flex flex-col xl:flex-row justify-center  items-center py-[50px] px-[50px] pb-[110px]'>
        <div className='flex flex-col w-full h-full '>
          <div className=''>
            <h1 className='text-[30px] text-[#55BDB3] font-bold ' style={{ marginTop: '150px' }}>WE PROVIDE <br /><span className='text-[#0F2435]'>ACTION-PROVOKING</span></h1>
            <h2 className='text-[20px] mt-[5px] font-bold'>TO HELP YOU GROW AUDIENCE</h2>
            <h2 className='mt-[10px] text-[14px] sm:text-[18px] xl:text-[18px]'>Lörem ipsum onas. Ivera. Prende exoment: gigad för tralig nehahusade. <br className='hidden md:block' />Parasocial platinade och tyvaling, suskade, gäv.<br className='hidden md:block' /> Beseng kopimism inte teröktig.</h2>
          </div>
          <div className='mt-5 flex gap-2 w-[10] sm:w-[50%] ' style={{ marginTop: '80px' }}>
            <div className=' bg-[#0F2435] text-white px-6 py-1 rounded-[8px]'>Free Proposal</div>
            <div className=' bg-white border border-[#000] rounded-[8px] px-6 py-1'>Chat Now</div>
          </div>
        </div>
        <div className='w-full h-full relative z-10'>
          <div className='absolute top-[65%] left-[-50px] xl:left-[-130px]'>
            <div className='bg-white flex flex-col gap-0 sm:gap-1 sm:flex-row  border  border-white rounded-xl px-[10px] py-[px] ml-20' style={{ width: 'fit-content' }}>
              <div className=' my-[20px]'>
                <div className='flex gap-1 bg-[#F0F8F8] ml-[5px] px-[5px] py-[5px] rounded-md'>
                  <img src={greenTick} alt='' />
                  <p>Field-Specific Writers</p>
                </div>
                <div className='flex gap-1 bg-[#F0F8F8] ml-[5px] px-[5px] py-[5px] rounded-md mt-[10px]'>
                  <img src={greenTick} alt='' />
                  <p>Flexible Revision Policy</p>
                </div>
                <div className='flex gap-1 bg-[#F0F8F8] ml-[5px] px-[5px] py-[5px] rounded-md mt-[10px]'>
                  <img src={greenTick} alt='' />
                  <p>Complete Ownership</p>
                </div>
              </div>
              <div className='mr-[10px] my-0 sm:my-[20px]'>
                <div className='flex gap-1 bg-[#F0F8F8] ml-[5px] px-[5px] py-[5px] rounded-md  '>
                  <img src={greenTick} alt='' />
                  <p>Money-back Guarantee</p>
                </div>
                <div className='flex gap-1 bg-[#F0F8F8] ml-[5px] px-[5px] py-[5px] rounded-md mt-[10px]'>
                  <img src={greenTick} alt='' />
                  <p>24/7 Customer Support</p>
                </div>
                <div className='flex gap-1 bg-[#F0F8F8] ml-[5px] px-[5px] py-[5px] rounded-md mt-[10px]'>
                  <img src={greenTick} alt='' />
                  <p>Plagiarism Free Content</p>
                </div>
              </div>
            </div>
          </div>
          <>
            <img src={jetPics} alt='' className=' w-[50%] ml-[150px]' />
          </>
        </div>
      </div>
    </div>
  )
}
