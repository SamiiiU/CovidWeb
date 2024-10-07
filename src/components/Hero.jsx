import React, { useEffect } from 'react'
import bg from '../assets/hero-bg.png'
import AOS from 'aos';


const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration : 1000,
            delay : 0,
            offset : 200,
            once : true,
        })
    })
  return (
    <div className='w-screen sm:h-screen sm:px-20 px-12 bg-[#e2f8fa] rounded-br-[25vw] pb-8 pt-20 sm:flex-row flex-col flex justify-center sm:justify-start items-center'>
      <div data-aos="fade-up" className=  'flex-1 flex flex-col gap-y-6 justify-start items-start'>
        <p className='font-semibold text-zinc-700/50'>COVID-19 Awareness</p>
        <h1 className='sm:text-[3vw] text-[9vw] font-bold text-purple-700'>Stay Safe Stay Home</h1>
        <p className='text-zinc-700/50 '>COVID-19 is a highly contagious viral disease caused by the SARS-CoV-2 virus, first identified in late 2019. </p>

        <span className='py-4 px-8 bg-purple-700 text-white font-semibold rounded-full' data-aos="fade-up">Click Here</span>
      </div>
      <div data-aos="fade-up" className='sm:w-1/2 w-full h-64 'style={{
        backgroundImage : `url(${bg})`,
        backgroundSize : 'contain',
        backgroundPosition : 'center',
        backgroundRepeat : 'no-repeat'
      }}>

      </div>
    </div>
  )
}

export default Hero
