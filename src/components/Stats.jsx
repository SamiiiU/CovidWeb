import React from 'react'

const Stats = () => {
  return (
    <div className='w-full text-center sm:h-screen px-20 py-12'>
      <h1 className='font-semibold text-purple-700 text-[6vw] sm:text-[3vw]'>Corona Virus Statistics</h1>
      <p className='text-zinc-700/50'> As of 2024, global statistics indicate over 770 m confirmed cases and more than 6.9 m deaths.</p>


      <div className='w-full flex flex-wrap gap-y-6 justify-between mt-20 items-center'>
        <div className='sm:w-1/3 w-full flex-col flex items-center gap-y-5  justify-center '>
        <svg className='animate-spin duration-[10000ms]' width='120' height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.15" d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" fill="#000000"></path> <path d="M8.49994 5.93777L7.24994 3.77271M5.93783 8.5L3.77277 7.25M5 12H2.5M5 12C5 15.866 8.13401 19 12 19M5 12C5 8.13401 8.13401 5 12 5M5.93777 15.5L3.77271 16.75M8.49994 18.0622L7.24994 20.2273M12 21.5V19M12 19C15.866 19 19 15.866 19 12M16.7501 20.2273L15.5001 18.0622M20.2272 16.75L18.0621 15.5M21.5 12H19M19 12C19 8.13401 15.866 5 12 5M20.2273 7.25L18.0623 8.5M15 15V15.01M16.7501 3.77271L15.5001 5.93777M12 5V2.5M8 11V11.01M11 15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15C9 14.4477 9.44772 14 10 14C10.5523 14 11 14.4477 11 15ZM15 10C15 11.1046 14.1046 12 13 12C11.8954 12 11 11.1046 11 10C11 8.89543 11.8954 8 13 8C14.1046 8 15 8.89543 15 10Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

        <h2 className='font-bold text-black text-[6vw]  sm:text-[3vw]'>92,341,633</h2>
        <p className='text-zinc-700 font-semibold'>Active Patients</p>
        </div>

        <div className='sm:w-1/3 w-full flex-col flex items-center gap-y-5  justify-center '>
        <svg className='animate-spin duration-[10000ms]' width='120' height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.15" d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" fill="#000000"></path> <path d="M8.49994 5.93777L7.24994 3.77271M5.93783 8.5L3.77277 7.25M5 12H2.5M5 12C5 15.866 8.13401 19 12 19M5 12C5 8.13401 8.13401 5 12 5M5.93777 15.5L3.77271 16.75M8.49994 18.0622L7.24994 20.2273M12 21.5V19M12 19C15.866 19 19 15.866 19 12M16.7501 20.2273L15.5001 18.0622M20.2272 16.75L18.0621 15.5M21.5 12H19M19 12C19 8.13401 15.866 5 12 5M20.2273 7.25L18.0623 8.5M15 15V15.01M16.7501 3.77271L15.5001 5.93777M12 5V2.5M8 11V11.01M11 15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15C9 14.4477 9.44772 14 10 14C10.5523 14 11 14.4477 11 15ZM15 10C15 11.1046 14.1046 12 13 12C11.8954 12 11 11.1046 11 10C11 8.89543 11.8954 8 13 8C14.1046 8 15 8.89543 15 10Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

        <h2 className='font-bold text-black text-[6vw] sm:text-[3vw]'>95,346,333</h2>
        <p className='text-zinc-700 font-semibold '>Active Cases</p>
        </div>

        <div className='sm:w-1/3 w-full flex-col flex items-center gap-y-5  justify-center '>
        <svg className='animate-spin duration-[10000ms]' width='120' height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.15" d="M19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12Z" fill="#000000"></path> <path d="M8.49994 5.93777L7.24994 3.77271M5.93783 8.5L3.77277 7.25M5 12H2.5M5 12C5 15.866 8.13401 19 12 19M5 12C5 8.13401 8.13401 5 12 5M5.93777 15.5L3.77271 16.75M8.49994 18.0622L7.24994 20.2273M12 21.5V19M12 19C15.866 19 19 15.866 19 12M16.7501 20.2273L15.5001 18.0622M20.2272 16.75L18.0621 15.5M21.5 12H19M19 12C19 8.13401 15.866 5 12 5M20.2273 7.25L18.0623 8.5M15 15V15.01M16.7501 3.77271L15.5001 5.93777M12 5V2.5M8 11V11.01M11 15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15C9 14.4477 9.44772 14 10 14C10.5523 14 11 14.4477 11 15ZM15 10C15 11.1046 14.1046 12 13 12C11.8954 12 11 11.1046 11 10C11 8.89543 11.8954 8 13 8C14.1046 8 15 8.89543 15 10Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

        <h2 className='font-bold text-black text-[6vw] sm:text-[3vw]'>95,346,333</h2>
        <p className='text-zinc-700 font-semibold '>Active Deaths</p>
        </div>
      </div>
    </div>
  )
}

export default Stats 
