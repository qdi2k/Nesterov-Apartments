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
  isDownload?: boolean
  isMore?: boolean
  href: Url | string
  animation?: Variants
}

interface ICustomLinkProps {
  isDownload?: boolean
  children: ReactNode
  href: Url | string
}

const CustomLink = ({isDownload, href, children}: ICustomLinkProps) => {
  if (isDownload) {
    return (
      <a
        href={href}
        download
        className={styles.link}
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  )
}

export function Button({
  onClick,
  children,
  className,
  textStyle,
  href = '',
  isDownload,
  textColor = 'white',
  isMore,
  animation,
}: IButtonProps) {
  return href ? (
    <CustomLink href={href} isDownload={isDownload}>
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
    </CustomLink>
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
