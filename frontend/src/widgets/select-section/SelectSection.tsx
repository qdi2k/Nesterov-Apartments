'use client'

import {Select, Text} from '@/shared/ui'
import styles from './SelectSection.module.css'
import {useState} from 'react'
import {InputRangeFilter, Rooms} from './ui'

interface ISelectSectionProps {
  activeSelect: number
  changeSelect: (select: number) => void
}

const dataSection = [
  {id: 1, value: 'Секция 1'},
  {id: 2, value: 'Секция 2'},
  {id: 3, value: 'Секция 3'},
  {id: 4, value: 'Секция 4'},
]

const dataFloor = [
  {id: 1, value: 'Этаж 1'},
  {id: 2, value: 'Этаж 2'},
  {id: 3, value: 'Этаж 3'},
  {id: 4, value: 'Этаж 4'},
  {id: 5, value: 'Этаж 5'},
  {id: 6, value: 'Этаж 6'},
  {id: 7, value: 'Этаж 7'},
  {id: 8, value: 'Этаж 8'},
]

export function SelectSection({
  activeSelect,
  changeSelect,
}: ISelectSectionProps) {
  const [value1, setValue1] = useState({min: 0, max: 100})
  const [value2, setValue2] = useState({min: 0, max: 10000})

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
          setSection={changeSelect}
          selectId={activeSelect}
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
            setSection={changeSelect}
            selectId={activeSelect}
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
          <Rooms setSection={changeSelect} selectId={activeSelect} />
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
              value={value1}
              changeValue={setValue1}
              max={100}
              min={0}
              step={1}
            />
            <InputRangeFilter
              title='Стоимость, тыс.р.'
              value={value2}
              changeValue={setValue2}
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
