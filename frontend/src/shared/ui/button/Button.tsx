'use client'

import {ReactNode} from 'react'
import {Text} from '@/shared/ui'
import {type FontColors} from '@/shared/model'
import styles from './Button.module.css'
import Link from 'next/link'
import {Url} from 'next/dist/shared/lib/router/router'
import {motion, type Variants} from 'framer-motion'

interface IButtonProps {
  onClick?: () => void
  children: ReactNode
  textColor?: FontColors
  textStyle?: string
  className?: string
  isMore?: boolean
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
  isMore,
  animation,
}: IButtonProps) {
  return href ? (
    <Link href={href} className={styles.link}>
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
      </motion.button>
    </Link>
  ) : (
    <motion.button
      className={`${isMore ? styles.moreButton : styles.button} ${className}`}
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
    </motion.button>
  )
}
