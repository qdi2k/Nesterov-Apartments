import {Text} from '@/shared/ui'
import styles from './FilterItems.module.css'
import {useState} from 'react'

type RoomData = {
  id: number
  title: string
}

interface SelectItemProps {
  title: string
  isSelect: boolean
  onClick: () => void
}

const MOCK_ROOMS = [
  {id: 1, title: 'Студия'},
  {id: 2, title: '1'},
  {id: 3, title: '2'},
  {id: 4, title: '3'},
  {id: 5, title: '4'},
  {id: 6, title: '5'},
]

const SelectItem = ({title, isSelect, onClick}: SelectItemProps) => {
  return (
    <div
      className={`${styles.selectItem} ${isSelect && styles.select}`}
      onClick={onClick}
    >
      <Text color={isSelect ? 'white' : 'greyDark'}>{title}</Text>
    </div>
  )
}

export function SelectRoom() {
  const [selectedItems, setSelectedItems] = useState<RoomData[]>([])

  const selectItem = (item: RoomData) => {
    setSelectedItems((prevItems) =>
      prevItems.includes(item)
        ? prevItems.filter((i) => i !== item)
        : [...prevItems, item]
    )
  }

  return (
    <div className={styles.selectRoomContainer}>
      <Text color='blueLight'>Кол-во комнат</Text>
      <div className={styles.selectList}>
        {MOCK_ROOMS.map((room) => (
          <SelectItem
            title={room.title}
            key={room.id}
            isSelect={selectedItems.includes(room)}
            onClick={() => selectItem(room)}
          />
        ))}
      </div>
    </div>
  )
}
