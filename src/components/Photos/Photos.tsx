import { clsx } from 'clsx'
import _ from 'lodash-es'
interface Props {
  photos: string[]
}

function Component({ photos }: Props) {
  return (
    <div className={clsx('columns-2 md:columns-3 space-y-3 gap-1')}>
      {photos.map((photoUrl, index) => {
        return (
          <div className={clsx('p-2 rounded-xl bg-gray-200')} key={index}>
            <img className={clsx('')} key={index} src={photoUrl} alt="" />
          </div>
        )
      })}
    </div>
  )
}

export default Component
