import { clsx } from 'clsx'
import _ from 'lodash-es'
import Header from './components/Header'
import Photos from './components/Photos'
interface Props {}

function Component({}: Props) {
  return (
    <div className={clsx('p-2', 'flex flex-col gap-2')}>
      <div className={clsx('w-full h-20 overflow-hidden')}>
        <Header></Header>
      </div>
      <div className={clsx('w-full grow overflow-y-scroll')}>
        <Photos></Photos>
      </div>
    </div>
  )
}

export default Component
