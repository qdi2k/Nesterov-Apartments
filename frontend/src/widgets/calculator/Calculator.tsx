'use client'

import {InputRangeForm} from '@/entities/inputRangeForm'
import styles from './Calculator.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {Text, Title} from '@/shared/ui'
import {useState} from 'react'

export function Calculator() {
  const [value1, setValue1] = useState('3906000')
  const [value2, setValue2] = useState('15')
  const [value3, setValue3] = useState('945000')
  const [value4, setValue4] = useState('9')

  const creditAmount = Number(value1) - Number(value3)
  const monthlyRate = Number(value4) / 100 / 12
  const payments = Number(value2) * 12

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

  return (
    <div className={`${styles.container} ${themeStyles.container}`}>
      <Title>Калькулятор Ипотеки</Title>
      <div className={styles.inputContainer}>
        <InputRangeForm
          nameForm='Стоимость недвижимости'
          maxValue={20000000}
          minValue={1000000}
          step={1000}
          value={value1}
          valueMark='₽'
          changeValue={setValue1}
          tooltipId='tooltipId1'
          inputId='inputRange1'
        />
        <InputRangeForm
          nameForm='Срок ипотеки'
          maxValue={40}
          minValue={1}
          step={1}
          value={value2}
          valueMark='Лет'
          changeValue={setValue2}
          tooltipId='tooltipId2'
          inputId='inputRange2'
        />
      </div>
      <div className={styles.inputContainer}>
        <InputRangeForm
          nameForm='Первоначальный взнос'
          maxValue={4000000}
          minValue={1000}
          step={1000}
          value={value3}
          valueMark='₽'
          changeValue={setValue3}
          tooltipId='tooltipId3'
          inputId='inputRange3'
        />
        <InputRangeForm
          nameForm='Процентная ставка'
          maxValue={40}
          minValue={1}
          step={1}
          value={value4}
          valueMark='%'
          valueText='Годовых'
          changeValue={setValue4}
          tooltipId='tooltipId4'
          inputId='inputRange4'
        />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.textContainer}>
          <Text size='xMedium' weight='light' color='brown' isUppercase>
            Сумма кредита
          </Text>
          <Text
            weight='bold'
            color='brown'
            className={`${styles.value} ${styles.value}`}
          >
            {formattedTotalCreditAmount} {'₽'}
          </Text>
        </div>
        <div className={styles.textContainer}>
          <Text size='xMedium' weight='light' color='brown' isUppercase>
            Ежемесячный платеж
          </Text>
          <Text
            weight='bold'
            color='brown'
            className={`${styles.value} ${styles.value}`}
          >
            {formattedMonthlyPayment} {'₽'}
          </Text>
        </div>
        <div className={styles.textContainer}>
          <Text size='xMedium' weight='light' color='brown' isUppercase>
            Процентная ставка
          </Text>
          <Text
            weight='bold'
            color='brown'
            className={`${styles.value} ${styles.value}`}
          >
            {value4} %
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
