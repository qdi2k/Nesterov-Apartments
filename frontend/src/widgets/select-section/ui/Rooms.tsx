import {Text} from '@/shared/ui'
import styles from './Item.module.css'

interface IRoomsProps {
  selectId: number
  changeSelect: (id: number) => void
  room: number | null
  changeRoom: (room: number) => void
}

const data = [
  {id: 1, count: '1'},
  {id: 2, count: '2'},
  {id: 3, count: '3'},
  {id: 4, count: '4'},
]

export function Rooms({selectId, changeSelect, room, changeRoom}: IRoomsProps) {
  const changeSelectRoom = (id: number) => {
    changeRoom(id)
    if (!room) {
      changeSelect(selectId + 1)
    }
  }

  return (
    <div className={styles.roomsContainer}>
      <Text size='small'>Комнаты</Text>
      <ul className={styles.roomsListContainer}>
        {data.map((item) => (
          <button key={item.id} onClick={() => changeSelectRoom(item.id)}>
            <Text
              size='small'
              className={`${styles.roomCount} ${room === item.id && styles.roomSelected}`}
            >
              {item.count}
            </Text>
          </button>
        ))}
      </ul>
    </div>
  )
}
