'use client'

import {ReactNode} from 'react'
import {Open_Sans} from 'next/font/google'
import {FontColors, theme} from '@/shared/model'
import styles from './Title.module.css'
import {motion, type Variants} from 'framer-motion'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})
interface ITitleProps {
  children: ReactNode
  className?: string
  color?: FontColors
  animation?: Variants
}

export function Title({
  children,
  className,
  color = 'greyDark',
  animation,
}: ITitleProps) {
  return (
    <motion.h2
      className={`
        ${openSans.className}
        ${theme.font.size.sLarge}
        ${theme.font.weight.bold}
        ${theme.font.colors?.[color]}
        ${styles.title}
        ${className}
      `}
      variants={animation}
    >
      {children}
    </motion.h2>
  )
}
