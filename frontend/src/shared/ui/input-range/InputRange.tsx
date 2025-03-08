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
  title,
  step,
  max,
  min,
  value,
  changeValue,
}: IInputRangeProps) {
  const [stringValue, setStringValue] = useState(
    value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  )
  const controlPos = ((value - min) / (max - min)) * 100

  const formatNumber = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  const parseNumber = (formattedValue: any) => {
    console.log(typeof formattedValue)
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

  return (
    <div className={styles.container}>
      <Text color='blueLight'>{title}</Text>
      <input
        className={`${styles.inputFiled} ${openSans.className}`}
        value={stringValue}
        onChange={handleChangeInputValue}
        min={min}
        max={max}
      />
      <div className={styles.inputContainer}>
        <input
          className={styles.inputRange}
          style={{marginLeft: -8 - controlPos * -0.16}}
          type='range'
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={handleChangeRangeValue}
        />
        <div className={styles.controlContainer}>
          <div className={styles.inputVerticalLineLeft} />
          <div className={styles.control} style={{left: `${controlPos}%`}} />
          <div className={styles.rail} />
          <div className={styles.inputVerticalLineRight} />
        </div>
      </div>
    </div>
  )
}
