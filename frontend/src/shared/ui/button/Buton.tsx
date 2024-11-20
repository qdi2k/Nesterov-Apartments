import {ReactNode} from 'react'
import {Text} from '../text/Text'
import {Icon} from '@/shared/ui/icon/Icon'
import {type FontColors} from '@/shared/model'
import themeStyles from '@/shared/model/styles/theme.module.css'
import styles from './Button.module.css'

interface IButtonProps {
  children: ReactNode
  textColor?: FontColors
}

export function Button({children, textColor}: IButtonProps) {
  return (
    <button className={styles.button}>
      <div
        className={`${styles.backgroundButton} ${themeStyles.orangeBackground}`}
      />
      <Text
        size='small'
        weight='semiBold'
        color={textColor}
        className={styles.text}
      >
        {children}
      </Text>
      <Icon name='arrow' size={17} />
    </button>
  )
}
