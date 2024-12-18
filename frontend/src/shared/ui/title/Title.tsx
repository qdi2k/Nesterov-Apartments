import {ReactNode} from 'react'
import localFont from 'next/font/local'
import styles from './Title.module.css'
import {theme} from '@/shared/model'

const helio = localFont({
  src: './../../assets/fonts/heliosextthin.otf',
  weight: '400',
})

interface ITitleProps {
  children: ReactNode
  className?: string
}

export function Title({children, className}: ITitleProps) {
  return (
    <h2
      className={`
        ${helio.className}
        ${styles.title}
        ${theme.font.size.large}
        ${theme.font.weight.regular}
        ${theme.font.colors.brown}
        ${className}
      `}
    >
      {children}
    </h2>
  )
}
