'use client'
import {Open_Sans} from 'next/font/google'
import styles from './InputRange.module.css'
import {ChangeEvent, useEffect, useState} from 'react'
import {Text} from '../text'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

type Value = {
  min: number
  max: number
}

export interface IInputRangeProps {
  title?: string
  value: Value
  error?: boolean
  changeValue: (event: Value) => void
  max: number
  min: number
  step: number
  isMultiRange?: boolean
  className?: string
}

const formatNumber = (number: number | string): string => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

const parseNumber = (formattedValue: string): number => {
  return parseInt(formattedValue.replace(/\s/g, ''), 10)
}

export function InputRange({
  title,
  value,
  error,
  changeValue,
  step,
  max,
  min,
  isMultiRange,
  className,
}: IInputRangeProps) {
  const [stringValue, setStringValue] = useState(
    value.min?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  )
  const [secondStringValue, setSecondStringValue] = useState(
    value.max?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  )

  const [minValue, setMinValue] = useState(value ? value.min : min)
  const [maxValue, setMaxValue] = useState(value ? value.max : max)

  const minPos = ((minValue - min) / (max - min)) * 100
  const maxPos = ((maxValue - min) / (max - min)) * 100

  const handleChangeRangeMinValue = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const newMinVal = Math.min(
      +event.target.value,
      maxValue - (isMultiRange ? step * 10 : 0)
    )
    const formattedValue = formatNumber(newMinVal.toString())
    if (!value) setMinValue(newMinVal)
    setStringValue(formattedValue)
    changeValue({min: newMinVal, max: maxValue})
  }

  const handleChangeRangeMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const newMaxVal = Math.max(+event.target.value, minValue + step * 10)
    const formattedValue = formatNumber(newMaxVal.toString())
    if (!value) setMaxValue(newMaxVal)
    setSecondStringValue(formattedValue)
    changeValue({min: minValue, max: newMaxVal})
  }

  const handleChangeInputMinValue = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toString().replace(/\D/g, '')
    const numberValue = parseNumber(inputValue)

    const formattedValue = formatNumber(numberValue)

    const current = !isNaN(numberValue) ? numberValue : 0
    const currentString = !isNaN(numberValue) ? formattedValue : ''

    if (numberValue < min) {
      changeValue({min: min, max: maxValue})
      setStringValue(formatNumber(min))
      return
    }

    if (numberValue > max) {
      changeValue({min: max, max: maxValue})
      setStringValue(formatNumber(max))
      return
    }

    changeValue({min: current, max: maxValue})
    setStringValue(currentString)
  }

  const handleChangeInputMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toString().replace(/\D/g, '')
    const numberValue = parseNumber(inputValue)
    const formattedValue = formatNumber(numberValue)

    if (numberValue < min) {
      changeValue({min: min, max: maxValue})
      setSecondStringValue(formatNumber(min))
      return
    }

    if (numberValue > max) {
      changeValue({min: max, max: maxValue})
      setSecondStringValue(formatNumber(max))
      return
    }
    changeValue({min: minValue, max: numberValue})
    setSecondStringValue(formattedValue)
  }

  useEffect(() => {
    if (value) {
      setMinValue(value.min)
      setMaxValue(value.max)
    }
  }, [value])

  const getFieldError = () => {
    if (!minValue && !isMultiRange) {
      return 'Заполните поле'
    }

    if (error) {
      return 'Первоначальный взнос должен быть меньше стоимости недвижимости'
    }
    return null
  }

  return (
    <div className={styles.container}>
      <Text color='blueLight'>{title}</Text>
      <div className={`${styles.inputs} ${getFieldError() && styles.error}`}>
        <input
          className={`${styles.inputFiled} ${isMultiRange && styles.firstInput} ${openSans.className} ${className}`}
          value={stringValue}
          onChange={handleChangeInputMinValue}
          min={min}
          max={max}
        />
        {isMultiRange && (
          <>
            <div className={styles.lineContainer}>
              <div className={styles.line} />
            </div>
            <input
              className={`${styles.inputFiled} ${styles.secondInput} ${openSans.className} ${className}`}
              value={secondStringValue}
              onChange={handleChangeInputMaxValue}
              min={min}
              max={max}
            />
          </>
        )}
      </div>
      <Text className={styles.errorText}>{getFieldError()}</Text>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          style={{marginLeft: -8 - minPos * -0.16}}
          type='range'
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleChangeRangeMinValue}
        />
        {isMultiRange && (
          <input
            className={styles.input}
            style={{marginLeft: -8 - maxPos * -0.16}}
            type='range'
            value={maxValue}
            min={min}
            max={max}
            step={step}
            onChange={handleChangeRangeMaxValue}
          />
        )}
        <div className={styles.controlContainer}>
          <div className={styles.control} style={{left: `${minPos}%`}} />
          <div className={styles.rail}>
            {!isMultiRange && (
              <div
                className={styles.innerRail}
                style={{left: `0`, right: `${100 - minPos}%`}}
              />
            )}
            {isMultiRange && (
              <div
                className={styles.innerRail}
                style={{left: `${minPos}%`, right: `${100 - maxPos}%`}}
              />
            )}
          </div>
          {isMultiRange && (
            <div className={styles.control} style={{left: `${maxPos}%`}} />
          )}
        </div>
      </div>
    </div>
  )
}
