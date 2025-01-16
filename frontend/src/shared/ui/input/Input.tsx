import {Open_Sans} from 'next/font/google'
import {Divider} from '@/shared/ui'
import styles from './Input.module.css'
import {ChangeEvent} from 'react'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

interface IInputProps {
  value?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  dividerClassName?: string
  inputClassName?: string
}

export function Input({
  value,
  onChange,
  placeholder,
  dividerClassName,
  inputClassName,
}: IInputProps) {
  return (
    <div className={styles.field}>
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${openSans.className} ${styles.input} ${inputClassName}`}
      />
      <Divider className={dividerClassName} />
    </div>
  )
}
