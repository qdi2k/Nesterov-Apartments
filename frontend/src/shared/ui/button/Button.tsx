import {ReactNode} from 'react'
import {Icon, Text} from '@/shared/ui'
import {type FontColors} from '@/shared/model'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './Button.module.css'
import Link from 'next/link'
import {Url} from 'next/dist/shared/lib/router/router'

interface IButtonProps {
  children: ReactNode
  textColor?: FontColors
  textStyle?: string
  href?: Url
}

export function Button({
  children,
  textStyle,
  href = '',
  textColor,
}: IButtonProps) {
  return href ? (
    <Link href={href} className={styles.button}>
      <div
        className={`${styles.backgroundButton} ${themeStyles.orangeBackground}`}
      />
      <Text
        size='small'
        weight='semiBold'
        color={textColor}
        className={`${styles.text} ${textStyle}`}
      >
        {children}
      </Text>
      <Icon name='arrow' size={17} color={textColor} />
    </Link>
  ) : (
    <button className={styles.button}>
      <div
        className={`${styles.backgroundButton} ${themeStyles.orangeBackground}`}
      />
      <Text
        size='small'
        weight='semiBold'
        color={textColor}
        className={`${styles.text} ${textStyle}`}
      >
        {children}
      </Text>
      <Icon name='arrow' size={17} color={textColor} />
    </button>
  )
}
