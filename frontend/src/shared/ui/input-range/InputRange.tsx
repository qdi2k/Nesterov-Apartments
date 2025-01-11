'use client'
import {Open_Sans} from 'next/font/google'
import styles from './InputRange.module.css'
import {useEffect, useState} from 'react'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

type Value = {
  min: number
  max: number
}

export interface IInputRangeProps {
  tooltipId?: string
  inputId?: string
  max: number
  min: number
  step: number
  value: Value
  formatedValue?: string
  valueMark?: string
  changeValue: (event: Value) => void
  isMultiRange?: boolean
}

export function InputRange({
  step,
  max,
  min,
  value,
  formatedValue,
  valueMark,
  changeValue,
  isMultiRange,
}: IInputRangeProps) {
  const [minValue, setMinValue] = useState(value ? value.min : min)
  const [maxValue, setMaxValue] = useState(value ? value.max : max)

  const minPos = ((minValue - min) / (max - min)) * 100
  const maxPos = ((maxValue - min) / (max - min)) * 100

  const handleMinChange = (event: {
    preventDefault: () => void
    target: {value: string | number}
  }) => {
    event.preventDefault()
    const newMinVal = Math.min(
      +event.target.value,
      maxValue - (isMultiRange ? step : 0)
    )
    if (!value) setMinValue(newMinVal)
    changeValue({min: newMinVal, max: maxValue})
  }

  const handleMaxChange = (event: {
    preventDefault: () => void
    target: {value: string | number}
  }) => {
    event.preventDefault()
    const newMaxVal = Math.max(+event.target.value, minValue + step)
    if (!value) setMaxValue(newMaxVal)
    changeValue({min: minValue, max: newMaxVal})
  }

  useEffect(() => {
    if (value) {
      setMinValue(value.min)
      setMaxValue(value.max)
    }
  }, [value])

  return (
    <div className={styles.container}>
      <span
        className={`${openSans.className} ${styles.textRange}`}
        style={{left: `${minPos - 1}%`}}
      >
        {formatedValue} {valueMark}
      </span>

      {isMultiRange && (
        <span
          className={`${openSans.className} ${styles.textRange}`}
          style={{left: `${maxPos}%`}}
        >
          {value.max} {valueMark}
        </span>
      )}

      <input
        className={styles.input}
        type='range'
        value={minValue}
        min={min}
        max={max}
        step={step}
        onChange={handleMinChange}
      />
      {isMultiRange && (
        <input
          className={styles.input}
          type='range'
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
        />
      )}

      <div className={styles.controlContainer}>
        <div className={styles.inputVerticalLineLeft} />
        <div className={styles.control} style={{left: `${minPos}%`}} />
        <div className={styles.rail}>
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
        <div className={styles.inputVerticalLineRight} />
      </div>
    </div>
  )
}
