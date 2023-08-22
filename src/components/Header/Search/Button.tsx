import { clsx } from 'clsx'
import _ from 'lodash-es'
interface Props {
  name: string
  setSearchValue: (value: string) => void
}

function Component({ name, setSearchValue }: Props) {
  function handleClick() {
    setSearchValue(name)
  }

  return (
    <div>
      <button onClick={handleClick}>{name}</button>
    </div>
  )
}

export default Component
