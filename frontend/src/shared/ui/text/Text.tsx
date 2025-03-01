'use client'

import {ReactNode} from 'react'
import {Open_Sans} from 'next/font/google'
import {
  theme,
  type FontSizes,
  type FontWeights,
  type FontColors,
} from '@/shared/model'
import themeStyles from '@/shared/model/styles/theme.module.css'
import {motion, type Variants} from 'framer-motion'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

interface ITextProps {
  children: ReactNode
  className?: string
  size?: FontSizes
  weight?: FontWeights
  color?: FontColors
  isUppercase?: boolean
  isHover?: boolean
  animation?: Variants
  initialAnimation?: any
  animate?: any
  exit?: any
}

export function Text({
  children,
  className,
  size = 'small',
  weight = 'regular',
  color = 'greyDark',
  isUppercase,
  isHover,
  initialAnimation,
  animation,
  animate,
  exit,
}: ITextProps) {
  return (
    <motion.p
      className={`
        ${openSans.className}
        ${isHover && themeStyles.textHover}
        ${isUppercase && themeStyles.uppercase}
        ${theme.font.size?.[size]}
        ${theme.font.weight?.[weight]}
        ${theme.font.colors?.[color]}
        ${className}
      `}
      initial={initialAnimation}
      animate={animate}
      exit={exit}
      variants={animation}
    >
      {children}
    </motion.p>
  )
}
