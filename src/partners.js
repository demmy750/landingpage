import React from 'react'
import Vector from '../src/asset/Vector.png'
import facebook from '../src/asset/facebook.png'
import google from '../src/asset/google.png'
import nike from '../src/asset/nike.png'
import './index.css'
export const Partners = () => {
  return (
    <section className='flex justify-center'>
      <div className="flex gap-5 justify-center w-[700px] h-[70px] bg-white rounded-[20px]  items-center mt-[-35px] shadow-xl">
    <p className='ml-[20px]'>Powered by :</p>
    <img className='ml-[20px]' src={Vector} alt=''/>
    <img className='ml-[20px]' src={facebook} alt=''/>
    <img className='ml-[20px]' src={google} alt=''/>
    <img className='ml-[20px]' src={nike} alt=''/>
    </div>
    </section>
  )
}
