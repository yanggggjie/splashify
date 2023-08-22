import { clsx } from 'clsx'
import _ from 'lodash-es'
interface Props {}

function Component({}: Props) {
  return (
    <div>
      <select className={clsx('border-2 border-black rounded-xl')}>
        <option>Trending</option>
        <option>New</option>
      </select>
    </div>
  )
}

export default Component
