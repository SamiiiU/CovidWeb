import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaSnapchat } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' bg-[#e2f8fa] w-full sm:h-[50vh] sm:px-20 px-12 py-10 flex justify-center sm:flex-row flex-col items-start gap-8 '>
        {/* item1  */}
      <div className='flex flex-1 flex-col h-full gap-8'>
        <h1 className='text-[5vw] sm:text-[2vw] font-bold text-black'>About</h1>
        <p>COVID-19 is a highly contagious viral disease caused by the SARS-CoV-2 virus, first identified in late 2019. </p>

        <div className='flex gap-5 text-purple-700 text-[6vw] sm:text-[2vw]'>
            <FaFacebookF className='cursor-pointer'/>
            <FaInstagram className='cursor-pointer'/>
            <FaSnapchat className='cursor-pointer'/>
            <FaLinkedin className='cursor-pointer'/>

        </div>
      </div>
        
        {/* item2  */}

        <div className='flex-1 flex flex-col gap-4'>
            <h1 className='sm:text-[2vw] text-[5vw] font-bold text-black ' >Quick Link</h1>
            <p className='text-purple-700 font-semibold cursor-pointer'>Symptoms</p>
            <p className='text-purple-700 font-semibold cursor-pointer'>Prevention</p>
            <p className='text-purple-700 font-semibold cursor-pointer'>FAQ'S</p>
            <p className='text-purple-700 font-semibold cursor-pointer'>About</p>
            <p className='text-purple-700 font-semibold cursor-pointer'>Contact</p>  
        </div>

        {/* items 3  */}

        <div className='flex-1 flex flex-col gap-4'>
            <h1 className='text-[5vw] sm:text-[2vw] font-bold text-black'>Helpful Links</h1>
            <p className='text-purple-700 font-semibold cursor-pointer'>HealthCore Professional </p>
            <p className='text-purple-700 font-semibold cursor-pointer'>Facilities</p>
            <p className='text-purple-700 font-semibold cursor-pointer'>Protect Your Families</p>
            <p className='text-purple-700 font-semibold cursor-pointer'>World Health</p>
              
        </div>

        {/* items 4  */}
        <div className='flex-1 flex flex-col gap-4'>
            <h1 className='text-[5vw] sm:text-[2vw] font-bold text-black'>Resources</h1>
            <p className='text-purple-700 font-semibold cursor-pointer'>HealthCore Professional </p>
            <p className='text-purple-700 font-semibold cursor-pointer'>Facilities</p>
            <p className='text-purple-700 font-semibold cursor-pointer'>Protect Your Families</p>
            <p className='text-purple-700 font-semibold cursor-pointer '>World Health</p> 
        </div>

    </div>
  )
}

export default Footer
