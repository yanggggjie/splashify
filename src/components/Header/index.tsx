import { clsx } from 'clsx'
import _ from 'lodash-es'
import Title from './Title.tsx'
import Search from './Search'
import Select from './Select.tsx'
interface Props {}

function Component({}: Props) {
  return (
    <div className={clsx('flex flex-row items-center')}>
      <div className={clsx('w-40 h-full overflow-hidden')}>
        <Title></Title>
      </div>
      <div className={clsx('grow h-full overflow-hidden')}>
        <Search></Search>
      </div>
      <div className={clsx('w-36 h-full overflow-hidden')}>
        <Select></Select>
      </div>
    </div>
  )
}

export default Component
