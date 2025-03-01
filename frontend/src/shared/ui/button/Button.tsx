'use client'

import {ReactNode} from 'react'
import {Icon, Text} from '@/shared/ui'
import {type FontColors} from '@/shared/model'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './Button.module.css'
import Link from 'next/link'
import {Url} from 'next/dist/shared/lib/router/router'
import {motion, type Variants} from 'framer-motion'

interface IButtonProps {
  onClick?: () => void
  children: ReactNode
  textColor?: FontColors
  textStyle?: string
  isArrow?: boolean
  className?: string
  href?: Url
  animation?: Variants
}

export function Button({
  onClick,
  children,
  className,
  textStyle,
  href = '',
  textColor = 'white',
  isArrow,
  animation,
}: IButtonProps) {
  return href ? (
    <Link href={href}>
      <motion.button
        className={`${styles.button} ${className}`}
        onClick={onClick}
        variants={animation}
      >
        <Text
          size='small'
          weight='semiBold'
          color={textColor}
          className={textStyle}
        >
          {children}
        </Text>
        {isArrow && <Icon name='arrow' size={17} color={textColor} />}
      </motion.button>
    </Link>
  ) : (
    <motion.button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      variants={animation}
    >
      <Text
        size='small'
        weight='semiBold'
        color={textColor}
        className={textStyle}
      >
        {children}
      </Text>
      {isArrow && <Icon name='arrow' size={17} color={textColor} />}
    </motion.button>
  )
}
