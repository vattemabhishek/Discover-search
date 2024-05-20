import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between p-5 px-5 shadow-md bg-white'>
      <div className='flex gap-3 items-center'>
        <h2 className='text-2xl font-semibold text-red-500 tracking-widest'>
          DISCOVER
        </h2>
      </div>

      <ul className='flex items-center gap-8'>
        <li className='text-xl hover:text-red-500 cursor-pointer'>Home</li>
        <li className='text-xl hover:text-red-500 cursor-pointer'>About Us</li>
        <li className='text-xl hover:text-red-500 cursor-pointer'>
          Contact Us
        </li>
      </ul>
    </div>
  )
}

export default Header
