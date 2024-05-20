import { ApiResp } from '@/app/types'
import Image from 'next/image'
import React from 'react'

const BASE_URL_photo =
  'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400'

const PlaceItemCard = ({ place }: { place: ApiResp }) => {
  return (
    <div className='w-full max-w-[320px]  border-[1px] rounded-xl shadow-md bg-white'>
      <Image
        src={
          BASE_URL_photo +
          '&photo_reference=' +
          place?.photos?.[0]?.photo_reference +
          '&key=' +
          process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY
        }
        alt='placeholder'
        width={200}
        height={80}
        className='w-[320px] h-[160px] object-cover rounded-t-xl'
      />
      <div className='p-2'>
        <h2 className='line-clamp-2 text-2xl'>{place.name}</h2>

        <h2 className='text-xl text-gray-400 line-clamp-2'>
          📍{place.formatted_address}
        </h2>
        <h2 className='text-xl'>⭐ {place.rating}</h2>
      </div>
    </div>
  )
}

export default PlaceItemCard
