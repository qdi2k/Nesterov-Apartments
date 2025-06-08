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

const getRoomTitle = (value: number) => {
  switch (value) {
    case 0:
      return 'Студия'
    case 1:
      return '1'
    case 2:
      return '2'
    case 3:
      return '3'
    case 4:
      return '4'
    case 5:
      return '5'
    default:
      return 'Студия'
  }
}

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

export function SelectRoom({rooms, selectedItems, setSelectedItems}) {
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
        {rooms.map((room) => (
          <SelectItem
            title={getRoomTitle(room.title)}
            key={room.id}
            isSelect={selectedItems.includes(room)}
            onClick={() => selectItem(room)}
          />
        ))}
      </div>
    </div>
  )
}
