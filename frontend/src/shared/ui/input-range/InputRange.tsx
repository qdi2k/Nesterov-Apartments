'use client'
import {Open_Sans} from 'next/font/google'
import styles from './InputRange.module.css'
import {ChangeEvent, useEffect} from 'react'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export interface IInputRangeProps {
  tooltipId?: string
  inputId?: string
  maxValue: number
  minValue: number
  step: number
  value: string
  formatedValue?: string
  valueMark: string
  changeValue: (event: string) => void
  className?: string
}

export function InputRange({
  tooltipId = 'tooltip',
  inputId = 'inputRange',
  maxValue = 100,
  minValue = 1,
  step = 1,
  value = '30',
  formatedValue,
  valueMark,
  changeValue,
  className,
}: IInputRangeProps) {
  const changeWidth = (event: ChangeEvent<HTMLInputElement>) => {
    changeValue(event.target.value)
  }

  useEffect(() => {
    const range = document.getElementById(inputId) as HTMLInputElement
    const tooltip = document.getElementById(tooltipId) as HTMLDivElement
    const thumbSize = 8
    const ratio =
      (Number(range.value) - Number(range.min)) /
      (Number(range.max) - Number(range.min))
    const amountToMove = ratio * (range.offsetWidth - thumbSize - thumbSize) - 6
    tooltip.style.left = amountToMove + 'px'
  }, [value])

  return (
    <div className={`${styles.inputContainer} ${className}`}>
      <span
        id={tooltipId}
        className={`${openSans.className} ${styles.textRange}`}
      >
        {formatedValue} {valueMark}
      </span>
      <div className={styles.inputBackgroundLeft} />
      <div className={styles.inputVerticalLineLeft} />
      <input
        type='range'
        id={inputId}
        min={minValue}
        max={maxValue}
        step={step}
        value={value}
        onChange={changeWidth}
      />
      <div className={styles.inputLine} />
      <div className={styles.inputVerticalLineRight} />
      <div className={styles.inputBackgroundRight} />
    </div>
  )
}
