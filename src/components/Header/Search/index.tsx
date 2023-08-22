import { clsx } from 'clsx'
import _ from 'lodash-es'
import Button from './Button.tsx'
import SearchInput from './SearchInput.tsx'
import { useState } from 'react'
interface Props {}

function Component({}: Props) {
  const [searchValue, setSearchValue] = useState('')
  const leftButtons = ['Nature', 'Architecture', 'Travel']
  const rightButtons = ['Food', 'Animals', 'Technology']

  return (
    <div
      className={clsx(
        'px-2',
        'flex flex-row justify-center  items-center gap-2',
      )}
    >
      <div className={clsx('flex flex-row gap-2', 'text-blue-700 font-bold')}>
        {leftButtons.map((name, index) => {
          return (
            <Button
              name={name}
              setSearchValue={setSearchValue}
              key={index}
            ></Button>
          )
        })}
      </div>
      <SearchInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></SearchInput>
      <div className={clsx('flex flex-row gap-2', 'text-blue-700 font-bold')}>
        {rightButtons.map((name, index) => {
          return (
            <Button
              name={name}
              setSearchValue={setSearchValue}
              key={index}
            ></Button>
          )
        })}
      </div>
    </div>
  )
}

export default Component
