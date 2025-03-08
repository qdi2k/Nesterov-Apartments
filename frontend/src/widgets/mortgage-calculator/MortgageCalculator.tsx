'use client'

import {Title, Text, InputRange} from '@/shared/ui'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './MortgageCalculator.module.css'
import {useState} from 'react'

export function MortgageCalculator() {
  const [value1, setValue1] = useState(10000000)
  const [value2, setValue2] = useState(2000000)
  const [value3, setValue3] = useState(15)
  const [value4, setValue4] = useState(13)

  const creditAmount = value1 - value2
  const monthlyRate = value4 / 100 / 12
  const payments = value3 * 12

  const monthlyPayment =
    (creditAmount * (monthlyRate * (1 + monthlyRate) ** payments)) /
    ((1 + monthlyRate) ** payments - 1)

  const totalCreditAmount = monthlyPayment * payments

  const formattedCreditAmount = String(Math.floor(value1) - Math.floor(value2))
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  const formattedTotalCreditAmount = String(Math.floor(totalCreditAmount))
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  const formattedMonthlyPayment = String(Math.floor(monthlyPayment))
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  const firstPayment = String(Math.floor(value2))
    .replace(/[^0-9]/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  return (
    <section className={`${styles.container} ${themeStyles.container}`}>
      <Title>Рассчитайте ипотеку</Title>
      <div className={styles.content}>
        <div className={styles.inputsContainer}>
          <InputRange
            title='Стоимость ипотеки'
            value={value1}
            changeValue={setValue1}
            min={1000000}
            max={100000000}
            step={1000}
          />
          <InputRange
            title='Первоначальный взнос'
            value={value2}
            changeValue={setValue2}
            min={100000}
            max={50000000}
            step={1000}
          />
          <div className={styles.multiInputContainer}>
            <InputRange
              title='Период ипотеки'
              value={value3}
              changeValue={setValue3}
              min={5}
              max={40}
              step={1}
            />
            <InputRange
              title='Процентная ставка'
              value={value4}
              changeValue={setValue4}
              min={4}
              max={50}
              step={1}
            />
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.columnContainer}>
            <div className={styles.infoText}>
              <Text className={styles.active} weight='bold' size='sMedium'>
                {formattedMonthlyPayment} ₽
              </Text>
              <Text color='grey'>Ежемесячный платёж</Text>
            </div>
            <div className={styles.infoText}>
              <Text color='white' weight='semiBold' size='sMedium'>
                {value4} %
              </Text>
              <Text color='grey'>Процентная ставка</Text>
            </div>
            <div className={styles.infoText}>
              <Text color='white' weight='semiBold' size='sMedium'>
                {value3} лет
              </Text>
              <Text color='grey'>Период ипотеки</Text>
            </div>
          </div>
          <div className={styles.columnContainer}>
            <div className={styles.infoText}>
              <Text color='white' weight='semiBold' size='sMedium'>
                {formattedTotalCreditAmount} ₽
              </Text>
              <Text color='grey'>Общая выплата</Text>
            </div>
            <div className={styles.infoText}>
              <Text color='white' weight='semiBold' size='sMedium'>
                {formattedCreditAmount} ₽
              </Text>
              <Text color='grey'>Сумма ипотеки</Text>
            </div>
            <div className={styles.infoText}>
              <Text color='white' weight='semiBold' size='sMedium'>
                {firstPayment} ₽
              </Text>
              <Text color='grey'>Первоначальный взнос</Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
