import {Select, Text} from '@/shared/ui'
import styles from './SelectSection.module.css'
import {InputRangeFilter, Rooms} from './ui'

type Section = {
  id: number
  value: number
}

type Floor = {
  id: number
  value: number
}

type Square = {
  min: number
  max: number
}

type Price = {
  min: number
  max: number
}

interface ISelectSectionProps {
  activeSelect: number
  changeSelect: (select: number) => void
  dataSection: Section[]
  dataFloor: Floor[]
  section: number | null
  changeSection: (section: number) => void
  floor: number | null
  changeFloor: (floor: number) => void
  room: number | null
  changeRoom: (room: number) => void
  square: Square
  changeSquare: (square: Square) => void
  price: Price
  changePrice: (price: Price) => void
}

export function SelectSection({
  activeSelect,
  changeSelect,
  dataSection,
  dataFloor,
  section,
  changeSection,
  floor,
  changeFloor,
  room,
  changeRoom,
  square,
  changeSquare,
  price,
  changePrice,
}: ISelectSectionProps) {
  return (
    <ul className={styles.container}>
      <li className={styles.contentContainer}>
        <Text
          size='xMedium'
          weight='light'
          color={activeSelect === 1 ? 'brown' : 'grey'}
          isUppercase
        >
          Выбор секции
        </Text>
        <Select
          data={dataSection}
          placeholder='Секция'
          changeSelect={changeSelect}
          selectId={activeSelect}
          value={section}
          changeValue={changeSection}
        />
      </li>
      <li className={styles.contentContainer}>
        <Text
          size='xMedium'
          weight='light'
          color={activeSelect === 2 ? 'brown' : 'grey'}
          isUppercase
        >
          Выбор этажа
        </Text>
        {activeSelect >= 2 && (
          <Select
            data={dataFloor}
            placeholder='Этаж'
            changeSelect={changeSelect}
            selectId={activeSelect}
            value={floor}
            changeValue={changeFloor}
          />
        )}
      </li>
      <li className={`${styles.contentContainer} ${styles.contentItem}`}>
        <Text
          size='xMedium'
          weight='light'
          color={activeSelect === 3 ? 'brown' : 'grey'}
          isUppercase
        >
          Выбор квартиры на этаже
        </Text>
        {activeSelect >= 3 && (
          <Rooms
            room={room}
            changeRoom={changeRoom}
            changeSelect={changeSelect}
            selectId={activeSelect}
          />
        )}
      </li>
      <li className={`${styles.contentContainer} ${styles.lastContentItem}`}>
        <Text
          size='xMedium'
          weight='light'
          color={activeSelect === 4 ? 'brown' : 'grey'}
          isUppercase
          className={styles.lastContentTitle}
        >
          Подбор квартиры
        </Text>
        {activeSelect >= 4 && (
          <div className={styles.inputRangeFilterWrapper}>
            <InputRangeFilter
              title='Площадь, кв.м.'
              value={square}
              changeValue={changeSquare}
              max={100}
              min={0}
              step={1}
            />
            <InputRangeFilter
              title='Стоимость, тыс.р.'
              value={price}
              changeValue={changePrice}
              max={10000}
              min={0}
              step={100}
            />
          </div>
        )}
      </li>
    </ul>
  )
}
