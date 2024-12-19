import {Open_Sans} from 'next/font/google'
import {Divider} from '@/shared/ui'
import styles from './Input.module.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

interface IInputProps {
  placeholder?: string
}

export function Input({placeholder}: IInputProps) {
  return (
    <div className={styles.field}>
      <input
        type='text'
        placeholder={placeholder}
        className={`${openSans.className} ${styles.input}`}
      />
      <Divider />
    </div>
  )
}
