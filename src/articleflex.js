import React from 'react'
import '../src/index.css'
import Document1 from '../src/asset/Document 1.png'
import Document2 from '../src/asset/Document 2.png'
import Document3 from '../src/asset/Document 3.png'
import Rightarrow from '../src/asset/Group 71.png'
import Rightarrow2 from '../src/asset/Group 71 (1).png'
import Rightarrow3 from '../src/asset/Right.png'
import Document4 from '../src/asset/Document 4.png'
import Rightarrow4 from '../src/asset/Group 71 (2).png'
import Saly1 from '../src/asset/Saly-1.png'
import Saly12 from '../src/asset/Saly-1 (2).png'
export const Articleflex = () => {
  return (
    <div>
        <div className='mt-[50px]'>
        <div className='flex gap-16 justify-center bg-white'>
            <div className='  border border-[blue] rounded-lg p-[20px] shadow-xl bg-white'>
                <img src={Document1} alt='' />
                <p className='mt-[10px] text-[blue]'>Article Writing</p>
                <p className='mt-[10px]'>Lörem ipsum polysam spetila <br/> pyde.Trapolig regnbågsbarn <br/> och  beligt ehylig viktigt</p>
                <img className='mt-[10px]' src={Rightarrow} alt=''/>
            </div>
            <div className='border border-[#7a7aef] rounded-lg p-[20px] shadow-lg bg-white  '>
                <img src={Document3} alt='' />
                <p className='mt-[20px] text-[#7a7aef]'>Content Writing</p>
                <p className='mt-[10px]'>Lörem ipsum polysam spetila <br/> pyde. Trapolig regnbågsbarn <br/> och beligt ehylig viktigt</p>
                <img className='mt-[10px]' src={Rightarrow2} alt=''/>
            </div>
            <div className='border border-orange-500  rounded-lg p-[20px] shadow-lg  bg-white   '>
                <img src={Document2} alt='' />
                <p className='mt-[20px] text-orange-500'>Article Writing</p>
                <p className='mt-[10px]'>Lörem ipsum polysam spetila <br/> pyde. Trapolig regnbågsbarn <br/> och beligt ehylig viktigt</p>
                <img className='mt-[10px]' src={Rightarrow3} alt=''/>
            </div>
        </div>
        <div className='flex gap-16 justify-center mt-[50px] '>
            <div className='border border-orange-500  rounded-lg p-[20px] shadow-md bg-white '>
                <img src={Document2} alt='' />
                <p className='mt-[20px] text-orange-500'>Article Writing</p>
                <p className='mt-[10px]'>Lörem ipsum polysam spetila <br/> pyde.Trapolig regnbågsbarn <br/> och beligt ehylig viktigt</p>
                <img className='mt-[10px]' src={Rightarrow3} alt=''/>
            </div>
            <div className=' border border-[blue]  rounded-lg p-[20px] shadow-md  bg-white '>
                <img src={Document1} alt='' />
                <p className='mt-[20px] text-[blue] '>Content Writing</p>
                <p className='mt-[10px]'>Lörem ipsum polysam spetila <br/> pyde.Trapolig regnbågsbarn <br/> och  beligt ehylig viktigt</p>
                <img className='mt-[10px]' src={Rightarrow} alt=''/>
            </div>
            <div className='border border-purple-500 rounded-lg p-[20px] shadow-md  bg-white'>
                <img src={Document4} alt='' />
                <p className='mt-[20px] text-purple-500'>Article Writing</p>
                <p className='mt-[10px]'>Lörem ipsum polysam spetila <br/> pyde. Trapolig regnbågsbarn <br/> och beligt ehylig viktigt</p>
                <img className='mt-[10px]' src={Rightarrow4} alt=''/>
            </div>
        </div>
        <div className='flex justify-between'>
        <img className='mt-[-430px] h-64' src={Saly1} alt=''/>
        <img className=' mt-[-280px]' src={Saly12} alt=''/>
        </div>
    </div>
    </div>
  )
}
