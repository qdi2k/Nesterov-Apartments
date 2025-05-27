'use client'

import {InputRange, InputSelect, Text} from '@/shared/ui'
import styles from './Filter.module.css'
import {SelectRoom, ToggleSwitch} from './ui'
import {useState} from 'react'

const MOCK_PROJECT_SORT = [
  {id: 1, title: 'Shagal'},
  {id: 2, title: 'Mariinn'},
  {id: 3, title: 'Rauta'},
  {id: 4, title: 'Voxhall'},
]

const MOCK_DATE_SORT = [
  {id: 1, title: 'Сдан'},
  {id: 2, title: 'I квартал 2025'},
  {id: 3, title: 'II квартал 2025'},
  {id: 4, title: 'III квартал 2025'},
  {id: 5, title: 'IV квартал 2025'},
  {id: 6, title: 'I квартал 2026'},
  {id: 7, title: 'II квартал 2026'},
  {id: 8, title: 'III квартал 2026'},
  {id: 9, title: 'IV квартал 2026'},
]

const MOCK_SORT = [
  {id: 1, title: 'Сначала дешевле'},
  {id: 2, title: 'Сначала дороже'},
  {id: 3, title: 'Сначала меньше площадь'},
  {id: 4, title: 'Сначала больше площадь'},
]

export function Filter() {
  const [value1, setValue1] = useState({min: 10000000, max: 100000000})
  const [value2, setValue2] = useState({min: 50, max: 200})
  const [value3, setValue3] = useState({min: 10, max: 30})

  return (
    <div className={styles.container}>
      <div className={styles.filtersContainer}>
        <SelectRoom />
        <div className={styles.test2}>
          <Text color='blueLight'>Проект</Text>
          <InputSelect
            sortItems={MOCK_PROJECT_SORT}
            placeHolder='Выберите проект'
            isCheck
          />
        </div>
        <div className={styles.test2}>
          <Text color='blueLight'>Срок сдачи</Text>
          <InputSelect
            sortItems={MOCK_DATE_SORT}
            placeHolder='Выберите срок сдачи'
            isCheck
          />
        </div>
      </div>
      <div className={styles.test}>
        <div>
          <Text color='blueLight'>Стоимость</Text>
          <InputRange
            className={styles.range}
            value={value1}
            changeValue={setValue1}
            min={0}
            max={100000000}
            step={1000000}
            isMultiRange
          />
        </div>
        <div>
          <Text color='blueLight'>Площадь</Text>
          <InputRange
            className={styles.range}
            value={value2}
            changeValue={setValue2}
            min={0}
            max={200}
            step={1}
            isMultiRange
          />
        </div>
        <div>
          <Text color='blueLight'>Этаж</Text>
          <InputRange
            className={styles.range}
            value={value3}
            changeValue={setValue3}
            min={0}
            max={30}
            step={1}
            isMultiRange
          />
        </div>
      </div>
      <div className={styles.sortContainer}>
        <Text color='blueLight' className={styles.sortTitle}>
          Сортировать
        </Text>
        <div className={styles.test5}>
          <div className={styles.test4}>
            <div className={styles.test3}>
              <InputSelect sortItems={MOCK_SORT} />
            </div>
            <div className={styles.toogles}>
              <div className={styles.toogle}>
                <ToggleSwitch />
                <Text color='grey' className={styles.resetButton}>
                  Не показывать забронированные
                </Text>
              </div>
              <div className={styles.toogle}>
                <ToggleSwitch />
                <Text color='grey' className={styles.resetButton}>
                  Группировать по объектам
                </Text>
              </div>
            </div>
          </div>
          <Text weight='medium' className={styles.resetButton}>
            Сбросить фильтры
          </Text>
        </div>
      </div>
    </div>
  )
}
