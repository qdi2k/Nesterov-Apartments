'use client'

import {Text} from '@/shared/ui'
import styles from './Item.module.css'
import {useState} from 'react'

interface IRoomsProps {
  selectId: number
  setSection: (id: number) => void
}

const data = [
  {id: 1, count: '1'},
  {id: 2, count: '2'},
  {id: 3, count: '3'},
  {id: 4, count: '4'},
]

export function Rooms({selectId, setSection}: IRoomsProps) {
  const [selectRoom, setSelectRoom] = useState<number | null>(null)

  const changeRoom = (id: number) => {
    setSelectRoom(id)
    if (!selectRoom) {
      setSection(selectId + 1)
    }
  }

  return (
    <div className={styles.roomsContainer}>
      <Text size='small'>Комнаты</Text>
      <ul className={styles.roomsListContainer}>
        {data.map((room) => (
          <button key={room.id} onClick={() => changeRoom(room.id)}>
            <Text
              size='small'
              className={`${styles.roomCount} ${selectRoom === room.id && styles.roomSelected}`}
            >
              {room.count}
            </Text>
          </button>
        ))}
      </ul>
    </div>
  )
}
