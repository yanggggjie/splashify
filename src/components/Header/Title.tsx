import { clsx } from 'clsx'
import _ from 'lodash-es'
import React from 'react'
import { FcStackOfPhotos } from 'react-icons/fc'
interface Props {}

function Component({}: Props) {
  return (
    <div className={clsx('flex flex-row items-center')}>
      <div className={clsx('text-4xl')}>
        <FcStackOfPhotos></FcStackOfPhotos>
      </div>
      <div className={clsx('text-3xl')}>
        <div>Splashify</div>
      </div>
    </div>
  )
}

export default Component
