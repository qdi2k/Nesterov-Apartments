'use client'

import {Divider, InputRange, InputSelect, Text} from '@/shared/ui'
import styles from './Filter.module.css'
import {SelectRoom, ToggleSwitch} from './ui'
import {useState} from 'react'
import {InputRange2} from '@/shared/ui/input-range2/InputRange2'

const minValue1 = 3906000
const maxValue1 = 20000000

export function Filter() {
  const [value1, setValue1] = useState(10000000)
  const [value2, setValue2] = useState(40000000)

  const [value3, setValue3] = useState(10000000)
  const [value4, setValue4] = useState(40000000)

  const [value5, setValue5] = useState(10000000)
  const [value6, setValue6] = useState(40000000)

  const [value10, setValue10] = useState({min: minValue1, max: maxValue1})
  return (
    <div className={styles.container}>
      <div className={styles.filtersContainer}>
        <SelectRoom />
        <div>
          <Text color='blueLight'>Проект</Text>
          <InputSelect />
        </div>
        <div>
          <Text color='blueLight'>Срок сдачи</Text>
          <InputSelect />
        </div>
        <div>
          <Text color='blueLight'>Стоимость</Text>
          <InputRange
            className={styles.range}
            isSeveral
            value={value1}
            secondValue={value2}
            changeValue={setValue1}
            changeSecondValue={setValue2}
            min={1000000}
            max={100000000}
            step={1000}
          />
        </div>
        <div>
          <Text color='blueLight'>Площадь</Text>
          <InputRange
            className={styles.range}
            isSeveral
            value={value3}
            secondValue={value4}
            changeValue={setValue3}
            changeSecondValue={setValue4}
            min={1000000}
            max={100000000}
            step={1000}
          />
        </div>
        <InputRange2
          max={maxValue1}
          min={1000000}
          step={1000}
          value={value1}
          valueMark='%'
          valueText='Годовых'
          changeValue={setValue4}
        />
        {/* <div>
          <Text color='blueLight'>Этаж</Text>
          <InputRange
            className={styles.range}
            isSeveral
            value={value5}
            secondValue={value6}
            changeValue={setValue5}
            changeSecondValue={setValue6}
            min={1000000}
            max={100000000}
            step={1000}
          />
        </div> */}
      </div>
      {/* <Divider /> */}
      <div className={styles.sortsContainer}>
        <Text color='blueLight' className={styles.sortTitle}>
          Сортировать
        </Text>
        <div className={styles.sortContainer}>
          <div className={styles.toogles}>
            <div className={styles.toogle}>
              <ToggleSwitch />
              <Text color='grey'>Не показывать забронированные</Text>
            </div>
            <div className={styles.toogle}>
              <ToggleSwitch />
              <Text color='grey'>Группировать по объектам</Text>
            </div>
          </div>
          <Text weight='medium'>Сбросить фильтры</Text>
        </div>
      </div>
    </div>
  )
}
