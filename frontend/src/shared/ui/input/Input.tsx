'use client'

import {Open_Sans} from 'next/font/google'
import styles from './Input.module.css'
import {ChangeEvent} from 'react'
import {motion, type Variants} from 'framer-motion'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

interface IInputProps {
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  animation?: Variants
  classNameContainer?: string
  inputClassName?: string
}

export function Input({
  value,
  onChange,
  placeholder,
  animation,
  classNameContainer,
  inputClassName,
}: IInputProps) {
  return (
    <motion.div className={styles.container} variants={animation}>
      <div className={`${styles.field} ${classNameContainer}`}>
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${openSans.className} ${styles.input} ${inputClassName}`}
        />
      </div>
    </motion.div>
  )
}
