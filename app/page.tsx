'use client'
import PlaceList from '@/components/PlaceList'
import Search from '@/components/Search'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ApiResp, ResApiResp } from './types'

const BASE_URL = '/googleapi/maps/api/place/textsearch/json?query='
const GOOGLE_PLACE_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY

export default function Home() {
  const [res, setRes] = useState<ApiResp[]>()
  const [value, setValue] = useState<string>('')
  //const query = params.id

  console.log(res)
  const getPlaceList = async (value: string) => {
    const result = await axios.get<ResApiResp>(
      BASE_URL + '?query=' + value + '&key=' + GOOGLE_PLACE_KEY

      //'https://maps.googleapis.com/maps/api/place/textsearch/json?query=hotels%20in%20newYork&key=AIzaSyCENWq_nyc4LASiYTXL-j6cGa5yS5mpCQM'
    )

    const data = result.data.results
    setRes(data)
  }
  useEffect(() => {
    if (value !== '') {
      getPlaceList(value)
    }
  }, [value])

  return (
    <>
      <Search userInput={(value: string) => setValue(value)} />

      {res !== undefined && <PlaceList placeList={res} />}
    </>
  )
}
