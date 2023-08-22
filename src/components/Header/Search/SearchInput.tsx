import { clsx } from 'clsx'
import _ from 'lodash-es'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'
interface Props {
  searchValue: string
  setSearchValue: (value: string) => void
}

function Component({ searchValue, setSearchValue }: Props) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setSearchValue(value)
  }

  function handleCrossClick() {
    inputRef.current.focus()
    setSearchValue('')
  }
  function handleCrossMouseDown(event: React.MouseEvent) {
    event.preventDefault()
  }
  return (
    <div className={clsx('')}>
      <div className={clsx('relative')}>
        <div
          className={clsx(
            'absolute top-1/2 -translate-y-1/2 left-2',
            'text-2xl pointer-events-none',
          )}
        >
          <AiOutlineSearch></AiOutlineSearch>
        </div>
        <input
          ref={inputRef}
          type="text"
          className={clsx('border-black border-2 rounded-xl', 'pl-8 pr-8')}
          value={searchValue}
          onChange={handleChange}
        />
        <div
          className={clsx(
            'absolute top-1/2 -translate-y-1/2 right-2',
            'text-2xl',
            'active:scale-150',
          )}
          onClick={handleCrossClick}
          onMouseDown={handleCrossMouseDown}
        >
          <RxCross2></RxCross2>
        </div>
      </div>
    </div>
  )
}

export default Component
