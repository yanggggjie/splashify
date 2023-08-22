import { clsx } from 'clsx'
import _, { divide } from 'lodash-es'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Photos from './Photos.tsx'
interface Props {}

function Component({}: Props) {
  const defaultPhotos = [
    'https://cdn2.thecatapi.com/images/vq.png',
    'https://cdn2.thecatapi.com/images/2sh.png',
    'https://cdn2.thecatapi.com/images/94i.jpg',
    'https://cdn2.thecatapi.com/images/95r.jpg',
    'https://cdn2.thecatapi.com/images/bri.jpg',
    'https://cdn2.thecatapi.com/images/c1t.jpg',
    'https://cdn2.thecatapi.com/images/eb0.jpg',
    'https://cdn2.thecatapi.com/images/eg1.jpg',
    'https://cdn2.thecatapi.com/images/MTc0ODI1MA.jpg',
    'https://cdn2.thecatapi.com/images/9cbCzlbJt.jpg',
  ]

  const [photos, setPhotos] = useState<Array<string>>(defaultPhotos)

  async function getPhotos() {
    const res = await axios.get(
      import.meta.env.VITE_BASE_URL + '/images/search',
      {
        headers: {
          'x-api-key': import.meta.env.VITE_API_KEY,
        },
        params: {
          limit: 10,
        },
      },
    )
    setPhotos(
      res.data.map((value) => {
        return value.url
      }),
    )
  }
  // useEffect(() => {
  //   getPhotos()
  // }, [])

  console.log(photos)
  if (!photos) return <div>loading</div>
  return (
    <div>
      <Photos photos={photos}></Photos>
    </div>
  )
}

export default Component
