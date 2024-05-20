'use client'
import { ApiResp } from '@/app/types'
import React, { useState } from 'react'
import PlaceItemCard from './PlaceItemCard'
import SideDrawer from './SideDrawer'

interface Props {
  placeList: ApiResp[]
}

const PlaceList = ({ placeList }: Props) => {
  const [selectedPlace, setSelectedPlace] = useState<ApiResp>()
  return (
    <div className='px-[10px] md:px-[120px] mt-7 z-99'>
      <h2 className='text-[20px] font-bold mb-3'>Search Results</h2>
      <div className='grid grid-cols-2 md:gri-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5'>
        {placeList.map((place: ApiResp, index: number) => (
          <div
            key={index}
            onClick={() => {
              setSelectedPlace(place)
            }}
            className='hover:scale-110 transition-all'
          >
            <PlaceItemCard place={place} />
          </div>
        ))}
      </div>
      {selectedPlace?.name ? (
        <div className='fixed top-0 right-0'>
          <SideDrawer
            place={selectedPlace}
            close={() => setSelectedPlace(undefined)}
          />
        </div>
      ) : null}
    </div>
  )
}

export default PlaceList
