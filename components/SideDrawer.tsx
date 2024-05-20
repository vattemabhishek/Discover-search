import { ApiResp } from '@/app/types'
import Image from 'next/image'
import React from 'react'

const BASE_URL_photo =
  'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400'

const SideDrawer = ({ close, place }: { close: any; place: ApiResp }) => {
  const onDirectionClick = () => {
    window.open(
      'https://maps.google.com/maps/search/?api=1&query=' +
        place.name +
        place.formatted_address
    )
  }

  return (
    <div className='h-screen w-screen md:w-[400px]  bg-white shadow-md p-5'>
      <button
        onClick={() => close()}
        className='text-xl mb-3 text-red-500 hover:underline'
      >
        Close
      </button>
      <div>
        <h2 className='line-clamp-2 text-2xl mb-3'>{place.name}</h2>
        <Image
          src={
            BASE_URL_photo +
            '&photo_reference=' +
            place?.photos[0]?.photo_reference +
            '&key=' +
            process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY
          }
          alt='placeholder'
          width={200}
          height={80}
          className='w-full h-[250px] object-fill rounded-xl mb-3'
        />
        <h2 className='text-xl text-gray-400 line-clamp-1 mb-2'>
          📍{place.formatted_address}
        </h2>
        <div className='flex gap-5 items-center text-xl'>
          <h2>⭐ {place.rating}</h2>
          <span>👤 {place.user_ratings_total}</span>
        </div>
        <div className='mt-5 flex gap-5'>
          <button
            onClick={() => onDirectionClick()}
            className='flex gap-2 text-xl p-2 px-3 bg-red-500 rounded-full text-white hover:scale105 transition-all'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#000000'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z' />
              <circle cx='12' cy='10' r='3' />
            </svg>
            <span>Directions</span>
          </button>
          <button className='flex gap-2 text-xl p-2 px-3 bg-red-500 rounded-full text-white hover:scale105 transition-all'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#000000'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <g fill='none' fill-rule='evenodd'>
                <path d='M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8' />
              </g>
            </svg>
            <span>Share</span>
          </button>
        </div>
        <div className='mt-5'>
          <iframe
            width={450}
            height={250}
            loading='lazy'
            className='w-full h-[200px] rounded-lg '
            src={
              'https://www.google.com/maps/embed/v1/place?key=' +
              process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY +
              '&q=' +
              place.formatted_address
            }
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default SideDrawer
