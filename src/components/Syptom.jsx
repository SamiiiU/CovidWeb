import React from 'react'
import symp1 from '../assets/symptom1.png'
import { FaCheck, FaSyringe } from "react-icons/fa";
import Panic from '../assets/panic.png'
import { RiVirusFill } from "react-icons/ri";
import { IoShieldHalfSharp } from 'react-icons/io5';
import { MdOutlineWifiProtectedSetup } from 'react-icons/md';


const Syptom = () => {
  return (
    <div className='w-full sm:px-20 px-12 py-10 h-auto'>
      <div className='w-full flex sm:flex-row flex-col justify-center my-20 mix-h-fit sm:h-[60vh] items-center '>
        <div className='sm:w-1/2 w-full sm:h-full h-[50vh] ' style={{
            backgroundImage : `url(${symp1})`,
            backgroundSize :'contain',
            backgroundPosition : 'center',
            backgroundRepeat : 'no-repeat'
        }}/>

        <div className='sm:w-1/2 w-full h-full py-10 sm:px-20  gap-y-4 flex flex-col'>
            <h1 className='text-purple-700 text-[6vw] sm:text-[2.4vw] font-bold'>What is Corona Virus?</h1>
            <p className='text-zinc-700 '>COVID-19 is a highly contagious viral disease caused by the SARS-CoV-2 virus, first identified in late 2019. </p>

            <p className='flex gap-x-4 items-center'><FaCheck className='text-purple-700'/> Respiratory virus transmission risk</p>
            <p className='flex gap-x-4 items-center'><FaCheck className='text-purple-700'/> Respiratory virus transmission risk</p>
            <p className='flex gap-x-4 items-center'><FaCheck className='text-purple-700'/> Respiratory virus transmission risk</p>

            <span className='py-4 px-8 inline-block bg-purple-700 text-white font-semibold rounded-full'>Learn More</span>
        </div>
      </div>

      {/* 2ND SYMP   */}

      <div className='w-full flex sm:flex-row flex-col justify-center my-20 mix-h-fit sm:h-[60vh] items-center '>
        

        <div className='sm:w-1/2 h-full py-10 sm:px-20  gap-y-4 flex flex-col'>
            <h1 className='text-purple-700 text-[6vw] sm:text-[2.4vw] font-bold'>Don't Get Panic</h1>
            <p className='text-zinc-700 '>COVID-19 is a highly contagious viral disease caused by the SARS-CoV-2 virus, first identified in late 2019. </p>

            <p className='flex gap-x-4 items-center'><FaCheck className='text-purple-700'/> Respiratory virus transmission risk</p>
            <p className='flex gap-x-4 items-center'><FaCheck className='text-purple-700'/> Respiratory virus transmission risk</p>
            <p className='flex gap-x-4 items-center'><FaCheck className='text-purple-700'/> Respiratory virus transmission risk</p>

            <span className='py-4 px-8 bg-purple-700 text-white font-semibold rounded-full'>Learn More</span>
        </div>

        <div className='sm:w-1/2 w-full sm:h-full h-[50vh] ' style={{
            backgroundImage : `url(${Panic})`,
            backgroundSize :'contain',
            backgroundPosition : 'center',
            backgroundRepeat : 'no-repeat'
        }}/>

      </div>

      {/* END  */}
      <div className='flex  justify-center sm:gap-8 gap-y-8 items-center my-16  flex-wrap'>
            <div className='flex justify-center gap-4 items-center w-[250px] '>
                < RiVirusFill className='sm:text-[4vw] text-[15vw] text-purple-700'/>
                <div>
                    <h1 className='text-[4vw] font-bold text-purple-700'>Symptoms</h1>
                    <p className='text-zinc-700'>Symptoms of covid</p>
                </div>
            </div>
            <div className='flex justify-center gap-4 items-center w-[250px] '>
                <FaSyringe
                className='sm:text-[4vw] text-[15vw]  text-purple-700'/>
                <div>
                    <h1 className='text-[2.4vw] font-bold text-purple-700'>Protection</h1>
                    <p className='text-zinc-700'>Protection of covid</p>
                </div>
            </div>
            <div className='flex justify-center gap-3 items-center w-[250px]'>
                < IoShieldHalfSharp  className='sm:text-[4vw] text-[15vw]  text-purple-700'/>
                <div>
                    <h1 className='text-[2.4vw] font-bold text-purple-700'>Security</h1>
                    <p className='text-zinc-700'>Security of covid</p>
                </div>
            </div>
            <div className='flex justify-center items-center w-[250px]'>
                < MdOutlineWifiProtectedSetup  className='sm:text-[4vw] text-[15vw] text-purple-700'/>
                <div>
                    <h1 className='text-[2.4vw] font-bold text-purple-700'>Treatment</h1>
                    <p className='text-zinc-700'>Treatment of covid</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Syptom
