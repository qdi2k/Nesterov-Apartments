import {InputRangeForm} from '@/entities/inputRangeForm'
import styles from './Calculator.module.css'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {Text, Title} from '@/shared/ui'

// Оптимизация и рефакторинг

interface ICalculatorProps {
  title: string
  mortgage?: boolean
  maxValue1: number
  minValue1: number
  step1: number
  value1: string
  valueMark1: string
  changeValue1: (event: string) => void
  maxValue2: number
  minValue2: number
  step2: number
  value2: string
  valueMark2: string
  changeValue2: (event: string) => void
  maxValue3: number
  minValue3: number
  step3: number
  value3: string
  valueMark3: string
  changeValue3: (event: string) => void
  maxValue4: number
  minValue4: number
  step4: number
  value4: string
  valueMark4: string
  changeValue4: (event: string) => void
}

export function Calculator({
  title,
  mortgage,
  maxValue1,
  minValue1,
  step1,
  value1,
  valueMark1,
  changeValue1,
  maxValue2,
  minValue2,
  step2,
  value2,
  valueMark2,
  changeValue2,
  maxValue3,
  minValue3,
  step3,
  value3,
  valueMark3,
  changeValue3,
  maxValue4,
  minValue4,
  step4,
  value4,
  valueMark4,
  changeValue4,
}: ICalculatorProps) {
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
      <Title>{title}</Title>
      <div className={styles.inputContainer}>
        <InputRangeForm
          nameForm='Стоимость недвижимости'
          maxValue={maxValue1}
          minValue={minValue1}
          step={step1}
          value={value1}
          valueMark={valueMark1}
          changeValue={changeValue1}
          tooltipId='tooltipId1'
          inputId='inputRange1'
        />
        <InputRangeForm
          nameForm={mortgage ? 'Срок кредита' : 'Срок рассрочки'}
          maxValue={maxValue2}
          minValue={minValue2}
          step={step2}
          value={value2}
          valueMark={valueMark2}
          changeValue={changeValue2}
          tooltipId='tooltipId2'
          inputId='inputRange2'
        />
      </div>
      <div className={styles.inputContainer}>
        <InputRangeForm
          nameForm='Первоначальный взнос'
          maxValue={maxValue3}
          minValue={minValue3}
          step={step3}
          value={value3}
          valueMark={valueMark3}
          changeValue={changeValue3}
          tooltipId='tooltipId3'
          inputId='inputRange3'
        />
        <InputRangeForm
          nameForm='Процентная ставка'
          maxValue={maxValue4}
          minValue={minValue4}
          step={step4}
          value={value4}
          valueMark={valueMark4}
          changeValue={changeValue4}
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
            {value4} {valueMark4}
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
