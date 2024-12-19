import {ReactNode} from 'react'
import {Icon, Text} from '@/shared/ui'
import {type FontColors} from '@/shared/model'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './Button.module.css'

interface IButtonProps {
  children: ReactNode
  textColor?: FontColors
  textStyle?: string
}

export function Button({children, textStyle, textColor}: IButtonProps) {
  return (
    <button className={styles.button}>
      <div
        className={`${styles.backgroundButton} ${themeStyles.orangeBackground}`}
      />
      <Text
        size='small'
        weight='regular'
        color={textColor}
        className={`${styles.text} ${textStyle}`}
      >
        {children}
      </Text>
      <Icon name='arrow' size={17} color={textColor} />
    </button>
  )
}
