import category from '@/data/category'
import Image from 'next/image'
import React, { useState } from 'react'

function Search({ userInput }: { userInput: any }) {
  const [searchInput, setSearchInput] = useState<string>()

  return (
    <div className='text-center'>
      <h2 className='mt-[70px] text-[65px] text-red-600 tracking-widest font-semibold'>
        Discover
      </h2>
      <h2 className='text-[20px]'>Your Amazing City</h2>
      <div className='flex mt-5 items-center justify-center gap-3'>
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          type='text'
          placeholder='Search Anything'
          className='bg-white p-3 border-2  rounded-full px-5 w-1/5 outline-red-300'
        />
        <button
          onClick={() => userInput(searchInput)}
          type='submit'
          className='shadow-sm cursor-pointer hover:scale-110 bg-white p-3
             hover:bg-red-200 px-5 pr-6 border-2 rounded-full transition-all'
        >
          🔍 Go!
        </button>
      </div>
      <div className='mt-5 flex flex-col justify-center items-center'>
        <h2>Or Browse the category</h2>
        <div className='grid grid-cols-3 md:grid-cols-7 w-[50%] justify-center gap-5 mt-3'>
          {category.map((item, index) => (
            <div
              key={index}
              className='border-[1px] w=[60px] p-4 bg-white rounded-full
                 hover:bg-red-200 hover:scale-120 cursor-pointer transition-all'
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={30}
                height={30}
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search
