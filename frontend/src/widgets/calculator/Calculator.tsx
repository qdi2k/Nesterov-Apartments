'use client'

import {InputRangeForm} from '@/entities/inputRangeForm'
import styles from './Calculator.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {Text, Title} from '@/shared/ui'
import {useEffect, useState} from 'react'
import {useSearchParams} from 'next/navigation'

const minValue1 = 3906000
const minValue2 = 15
const minValue3 = 945000
const minValue4 = 9

const maxValue1 = 20000000
const maxValue2 = 40
const maxValue3 = 4000000
const maxValue4 = 40

export function Calculator() {
  const [value1, setValue1] = useState({min: minValue1, max: maxValue1})
  const [value2, setValue2] = useState({min: minValue2, max: maxValue2})
  const [value3, setValue3] = useState({min: minValue3, max: maxValue3})
  const [value4, setValue4] = useState({min: minValue4, max: maxValue4})

  const searchParams = useSearchParams() ?? new URLSearchParams()
  const section = searchParams.get('section')

  const creditAmount = value1.min - value3.min
  const monthlyRate = value4.min / 100 / 12
  const payments = value2.min * 12

  const monthlyPayment =
    (creditAmount * (monthlyRate * (1 + monthlyRate) ** payments)) /
    ((1 + monthlyRate) ** payments - 1)

  const totalCreditAmount = monthlyPayment * payments

  const formattedTotalCreditAmount = String(Math.floor(totalCreditAmount))
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  const formattedMonthlyPayment = String(Math.floor(monthlyPayment))
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({behavior: 'smooth'})
        window.history.replaceState(null, '', window.location.pathname)
      }
    }
  }, [section])

  return (
    <div
      className={`${styles.container} ${themeStyles.container}`}
      id='calculator'
    >
      <Title>Калькулятор Ипотеки</Title>
      <div className={styles.inputContainer}>
        <InputRangeForm
          nameForm='Стоимость недвижимости'
          max={maxValue1}
          min={1000000}
          step={1000}
          value={value1}
          valueMark='₽'
          changeValue={setValue1}
        />
        <InputRangeForm
          nameForm='Период ипотеки'
          max={maxValue2}
          min={1}
          step={1}
          value={value2}
          valueMark='Лет'
          changeValue={setValue2}
        />
      </div>
      <div className={styles.inputContainer}>
        <InputRangeForm
          nameForm='Первоначальный взнос'
          max={maxValue3}
          min={100000}
          step={1000}
          value={value3}
          valueMark='₽'
          changeValue={setValue3}
        />
        <InputRangeForm
          nameForm='Процентная ставка'
          max={maxValue4}
          min={1}
          step={1}
          value={value4}
          valueMark='%'
          valueText='Годовых'
          changeValue={setValue4}
        />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.textContainer}>
          <Text
            size='sMedium'
            weight='light'
            color='brown'
            isUppercase
            className={styles.text}
          >
            Сумма кредита
          </Text>
          <Text weight='bold' color='brown' className={styles.value}>
            {formattedTotalCreditAmount} {'₽'}
          </Text>
        </div>
        <div className={styles.textContainer}>
          <Text
            size='sMedium'
            weight='light'
            color='brown'
            isUppercase
            className={styles.text}
          >
            Ежемесячный платеж
          </Text>
          <Text weight='bold' color='brown' className={styles.value}>
            {formattedMonthlyPayment} {'₽'}
          </Text>
        </div>
        <div className={styles.textContainer}>
          <Text
            size='sMedium'
            weight='light'
            color='brown'
            isUppercase
            className={styles.text}
          >
            Процентная ставка
          </Text>
          <Text weight='bold' color='brown' className={styles.value}>
            {value4.min} %
          </Text>
        </div>
      </div>
      <Text weight='light' color='grey' className={styles.public}>
        Расчет параметров кредита является предварительным, не является
        публичной офертой
      </Text>
    </div>
  )
}
