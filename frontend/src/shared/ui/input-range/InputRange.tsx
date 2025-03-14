'use client'

import {Open_Sans} from 'next/font/google'
import styles from './InputRange.module.css'
import {Text} from '../text'
import {useState} from 'react'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export interface IInputRangeProps {
  title: string
  max: number
  min: number
  step: number
  value: number
  formatedValue?: string
  changeValue: (event: number) => void
}

export function InputRange({
  className,
  isSeveral,
  title,
  step,
  max,
  min,
  value,
  secondValue,
  changeValue,
  changeSecondValue,
}: IInputRangeProps) {
  const [stringValue, setStringValue] = useState(
    value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  )
  const [secondStringValue, setSecondStringValue] = useState(
    secondValue?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  )
  const controlPos = ((value - min) / (max - min)) * 100
  const severalControlPos =
    ((value - min) / (secondValue - 5000000 - min)) * 100
  const maxPos = ((secondValue - min) / (max - min)) * 100

  const formatNumber = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  const parseNumber = (formattedValue: any) => {
    return formattedValue.replace(/\s/g, '')
  }

  const handleChangeRangeValue = (event: {
    target: {value: string | number}
  }) => {
    const inputValue = event.target.value
    const parsedValue = parseNumber(inputValue)
    const formattedValue = formatNumber(parsedValue)
    changeValue(event.target.value)
    setStringValue(formattedValue)
  }

  const handleChangeRangeValue2 = (event: {
    target: {value: string | number}
  }) => {
    const inputValue = event.target.value
    const parsedValue = parseNumber(inputValue)
    const formattedValue = formatNumber(parsedValue)
    changeSecondValue(event.target.value)
    setSecondStringValue(formattedValue)
  }

  const handleChangeInputValue = (event: {
    target: {value: string | number}
  }) => {
    const inputValue = event.target.value.toString().replace(/\D/g, '')
    const numberValue = parseNumber(inputValue)
    const formattedValue = formatNumber(numberValue)

    if (numberValue < min) {
      const formattedValue2 = formatNumber(min)
      changeValue(min)
      setStringValue(formattedValue2)
      return
    }

    if (numberValue > max) {
      const formattedValue2 = formatNumber(max)
      changeValue(max)
      setStringValue(formattedValue2)
      return
    }
    changeValue(numberValue)
    setStringValue(formattedValue)
  }

  const handleChangeInputValue2 = (event: {
    target: {value: string | number}
  }) => {
    const inputValue = event.target.value.toString().replace(/\D/g, '')
    const numberValue = parseNumber(inputValue)
    const formattedValue = formatNumber(numberValue)

    if (numberValue < min) {
      const formattedValue2 = formatNumber(min)
      changeSecondValue(event.target.value)
      setSecondStringValue(formattedValue2)
      return
    }

    if (numberValue > max) {
      const formattedValue2 = formatNumber(max)
      changeSecondValue(event.target.value)
      setSecondStringValue(formattedValue2)
      return
    }
    changeSecondValue(numberValue)
    setSecondStringValue(formattedValue)
  }

  return (
    <div className={styles.container}>
      <Text color='blueLight'>{title}</Text>
      <div className={styles.inputs}>
        <input
          className={`${styles.inputFiled} ${isSeveral && styles.firstInput} ${openSans.className} ${className}`}
          value={stringValue}
          onChange={handleChangeInputValue}
          min={min}
          max={isSeveral ? secondValue - 1000000 : max}
        />
        {isSeveral && (
          <>
            <div className={styles.test}>
              <div className={styles.line} />
            </div>
            <input
              className={`${styles.inputFiled} ${styles.secondInput} ${openSans.className} ${className}`}
              value={secondStringValue}
              onChange={handleChangeInputValue2}
              min={min}
              max={max}
            />
          </>
        )}
      </div>
      <div className={styles.inputContainer}>
        <input
          className={styles.inputRange}
          style={{marginLeft: -8 - controlPos * -0.16}}
          type='range'
          value={value}
          min={min}
          max={isSeveral ? secondValue - 5000000 : max}
          step={step}
          onChange={handleChangeRangeValue}
        />
        {isSeveral && (
          <input
            className={styles.inputRange}
            style={{marginLeft: -8 - maxPos * -0.16}}
            type='range'
            value={secondValue}
            min={min}
            max={max}
            step={step}
            onChange={handleChangeRangeValue2}
          />
        )}
        <div className={styles.controlContainer}>
          <div className={styles.control} style={{left: `${controlPos}%`}} />
          <div
            className={styles.activeRail}
            style={{width: `${controlPos}%`}}
          />
          <div className={styles.rail} />
          {isSeveral && (
            <div className={styles.control} style={{left: `${maxPos}%`}} />
          )}
        </div>
      </div>
    </div>
  )
}
