import React from 'react'

const Nav = () => {
  return (
    <div className='absolute top-0 left-0  w-full px-20  py-6 bg-[#e2f8fa] flex justify-between items-center'>
      <div className='font-bold text-3xl text-black tracking-wider'>COVID</div>
        <ul className='sm:flex hidden justify-center gap-x-4 font-semibold capitalize text-zinc-800/50'>
            <li>Home</li>
            <li>Report</li>
            <li>Center</li>
            <li>About</li>
            <li>Symptoms</li>
            <li>Contacts</li>
        </ul>
    </div>
  )
}

export default Nav
